import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNominalCodeFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    nominalCodeId: string;
}
export declare class GetNominalCodeFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetNominalCodeFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetNominalCodeFromEmployerPathParams;
    headers: GetNominalCodeFromEmployerHeaders;
}
export declare class GetNominalCodeFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    nominalCode?: shared.NominalCode;
    statusCode: number;
}
