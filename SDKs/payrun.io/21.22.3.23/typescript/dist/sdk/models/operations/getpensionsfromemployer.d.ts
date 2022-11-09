import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPensionsFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetPensionsFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPensionsFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetPensionsFromEmployerPathParams;
    headers: GetPensionsFromEmployerHeaders;
}
export declare class GetPensionsFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
