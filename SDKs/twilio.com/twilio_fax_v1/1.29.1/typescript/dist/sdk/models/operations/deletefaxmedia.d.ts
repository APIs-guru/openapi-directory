import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEFAXMEDIA_SERVERS: string[];
export declare class DeleteFaxMediaPathParams extends SpeakeasyBase {
    faxSid: string;
    sid: string;
}
export declare class DeleteFaxMediaSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFaxMediaRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFaxMediaPathParams;
    security: DeleteFaxMediaSecurity;
}
export declare class DeleteFaxMediaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
