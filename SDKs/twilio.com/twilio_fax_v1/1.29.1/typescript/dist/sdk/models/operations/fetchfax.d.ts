import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHFAX_SERVERS: string[];
export declare class FetchFaxPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchFaxSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFaxRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFaxPathParams;
    security: FetchFaxSecurity;
}
export declare class FetchFaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    faxV1Fax?: shared.FaxV1Fax;
}
