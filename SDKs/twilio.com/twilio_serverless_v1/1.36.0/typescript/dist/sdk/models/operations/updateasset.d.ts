import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEASSET_SERVERS: string[];
export declare class UpdateAssetPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateAssetUpdateAssetRequest extends SpeakeasyBase {
    friendlyName: string;
}
export declare class UpdateAssetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateAssetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateAssetPathParams;
    request?: UpdateAssetUpdateAssetRequest;
    security: UpdateAssetSecurity;
}
export declare class UpdateAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceAsset?: shared.ServerlessV1ServiceAsset;
}
