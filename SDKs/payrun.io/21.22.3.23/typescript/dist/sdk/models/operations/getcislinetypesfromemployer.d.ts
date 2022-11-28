import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCisLineTypesFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetCisLineTypesFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisLineTypesFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetCisLineTypesFromEmployerPathParams;
    headers: GetCisLineTypesFromEmployerHeaders;
}
export declare class GetCisLineTypesFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
