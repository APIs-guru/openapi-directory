import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCommentariesFromEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetCommentariesFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCommentariesFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetCommentariesFromEmployeePathParams;
    headers: GetCommentariesFromEmployeeHeaders;
}
export declare class GetCommentariesFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
