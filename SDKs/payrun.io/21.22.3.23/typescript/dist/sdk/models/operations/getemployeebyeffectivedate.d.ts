import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployeeByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employeeId: string;
    employerId: string;
}
export declare class GetEmployeeByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeeByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetEmployeeByEffectiveDatePathParams;
    headers: GetEmployeeByEffectiveDateHeaders;
}
export declare class GetEmployeeByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    employee?: shared.Employee;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
