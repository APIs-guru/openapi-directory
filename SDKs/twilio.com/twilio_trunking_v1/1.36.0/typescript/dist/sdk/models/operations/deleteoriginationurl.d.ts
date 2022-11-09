import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEORIGINATIONURL_SERVERS: string[];
export declare class DeleteOriginationUrlPathParams extends SpeakeasyBase {
    sid: string;
    trunkSid: string;
}
export declare class DeleteOriginationUrlSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteOriginationUrlRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteOriginationUrlPathParams;
    security: DeleteOriginationUrlSecurity;
}
export declare class DeleteOriginationUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
