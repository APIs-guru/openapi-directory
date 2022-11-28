import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePayRunPathParams extends SpeakeasyBase {
    employerId: string;
    payRunId: string;
    payScheduleId: string;
}
export declare class DeletePayRunHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayRunRequest extends SpeakeasyBase {
    pathParams: DeletePayRunPathParams;
    headers: DeletePayRunHeaders;
}
export declare class DeletePayRunResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
