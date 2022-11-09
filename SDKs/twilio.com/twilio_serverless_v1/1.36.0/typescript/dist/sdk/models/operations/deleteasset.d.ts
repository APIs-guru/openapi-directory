import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEASSET_SERVERS: string[];
export declare class DeleteAssetPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteAssetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteAssetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteAssetPathParams;
    security: DeleteAssetSecurity;
}
export declare class DeleteAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
