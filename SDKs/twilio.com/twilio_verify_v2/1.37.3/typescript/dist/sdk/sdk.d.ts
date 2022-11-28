import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://verify.twilio.com"];
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
     * createAccessToken - Create a new enrollment Access Token for the Entity
    **/
    createAccessToken(req: operations.CreateAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccessTokenResponse>;
    /**
     * createBucket - Create a new Bucket for a Rate Limit
    **/
    createBucket(req: operations.CreateBucketRequest, config?: AxiosRequestConfig): Promise<operations.CreateBucketResponse>;
    /**
     * createChallenge - Create a new Challenge for the Factor
    **/
    createChallenge(req: operations.CreateChallengeRequest, config?: AxiosRequestConfig): Promise<operations.CreateChallengeResponse>;
    /**
     * createEntity - Create a new Entity for the Service
    **/
    createEntity(req: operations.CreateEntityRequest, config?: AxiosRequestConfig): Promise<operations.CreateEntityResponse>;
    /**
     * createMessagingConfiguration - Create a new MessagingConfiguration for a service.
    **/
    createMessagingConfiguration(req: operations.CreateMessagingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateMessagingConfigurationResponse>;
    /**
     * createNewFactor - Create a new Factor for the Entity
    **/
    createNewFactor(req: operations.CreateNewFactorRequest, config?: AxiosRequestConfig): Promise<operations.CreateNewFactorResponse>;
    /**
     * createNotification - Create a new Notification for the corresponding Challenge
    **/
    createNotification(req: operations.CreateNotificationRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotificationResponse>;
    /**
     * createRateLimit - Create a new Rate Limit for a Service
    **/
    createRateLimit(req: operations.CreateRateLimitRequest, config?: AxiosRequestConfig): Promise<operations.CreateRateLimitResponse>;
    /**
     * createSafelist - Add a new phone number to SafeList.
    **/
    createSafelist(req: operations.CreateSafelistRequest, config?: AxiosRequestConfig): Promise<operations.CreateSafelistResponse>;
    /**
     * createService - Create a new Verification Service.
    **/
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * createVerification - Create a new Verification using a Service
    **/
    createVerification(req: operations.CreateVerificationRequest, config?: AxiosRequestConfig): Promise<operations.CreateVerificationResponse>;
    /**
     * createVerificationCheck - challenge a specific Verification Check.
    **/
    createVerificationCheck(req: operations.CreateVerificationCheckRequest, config?: AxiosRequestConfig): Promise<operations.CreateVerificationCheckResponse>;
    /**
     * createWebhook - Create a new Webhook for the Service
    **/
    createWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * deleteBucket - Delete a specific Bucket.
    **/
    deleteBucket(req: operations.DeleteBucketRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBucketResponse>;
    /**
     * deleteEntity - Delete a specific Entity.
    **/
    deleteEntity(req: operations.DeleteEntityRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEntityResponse>;
    /**
     * deleteFactor - Delete a specific Factor.
    **/
    deleteFactor(req: operations.DeleteFactorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFactorResponse>;
    /**
     * deleteMessagingConfiguration - Delete a specific MessagingConfiguration.
    **/
    deleteMessagingConfiguration(req: operations.DeleteMessagingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessagingConfigurationResponse>;
    /**
     * deleteRateLimit - Delete a specific Rate Limit.
    **/
    deleteRateLimit(req: operations.DeleteRateLimitRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRateLimitResponse>;
    /**
     * deleteSafelist - Remove a phone number from SafeList.
    **/
    deleteSafelist(req: operations.DeleteSafelistRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSafelistResponse>;
    /**
     * deleteService - Delete a specific Verification Service Instance.
    **/
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * deleteWebhook - Delete a specific Webhook.
    **/
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * fetchAccessToken - Fetch an Access Token for the Entity
    **/
    fetchAccessToken(req: operations.FetchAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.FetchAccessTokenResponse>;
    /**
     * fetchBucket - Fetch a specific Bucket.
    **/
    fetchBucket(req: operations.FetchBucketRequest, config?: AxiosRequestConfig): Promise<operations.FetchBucketResponse>;
    /**
     * fetchChallenge - Fetch a specific Challenge.
    **/
    fetchChallenge(req: operations.FetchChallengeRequest, config?: AxiosRequestConfig): Promise<operations.FetchChallengeResponse>;
    /**
     * fetchEntity - Fetch a specific Entity.
    **/
    fetchEntity(req: operations.FetchEntityRequest, config?: AxiosRequestConfig): Promise<operations.FetchEntityResponse>;
    /**
     * fetchFactor - Fetch a specific Factor.
    **/
    fetchFactor(req: operations.FetchFactorRequest, config?: AxiosRequestConfig): Promise<operations.FetchFactorResponse>;
    /**
     * fetchForm - Fetch the forms for a specific Form Type.
    **/
    fetchForm(req: operations.FetchFormRequest, config?: AxiosRequestConfig): Promise<operations.FetchFormResponse>;
    /**
     * fetchMessagingConfiguration - Fetch a specific MessagingConfiguration.
    **/
    fetchMessagingConfiguration(req: operations.FetchMessagingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.FetchMessagingConfigurationResponse>;
    /**
     * fetchRateLimit - Fetch a specific Rate Limit.
    **/
    fetchRateLimit(req: operations.FetchRateLimitRequest, config?: AxiosRequestConfig): Promise<operations.FetchRateLimitResponse>;
    /**
     * fetchSafelist - Check if a phone number exists in SafeList.
    **/
    fetchSafelist(req: operations.FetchSafelistRequest, config?: AxiosRequestConfig): Promise<operations.FetchSafelistResponse>;
    /**
     * fetchService - Fetch specific Verification Service Instance.
    **/
    fetchService(req: operations.FetchServiceRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    /**
     * fetchVerification - Fetch a specific Verification
    **/
    fetchVerification(req: operations.FetchVerificationRequest, config?: AxiosRequestConfig): Promise<operations.FetchVerificationResponse>;
    /**
     * fetchVerificationAttempt - Fetch a specific verification attempt.
    **/
    fetchVerificationAttempt(req: operations.FetchVerificationAttemptRequest, config?: AxiosRequestConfig): Promise<operations.FetchVerificationAttemptResponse>;
    /**
     * fetchVerificationAttemptsSummary - Get a summary of how many attempts were made and how many were converted.
    **/
    fetchVerificationAttemptsSummary(req: operations.FetchVerificationAttemptsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.FetchVerificationAttemptsSummaryResponse>;
    /**
     * fetchWebhook - Fetch a specific Webhook.
    **/
    fetchWebhook(req: operations.FetchWebhookRequest, config?: AxiosRequestConfig): Promise<operations.FetchWebhookResponse>;
    /**
     * listBucket - Retrieve a list of all Buckets for a Rate Limit.
    **/
    listBucket(req: operations.ListBucketRequest, config?: AxiosRequestConfig): Promise<operations.ListBucketResponse>;
    /**
     * listChallenge - Retrieve a list of all Challenges for a Factor.
    **/
    listChallenge(req: operations.ListChallengeRequest, config?: AxiosRequestConfig): Promise<operations.ListChallengeResponse>;
    /**
     * listEntity - Retrieve a list of all Entities for a Service.
    **/
    listEntity(req: operations.ListEntityRequest, config?: AxiosRequestConfig): Promise<operations.ListEntityResponse>;
    /**
     * listFactor - Retrieve a list of all Factors for an Entity.
    **/
    listFactor(req: operations.ListFactorRequest, config?: AxiosRequestConfig): Promise<operations.ListFactorResponse>;
    /**
     * listMessagingConfiguration - Retrieve a list of all Messaging Configurations for a Service.
    **/
    listMessagingConfiguration(req: operations.ListMessagingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.ListMessagingConfigurationResponse>;
    /**
     * listRateLimit - Retrieve a list of all Rate Limits for a service.
    **/
    listRateLimit(req: operations.ListRateLimitRequest, config?: AxiosRequestConfig): Promise<operations.ListRateLimitResponse>;
    /**
     * listService - Retrieve a list of all Verification Services for an account.
    **/
    listService(req: operations.ListServiceRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    /**
     * listVerificationAttempt - List all the verification attempts for a given Account.
    **/
    listVerificationAttempt(req: operations.ListVerificationAttemptRequest, config?: AxiosRequestConfig): Promise<operations.ListVerificationAttemptResponse>;
    /**
     * listVerificationTemplate - List all the available templates for a given Account.
    **/
    listVerificationTemplate(req: operations.ListVerificationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.ListVerificationTemplateResponse>;
    /**
     * listWebhook - Retrieve a list of all Webhooks for a Service.
    **/
    listWebhook(req: operations.ListWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ListWebhookResponse>;
    /**
     * updateBucket - Update a specific Bucket.
    **/
    updateBucket(req: operations.UpdateBucketRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBucketResponse>;
    /**
     * updateChallenge - Verify a specific Challenge.
    **/
    updateChallenge(req: operations.UpdateChallengeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChallengeResponse>;
    /**
     * updateFactor - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
    **/
    updateFactor(req: operations.UpdateFactorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFactorResponse>;
    /**
     * updateMessagingConfiguration - Update a specific MessagingConfiguration
    **/
    updateMessagingConfiguration(req: operations.UpdateMessagingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMessagingConfigurationResponse>;
    /**
     * updateRateLimit - Update a specific Rate Limit.
    **/
    updateRateLimit(req: operations.UpdateRateLimitRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRateLimitResponse>;
    /**
     * updateService - Update a specific Verification Service.
    **/
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * updateVerification - Update a Verification status
    **/
    updateVerification(req: operations.UpdateVerificationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVerificationResponse>;
    updateWebhook(req: operations.UpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
export {};
