import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { CategoryAlbums } from "./categoryalbums";
import { CategoryArtists } from "./categoryartists";
import { CategoryBrowse } from "./categorybrowse";
import { CategoryEpisodes } from "./categoryepisodes";
import { CategoryFollow } from "./categoryfollow";
import { CategoryLibrary } from "./categorylibrary";
import { CategoryMarkets } from "./categorymarkets";
import { CategoryPersonalization } from "./categorypersonalization";
import { CategoryPlayer } from "./categoryplayer";
import { CategoryPlaylists } from "./categoryplaylists";
import { CategorySearch } from "./categorysearch";
import { CategoryShows } from "./categoryshows";
import { CategoryTracks } from "./categorytracks";
import { CategoryUsersProfile } from "./categoryusersprofile";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.spotify.com/v1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

/* SDK Documentation: https://developer.spotify.com/documentation/web-api/reference - Find more info on the official Spotify Web API Reference*/
export class SDK {
  public categoryAlbums: CategoryAlbums;
  public categoryArtists: CategoryArtists;
  public categoryBrowse: CategoryBrowse;
  public categoryEpisodes: CategoryEpisodes;
  public categoryFollow: CategoryFollow;
  public categoryLibrary: CategoryLibrary;
  public categoryMarkets: CategoryMarkets;
  public categoryPersonalization: CategoryPersonalization;
  public categoryPlayer: CategoryPlayer;
  public categoryPlaylists: CategoryPlaylists;
  public categorySearch: CategorySearch;
  public categoryShows: CategoryShows;
  public categoryTracks: CategoryTracks;
  public categoryUsersProfile: CategoryUsersProfile;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    this.categoryAlbums = new CategoryAlbums(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryArtists = new CategoryArtists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryBrowse = new CategoryBrowse(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryEpisodes = new CategoryEpisodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryFollow = new CategoryFollow(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryLibrary = new CategoryLibrary(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryMarkets = new CategoryMarkets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryPersonalization = new CategoryPersonalization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryPlayer = new CategoryPlayer(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryPlaylists = new CategoryPlaylists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categorySearch = new CategorySearch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryShows = new CategoryShows(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryTracks = new CategoryTracks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categoryUsersProfile = new CategoryUsersProfile(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
