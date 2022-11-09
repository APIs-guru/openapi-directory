import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHAPP_SERVERS: string[];
export declare class FetchAppPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchAppSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAppRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAppPathParams;
    security: FetchAppSecurity;
}
export declare class FetchAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    microvisorV1App?: shared.MicrovisorV1App;
}
