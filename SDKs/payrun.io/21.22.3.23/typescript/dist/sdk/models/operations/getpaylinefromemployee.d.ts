import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayLineFromEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payLineId: string;
}
export declare class GetPayLineFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayLineFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetPayLineFromEmployeePathParams;
    headers: GetPayLineFromEmployeeHeaders;
}
export declare class GetPayLineFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payLine?: shared.PayLine;
    statusCode: number;
}
