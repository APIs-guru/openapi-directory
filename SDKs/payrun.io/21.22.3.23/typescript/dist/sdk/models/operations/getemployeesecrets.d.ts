import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployeeSecretsPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetEmployeeSecretsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeeSecretsRequest extends SpeakeasyBase {
    pathParams: GetEmployeeSecretsPathParams;
    headers: GetEmployeeSecretsHeaders;
}
export declare class GetEmployeeSecretsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
