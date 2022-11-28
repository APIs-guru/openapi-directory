import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PatchEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchEmployerRequest extends SpeakeasyBase {
    pathParams: PatchEmployerPathParams;
    headers: PatchEmployerHeaders;
    request: shared.Employer;
}
export declare class PatchEmployerResponse extends SpeakeasyBase {
    contentType: string;
    employer?: shared.Employer;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
