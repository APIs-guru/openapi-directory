import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.rawg.io/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * creatorRolesList - Get a list of creator positions (jobs).
    **/
    creatorRolesList(req: operations.CreatorRolesListRequest, config?: AxiosRequestConfig): Promise<operations.CreatorRolesListResponse>;
    /**
     * creatorsList - Get a list of game creators.
    **/
    creatorsList(req: operations.CreatorsListRequest, config?: AxiosRequestConfig): Promise<operations.CreatorsListResponse>;
    /**
     * creatorsRead - Get details of the creator.
    **/
    creatorsRead(req: operations.CreatorsReadRequest, config?: AxiosRequestConfig): Promise<operations.CreatorsReadResponse>;
    /**
     * developersList - Get a list of game developers.
    **/
    developersList(req: operations.DevelopersListRequest, config?: AxiosRequestConfig): Promise<operations.DevelopersListResponse>;
    /**
     * developersRead - Get details of the developer.
    **/
    developersRead(req: operations.DevelopersReadRequest, config?: AxiosRequestConfig): Promise<operations.DevelopersReadResponse>;
    /**
     * gamesAchievementsRead - Get a list of game achievements.
    **/
    gamesAchievementsRead(req: operations.GamesAchievementsReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsReadResponse>;
    /**
     * gamesAdditionsList - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
    **/
    gamesAdditionsList(req: operations.GamesAdditionsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesAdditionsListResponse>;
    /**
     * gamesDevelopmentTeamList - Get a list of individual creators that were part of the development team.
    **/
    gamesDevelopmentTeamList(req: operations.GamesDevelopmentTeamListRequest, config?: AxiosRequestConfig): Promise<operations.GamesDevelopmentTeamListResponse>;
    /**
     * gamesGameSeriesList - Get a list of games that are part of the same series.
    **/
    gamesGameSeriesList(req: operations.GamesGameSeriesListRequest, config?: AxiosRequestConfig): Promise<operations.GamesGameSeriesListResponse>;
    /**
     * gamesList - Get a list of games.
    **/
    gamesList(req: operations.GamesListRequest, config?: AxiosRequestConfig): Promise<operations.GamesListResponse>;
    /**
     * gamesMoviesRead - Get a list of game trailers.
    **/
    gamesMoviesRead(req: operations.GamesMoviesReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesMoviesReadResponse>;
    /**
     * gamesParentGamesList - Get a list of parent games for DLC's and editions.
    **/
    gamesParentGamesList(req: operations.GamesParentGamesListRequest, config?: AxiosRequestConfig): Promise<operations.GamesParentGamesListResponse>;
    /**
     * gamesRead - Get details of the game.
    **/
    gamesRead(req: operations.GamesReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesReadResponse>;
    /**
     * gamesRedditRead - Get a list of most recent posts from the game's subreddit.
    **/
    gamesRedditRead(req: operations.GamesRedditReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesRedditReadResponse>;
    /**
     * gamesScreenshotsList - Get screenshots for the game.
    **/
    gamesScreenshotsList(req: operations.GamesScreenshotsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesScreenshotsListResponse>;
    /**
     * gamesStoresList - Get links to the stores that sell the game.
    **/
    gamesStoresList(req: operations.GamesStoresListRequest, config?: AxiosRequestConfig): Promise<operations.GamesStoresListResponse>;
    /**
     * gamesSuggestedRead - Get a list of visually similar games, available only for business and enterprise API users.
    **/
    gamesSuggestedRead(req: operations.GamesSuggestedReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesSuggestedReadResponse>;
    /**
     * gamesTwitchRead - Get streams on Twitch associated with the game, available only for business and enterprise API users.
    **/
    gamesTwitchRead(req: operations.GamesTwitchReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesTwitchReadResponse>;
    /**
     * gamesYoutubeRead - Get videos from YouTube associated with the game, available only for business and enterprise API users.
    **/
    gamesYoutubeRead(req: operations.GamesYoutubeReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesYoutubeReadResponse>;
    /**
     * genresList - Get a list of video game genres.
    **/
    genresList(req: operations.GenresListRequest, config?: AxiosRequestConfig): Promise<operations.GenresListResponse>;
    /**
     * genresRead - Get details of the genre.
    **/
    genresRead(req: operations.GenresReadRequest, config?: AxiosRequestConfig): Promise<operations.GenresReadResponse>;
    /**
     * platformsList - Get a list of video game platforms.
    **/
    platformsList(req: operations.PlatformsListRequest, config?: AxiosRequestConfig): Promise<operations.PlatformsListResponse>;
    /**
     * platformsListsParentsList - Get a list of parent platforms.
     *
     * For instance, for PS2 and PS4 the “parent platform” is PlayStation.
    **/
    platformsListsParentsList(req: operations.PlatformsListsParentsListRequest, config?: AxiosRequestConfig): Promise<operations.PlatformsListsParentsListResponse>;
    /**
     * platformsRead - Get details of the platform.
    **/
    platformsRead(req: operations.PlatformsReadRequest, config?: AxiosRequestConfig): Promise<operations.PlatformsReadResponse>;
    /**
     * publishersList - Get a list of video game publishers.
    **/
    publishersList(req: operations.PublishersListRequest, config?: AxiosRequestConfig): Promise<operations.PublishersListResponse>;
    /**
     * publishersRead - Get details of the publisher.
    **/
    publishersRead(req: operations.PublishersReadRequest, config?: AxiosRequestConfig): Promise<operations.PublishersReadResponse>;
    /**
     * storesList - Get a list of video game storefronts.
    **/
    storesList(req: operations.StoresListRequest, config?: AxiosRequestConfig): Promise<operations.StoresListResponse>;
    /**
     * storesRead - Get details of the store.
    **/
    storesRead(req: operations.StoresReadRequest, config?: AxiosRequestConfig): Promise<operations.StoresReadResponse>;
    /**
     * tagsList - Get a list of tags.
    **/
    tagsList(req: operations.TagsListRequest, config?: AxiosRequestConfig): Promise<operations.TagsListResponse>;
    /**
     * tagsRead - Get details of the tag.
    **/
    tagsRead(req: operations.TagsReadRequest, config?: AxiosRequestConfig): Promise<operations.TagsReadResponse>;
}
export {};
