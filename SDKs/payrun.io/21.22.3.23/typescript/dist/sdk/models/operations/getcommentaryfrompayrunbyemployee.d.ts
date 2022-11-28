import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentaryFromPayRunByEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payRunId: string;
    payScheduleId: string;
}
export declare class GetCommentaryFromPayRunByEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCommentaryFromPayRunByEmployeeRequest extends SpeakeasyBase {
    pathParams: GetCommentaryFromPayRunByEmployeePathParams;
    headers: GetCommentaryFromPayRunByEmployeeHeaders;
}
export declare class GetCommentaryFromPayRunByEmployeeResponse extends SpeakeasyBase {
    commentary?: shared.Commentary;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
