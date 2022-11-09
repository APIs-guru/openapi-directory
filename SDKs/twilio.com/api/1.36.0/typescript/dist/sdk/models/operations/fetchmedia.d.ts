import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHMEDIA_SERVERS: string[];
export declare class FetchMediaPathParams extends SpeakeasyBase {
    accountSid: string;
    messageSid: string;
    sid: string;
}
export declare class FetchMediaSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMediaRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMediaPathParams;
    security: FetchMediaSecurity;
}
export declare class FetchMediaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountMessageMedia?: shared.ApiV2010AccountMessageMedia;
}
