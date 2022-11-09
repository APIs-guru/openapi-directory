import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEJOB_SERVERS: string[];
export declare class DeleteJobPathParams extends SpeakeasyBase {
    jobSid: string;
}
export declare class DeleteJobSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteJobRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteJobPathParams;
    security: DeleteJobSecurity;
}
export declare class DeleteJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
