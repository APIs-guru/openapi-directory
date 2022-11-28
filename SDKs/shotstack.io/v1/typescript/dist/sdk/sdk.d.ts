import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.shotstack.io/{version}", "https://api.shotstack.io/serve/{version}"];
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
     * deleteAsset - Delete Asset
     *
     * Delete an asset by its asset id. If a render creates multiple assets, such as thumbnail and poster images, each asset must be deleted individually by the asset id.
     *
     * **base URL:** https://api.shotstack.io/serve/{version}
    **/
    deleteAsset(req: operations.DeleteAssetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssetResponse>;
    /**
     * getAsset - Get Asset
     *
     * The Serve API is used to interact with, and delete hosted assets including videos, images, audio files,  thumbnails and poster images. Use this endpoint to fetch an asset by asset id. Note that an asset id is unique for each asset and different from the render id.
     *
     * **base URL:** https://api.shotstack.io/serve/{version}
    **/
    getAsset(req: operations.GetAssetRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetResponse>;
    /**
     * getAssetByRenderId - Get Asset by Render ID
     *
     * A render may generate more than one file, such as a video, thumbnail and poster image. When the assets are created the only known id is the render id returned by the original [render request](#render-video), status  request or webhook. This endpoint lets you look up one or more assets by the render id.
     *
     * **base URL:** https://api.shotstack.io/serve/{version}
    **/
    getAssetByRenderId(req: operations.GetAssetByRenderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetByRenderIdResponse>;
    /**
     * getRender - Get Render Status
     *
     * Get the rendering status, temporary asset url and details of a render by ID.
     *
     * **base URL:** https://api.shotstack.io/{version}
    **/
    getRender(req: operations.GetRenderRequest, config?: AxiosRequestConfig): Promise<operations.GetRenderResponse>;
    /**
     * postRender - Render Asset
     *
     * Queue and render the contents of a timeline as a video, image or audio file.
    **/
    postRender(req: operations.PostRenderRequest, config?: AxiosRequestConfig): Promise<operations.PostRenderResponse>;
}
export {};
