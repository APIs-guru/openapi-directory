import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEORIGINATIONURL_SERVERS: string[];
export declare class UpdateOriginationUrlPathParams extends SpeakeasyBase {
    sid: string;
    trunkSid: string;
}
export declare class UpdateOriginationUrlUpdateOriginationUrlRequest extends SpeakeasyBase {
    enabled?: boolean;
    friendlyName?: string;
    priority?: number;
    sipUrl?: string;
    weight?: number;
}
export declare class UpdateOriginationUrlSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateOriginationUrlRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateOriginationUrlPathParams;
    request?: UpdateOriginationUrlUpdateOriginationUrlRequest;
    security: UpdateOriginationUrlSecurity;
}
export declare class UpdateOriginationUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
