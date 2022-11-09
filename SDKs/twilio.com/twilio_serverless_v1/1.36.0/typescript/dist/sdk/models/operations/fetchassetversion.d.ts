import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHASSETVERSION_SERVERS: string[];
export declare class FetchAssetVersionPathParams extends SpeakeasyBase {
    assetSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchAssetVersionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAssetVersionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAssetVersionPathParams;
    security: FetchAssetVersionSecurity;
}
export declare class FetchAssetVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceAssetAssetVersion?: shared.ServerlessV1ServiceAssetAssetVersion;
}
