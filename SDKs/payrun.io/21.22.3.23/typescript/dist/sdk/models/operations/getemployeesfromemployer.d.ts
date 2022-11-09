import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployeesFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetEmployeesFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeesFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetEmployeesFromEmployerPathParams;
    headers: GetEmployeesFromEmployerHeaders;
}
export declare class GetEmployeesFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
