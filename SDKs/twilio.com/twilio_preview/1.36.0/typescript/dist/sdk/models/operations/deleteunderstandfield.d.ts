import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEUNDERSTANDFIELD_SERVERS: string[];
export declare class DeleteUnderstandFieldPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class DeleteUnderstandFieldSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandFieldRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandFieldPathParams;
    security: DeleteUnderstandFieldSecurity;
}
export declare class DeleteUnderstandFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
