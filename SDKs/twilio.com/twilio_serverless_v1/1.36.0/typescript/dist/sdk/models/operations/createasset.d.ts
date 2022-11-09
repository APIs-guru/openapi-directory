import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEASSET_SERVERS: string[];
export declare class CreateAssetPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateAssetCreateAssetRequest extends SpeakeasyBase {
    friendlyName: string;
}
export declare class CreateAssetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateAssetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateAssetPathParams;
    request?: CreateAssetCreateAssetRequest;
    security: CreateAssetSecurity;
}
export declare class CreateAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceAsset?: shared.ServerlessV1ServiceAsset;
}
