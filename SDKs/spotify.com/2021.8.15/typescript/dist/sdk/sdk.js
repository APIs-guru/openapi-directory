import axios from "axios";
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
export var ServerList = [
    "https://api.spotify.com/v1",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
/* SDK Documentation: https://developer.spotify.com/documentation/web-api/reference - Find more info on the official Spotify Web API Reference*/
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
        if (this._serverURL == "") {
            this._serverURL = ServerList[0];
        }
        if (!this._defaultClient) {
            this._defaultClient = axios.create({ baseURL: this._serverURL });
        }
        if (!this._securityClient) {
            this._securityClient = this._defaultClient;
        }
        this.categoryAlbums = new CategoryAlbums(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryArtists = new CategoryArtists(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryBrowse = new CategoryBrowse(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryEpisodes = new CategoryEpisodes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryFollow = new CategoryFollow(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryLibrary = new CategoryLibrary(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryMarkets = new CategoryMarkets(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryPersonalization = new CategoryPersonalization(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryPlayer = new CategoryPlayer(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryPlaylists = new CategoryPlaylists(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categorySearch = new CategorySearch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryShows = new CategoryShows(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryTracks = new CategoryTracks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoryUsersProfile = new CategoryUsersProfile(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
