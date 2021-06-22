export type reduxState = {
  AppState: AppState;
};
export type AppState = {
  breweryState: {
    id: number;
    name: string;
    country?: string;
    city?: string;
    phone?: string;
    website_url?: string;
  };
  breweryDetailsState: {
    id: number;
    name: string;
    country?: string;
    city?: string;
    phone?: string;
    website_url?: string;
    longitude?: number;
    latitude?: number;
    state?: number;
    brewery_type?: string;
    street?: string;
  };
};
