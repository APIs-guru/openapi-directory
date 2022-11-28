import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployeeRevisionByNumberPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    revisionNumber: string;
}
export declare class GetEmployeeRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeeRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: GetEmployeeRevisionByNumberPathParams;
    headers: GetEmployeeRevisionByNumberHeaders;
}
export declare class GetEmployeeRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    employee?: shared.Employee;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
