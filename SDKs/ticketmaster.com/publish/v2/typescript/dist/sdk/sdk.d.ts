import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://ticketmaster.com//www.ticketmaster.com/publish/v2"];
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
     * patchAttraction - Publish a patch on an attraction
     *
     * Since 1.0.0
    **/
    patchAttraction(req: operations.PatchAttractionRequest, config?: AxiosRequestConfig): Promise<operations.PatchAttractionResponse>;
    /**
     * patchEvent - Publish a patch on an event
     *
     * Since 1.0.0
    **/
    patchEvent(req: operations.PatchEventRequest, config?: AxiosRequestConfig): Promise<operations.PatchEventResponse>;
    /**
     * patchVenue - Publish a patch on a venue
     *
     * Since 1.0.0
    **/
    patchVenue(req: operations.PatchVenueRequest, config?: AxiosRequestConfig): Promise<operations.PatchVenueResponse>;
    /**
     * publishAttraction - Publish an attractions
     *
     * Since 1.0.0
    **/
    publishAttraction(req: operations.PublishAttractionRequest, config?: AxiosRequestConfig): Promise<operations.PublishAttractionResponse>;
    /**
     * publishAttractionVideos - Publish a video on an attraction
     *
     * Since 1.0.0
    **/
    publishAttractionVideos(req: operations.PublishAttractionVideosRequest, config?: AxiosRequestConfig): Promise<operations.PublishAttractionVideosResponse>;
    /**
     * publishEntitlements - Publish entitlements on an entity
     *
     * Since 2.0.0
    **/
    publishEntitlements(req: operations.PublishEntitlementsRequest, config?: AxiosRequestConfig): Promise<operations.PublishEntitlementsResponse>;
    /**
     * publishEvent - Publish an event
     *
     * Since 1.0.0
    **/
    publishEvent(req: operations.PublishEventRequest, config?: AxiosRequestConfig): Promise<operations.PublishEventResponse>;
    /**
     * publishEventVideos - Publish a video on an event
     *
     * Since 1.0.0
    **/
    publishEventVideos(req: operations.PublishEventVideosRequest, config?: AxiosRequestConfig): Promise<operations.PublishEventVideosResponse>;
    /**
     * publishExtension - Publish extension on an entity
     *
     * Since 1.0.0
    **/
    publishExtension(req: operations.PublishExtensionRequest, config?: AxiosRequestConfig): Promise<operations.PublishExtensionResponse>;
    /**
     * publishVenue - Publish a venue
     *
     * Since 1.0.0
    **/
    publishVenue(req: operations.PublishVenueRequest, config?: AxiosRequestConfig): Promise<operations.PublishVenueResponse>;
}
export {};
