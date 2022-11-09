import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNominalCodesFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetNominalCodesFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetNominalCodesFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetNominalCodesFromEmployerPathParams;
    headers: GetNominalCodesFromEmployerHeaders;
}
export declare class GetNominalCodesFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
