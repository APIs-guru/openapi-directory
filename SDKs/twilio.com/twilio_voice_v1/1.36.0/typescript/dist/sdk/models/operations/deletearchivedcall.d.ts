import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEARCHIVEDCALL_SERVERS: string[];
export declare class DeleteArchivedCallPathParams extends SpeakeasyBase {
    date: Date;
    sid: string;
}
export declare class DeleteArchivedCallSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteArchivedCallRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteArchivedCallPathParams;
    security: DeleteArchivedCallSecurity;
}
export declare class DeleteArchivedCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
