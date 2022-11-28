import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://tl-api.azurewebsites.net", "https://triviallife.azure-api.net/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * articleAddMeasureUnit - Add measure unit
    **/
    articleAddMeasureUnit(req: operations.ArticleAddMeasureUnitRequest, config?: AxiosRequestConfig): Promise<operations.ArticleAddMeasureUnitResponse>;
    /**
     * articleDelete - Delete article from the system
     *
    **/
    articleDelete(req: operations.ArticleDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ArticleDeleteResponse>;
    articleGetAddons(req: operations.ArticleGetAddonsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetAddonsResponse>;
    /**
     * articleGetMeasureUnits - Get mesure units
    **/
    articleGetMeasureUnits(req: operations.ArticleGetMeasureUnitsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetMeasureUnitsResponse>;
    /**
     * articleGetRevenueAccounts - Get Revenue Accounts
    **/
    articleGetRevenueAccounts(config?: AxiosRequestConfig): Promise<operations.ArticleGetRevenueAccountsResponse>;
    /**
     * articleGymArticleDetails - Get Gym specific properties for article
     *
    **/
    articleGymArticleDetails(req: operations.ArticleGymArticleDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGymArticleDetailsResponse>;
    /**
     * articlePost - Add new article
     *
    **/
    articlePost(req: operations.ArticlePostRequest, config?: AxiosRequestConfig): Promise<operations.ArticlePostResponse>;
    /**
     * articlePut - update existing article
     *
    **/
    articlePut(req: operations.ArticlePutRequest, config?: AxiosRequestConfig): Promise<operations.ArticlePutResponse>;
    /**
     * articleSearch - Search articles
     * It will only return basic information of article
     *
    **/
    articleSearch(req: operations.ArticleSearchRequest, config?: AxiosRequestConfig): Promise<operations.ArticleSearchResponse>;
    /**
     * articleUpdateArticleGymDetails - Add article details that associate with a Gym
     *
    **/
    articleUpdateArticleGymDetails(req: operations.ArticleUpdateArticleGymDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleUpdateArticleGymDetailsResponse>;
    /**
     * articleUpdateStatus - Deactivate existing article
    **/
    articleUpdateStatus(req: operations.ArticleUpdateStatusRequest, config?: AxiosRequestConfig): Promise<operations.ArticleUpdateStatusResponse>;
    /**
     * articleGet - Get article details
     * This will return all properties related to article entity
     *
    **/
    articleGet(req: operations.ArticleGetRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetResponse>;
    /**
     * authLogin - Authenticate and provide token for autherizations.
     *
    **/
    authLogin(req: operations.AuthLoginRequest, config?: AxiosRequestConfig): Promise<operations.AuthLoginResponse>;
    /**
     * gymGet - Get gym details
     * This will return all properties related to gym entity
     *
    **/
    gymGet(req: operations.GymGetRequest, config?: AxiosRequestConfig): Promise<operations.GymGetResponse>;
    /**
     * membershipGet - Get all of the members details
     * This will return all properties related to member entity
     *
    **/
    membershipGet(req: operations.MembershipGetRequest, config?: AxiosRequestConfig): Promise<operations.MembershipGetResponse>;
    /**
     * membershipPost - Add new Member
     *
    **/
    membershipPost(req: operations.MembershipPostRequest, config?: AxiosRequestConfig): Promise<operations.MembershipPostResponse>;
    /**
     * packageDelete - Delete existing package
     *
    **/
    packageDelete(req: operations.PackageDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PackageDeleteResponse>;
    /**
     * packageGet - Get package details by packageId
     *
    **/
    packageGet(req: operations.PackageGetRequest, config?: AxiosRequestConfig): Promise<operations.PackageGetResponse>;
    /**
     * packagePost - Insert new package into the system
     *
    **/
    packagePost(req: operations.PackagePostRequest, config?: AxiosRequestConfig): Promise<operations.PackagePostResponse>;
    /**
     * packagePut - Update existing package by its ID
     *
    **/
    packagePut(req: operations.PackagePutRequest, config?: AxiosRequestConfig): Promise<operations.PackagePutResponse>;
    /**
     * packageSearch - Search packages
     *
    **/
    packageSearch(req: operations.PackageSearchRequest, config?: AxiosRequestConfig): Promise<operations.PackageSearchResponse>;
    /**
     * packageUpdateStatus - Status update of existing package
    **/
    packageUpdateStatus(req: operations.PackageUpdateStatusRequest, config?: AxiosRequestConfig): Promise<operations.PackageUpdateStatusResponse>;
    /**
     * statusGet - Get the current status of message
    **/
    statusGet(req: operations.StatusGetRequest, config?: AxiosRequestConfig): Promise<operations.StatusGetResponse>;
    /**
     * testGet - Get the all Test objects.
     *
    **/
    testGet(config?: AxiosRequestConfig): Promise<operations.TestGetResponse>;
    /**
     * userGet - Get all Users detail
     * This will return all properties related to User entity
     *
    **/
    userGet(config?: AxiosRequestConfig): Promise<operations.UserGetResponse>;
    /**
     * userRegisterUser - Register a new User
     *
    **/
    userRegisterUser(req: operations.UserRegisterUserRequest, config?: AxiosRequestConfig): Promise<operations.UserRegisterUserResponse>;
    /**
     * userUpdateUser - Update an exsisting User
     *
    **/
    userUpdateUser(req: operations.UserUpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UserUpdateUserResponse>;
}
export {};
