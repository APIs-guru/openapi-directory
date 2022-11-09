import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CreatorRolesList(req: operations.CreatorRolesListRequest, config?: AxiosRequestConfig): Promise<operations.CreatorRolesListResponse>;
    CreatorsList(req: operations.CreatorsListRequest, config?: AxiosRequestConfig): Promise<operations.CreatorsListResponse>;
    CreatorsRead(req: operations.CreatorsReadRequest, config?: AxiosRequestConfig): Promise<operations.CreatorsReadResponse>;
    DevelopersList(req: operations.DevelopersListRequest, config?: AxiosRequestConfig): Promise<operations.DevelopersListResponse>;
    DevelopersRead(req: operations.DevelopersReadRequest, config?: AxiosRequestConfig): Promise<operations.DevelopersReadResponse>;
    GamesAchievementsRead(req: operations.GamesAchievementsReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsReadResponse>;
    GamesAdditionsList(req: operations.GamesAdditionsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesAdditionsListResponse>;
    GamesDevelopmentTeamList(req: operations.GamesDevelopmentTeamListRequest, config?: AxiosRequestConfig): Promise<operations.GamesDevelopmentTeamListResponse>;
    GamesGameSeriesList(req: operations.GamesGameSeriesListRequest, config?: AxiosRequestConfig): Promise<operations.GamesGameSeriesListResponse>;
    GamesList(req: operations.GamesListRequest, config?: AxiosRequestConfig): Promise<operations.GamesListResponse>;
    GamesMoviesRead(req: operations.GamesMoviesReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesMoviesReadResponse>;
    GamesParentGamesList(req: operations.GamesParentGamesListRequest, config?: AxiosRequestConfig): Promise<operations.GamesParentGamesListResponse>;
    GamesRead(req: operations.GamesReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesReadResponse>;
    GamesRedditRead(req: operations.GamesRedditReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesRedditReadResponse>;
    GamesScreenshotsList(req: operations.GamesScreenshotsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesScreenshotsListResponse>;
    GamesStoresList(req: operations.GamesStoresListRequest, config?: AxiosRequestConfig): Promise<operations.GamesStoresListResponse>;
    GamesSuggestedRead(req: operations.GamesSuggestedReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesSuggestedReadResponse>;
    GamesTwitchRead(req: operations.GamesTwitchReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesTwitchReadResponse>;
    GamesYoutubeRead(req: operations.GamesYoutubeReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesYoutubeReadResponse>;
    GenresList(req: operations.GenresListRequest, config?: AxiosRequestConfig): Promise<operations.GenresListResponse>;
    GenresRead(req: operations.GenresReadRequest, config?: AxiosRequestConfig): Promise<operations.GenresReadResponse>;
    PlatformsList(req: operations.PlatformsListRequest, config?: AxiosRequestConfig): Promise<operations.PlatformsListResponse>;
    /**
     * For instance, for PS2 and PS4 the “parent platform” is PlayStation.
    **/
    PlatformsListsParentsList(req: operations.PlatformsListsParentsListRequest, config?: AxiosRequestConfig): Promise<operations.PlatformsListsParentsListResponse>;
    PlatformsRead(req: operations.PlatformsReadRequest, config?: AxiosRequestConfig): Promise<operations.PlatformsReadResponse>;
    PublishersList(req: operations.PublishersListRequest, config?: AxiosRequestConfig): Promise<operations.PublishersListResponse>;
    PublishersRead(req: operations.PublishersReadRequest, config?: AxiosRequestConfig): Promise<operations.PublishersReadResponse>;
    StoresList(req: operations.StoresListRequest, config?: AxiosRequestConfig): Promise<operations.StoresListResponse>;
    StoresRead(req: operations.StoresReadRequest, config?: AxiosRequestConfig): Promise<operations.StoresReadResponse>;
    TagsList(req: operations.TagsListRequest, config?: AxiosRequestConfig): Promise<operations.TagsListResponse>;
    TagsRead(req: operations.TagsReadRequest, config?: AxiosRequestConfig): Promise<operations.TagsReadResponse>;
}
export {};
