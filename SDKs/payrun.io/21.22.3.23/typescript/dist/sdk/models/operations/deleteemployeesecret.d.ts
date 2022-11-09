import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteEmployeeSecretPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    secretId: string;
}
export declare class DeleteEmployeeSecretHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployeeSecretRequest extends SpeakeasyBase {
    pathParams: DeleteEmployeeSecretPathParams;
    headers: DeleteEmployeeSecretHeaders;
}
export declare class DeleteEmployeeSecretResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
