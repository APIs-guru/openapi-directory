import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployeeSecretPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    secretId: string;
}
export declare class GetEmployeeSecretHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeeSecretRequest extends SpeakeasyBase {
    pathParams: GetEmployeeSecretPathParams;
    headers: GetEmployeeSecretHeaders;
}
export declare class GetEmployeeSecretResponse extends SpeakeasyBase {
    contentType: string;
    employeeSecret?: shared.EmployeeSecret;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
