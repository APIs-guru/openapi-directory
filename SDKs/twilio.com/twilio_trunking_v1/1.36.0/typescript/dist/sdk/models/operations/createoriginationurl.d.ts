import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEORIGINATIONURL_SERVERS: string[];
export declare class CreateOriginationUrlPathParams extends SpeakeasyBase {
    trunkSid: string;
}
export declare class CreateOriginationUrlCreateOriginationUrlRequest extends SpeakeasyBase {
    enabled: boolean;
    friendlyName: string;
    priority: number;
    sipUrl: string;
    weight: number;
}
export declare class CreateOriginationUrlSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateOriginationUrlRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateOriginationUrlPathParams;
    request?: CreateOriginationUrlCreateOriginationUrlRequest;
    security: CreateOriginationUrlSecurity;
}
export declare class CreateOriginationUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
