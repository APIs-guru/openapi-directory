import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchAssetServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchAssetPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchAssetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAssetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAssetPathParams;
    security: FetchAssetSecurity;
}
export declare class FetchAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceAsset?: shared.ServerlessV1ServiceAsset;
}
