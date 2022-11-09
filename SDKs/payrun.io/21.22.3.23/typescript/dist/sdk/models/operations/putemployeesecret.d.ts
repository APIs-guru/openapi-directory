import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutEmployeeSecretPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    secretId: string;
}
export declare class PutEmployeeSecretHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutEmployeeSecretRequest extends SpeakeasyBase {
    pathParams: PutEmployeeSecretPathParams;
    headers: PutEmployeeSecretHeaders;
}
export declare class PutEmployeeSecretResponse extends SpeakeasyBase {
    contentType: string;
    employeeSecret?: shared.EmployeeSecret;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
