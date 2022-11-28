import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchFaxMediaServerList: readonly ["https://fax.twilio.com"];
export declare class FetchFaxMediaPathParams extends SpeakeasyBase {
    faxSid: string;
    sid: string;
}
export declare class FetchFaxMediaSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFaxMediaRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFaxMediaPathParams;
    security: FetchFaxMediaSecurity;
}
export declare class FetchFaxMediaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    faxV1FaxFaxMedia?: shared.FaxV1FaxFaxMedia;
}
