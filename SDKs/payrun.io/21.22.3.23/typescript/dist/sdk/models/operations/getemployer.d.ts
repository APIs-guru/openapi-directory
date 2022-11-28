import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployerRequest extends SpeakeasyBase {
    pathParams: GetEmployerPathParams;
    headers: GetEmployerHeaders;
}
export declare class GetEmployerResponse extends SpeakeasyBase {
    contentType: string;
    employer?: shared.Employer;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
