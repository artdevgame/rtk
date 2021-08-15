import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

enum OverwolfEventStatus {
  UNSUPPORTED = 0,
  AVAILABLE = 1,
  PARTIAL = 2,
  UNAVAILABLE = 3,
}

interface Key {
  name: string;
  published: boolean;
  state: OverwolfEventStatus;
}

interface Feature {
  keys: Key[];
  name: string;
  published: boolean;
  state: OverwolfEventStatus;
}

interface GameEventStatus {
  disabled: boolean;
  features: Feature[];
  published: boolean;
  state: OverwolfEventStatus;
}

// Define a service using a base URL and expected endpoints
export const gameEventStatusApi = createApi({
  reducerPath: 'gameEventStatusApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://game-events-status.overwolf.com/' }),
  endpoints: (builder) => ({
    gameEventStatus: builder.query<GameEventStatus, string>({
      query: (gameId) => `${gameId}_prod.json`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGameEventStatusQuery } = gameEventStatusApi;
