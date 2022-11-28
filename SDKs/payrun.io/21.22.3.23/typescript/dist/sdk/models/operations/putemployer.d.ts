import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PutEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutEmployerRequest extends SpeakeasyBase {
    pathParams: PutEmployerPathParams;
    headers: PutEmployerHeaders;
    request: shared.Employer;
}
export declare class PutEmployerResponse extends SpeakeasyBase {
    contentType: string;
    employer?: shared.Employer;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
