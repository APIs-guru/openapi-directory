import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayCodesFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetPayCodesFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayCodesFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetPayCodesFromEmployerPathParams;
    headers: GetPayCodesFromEmployerHeaders;
}
export declare class GetPayCodesFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
