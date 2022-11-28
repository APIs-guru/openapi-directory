import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentaryFromEmployeePathParams extends SpeakeasyBase {
    commentaryId: string;
    employeeId: string;
    employerId: string;
}
export declare class GetCommentaryFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCommentaryFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetCommentaryFromEmployeePathParams;
    headers: GetCommentaryFromEmployeeHeaders;
}
export declare class GetCommentaryFromEmployeeResponse extends SpeakeasyBase {
    commentary?: shared.Commentary;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
