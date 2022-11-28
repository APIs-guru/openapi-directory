import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCisLineTypeFromEmployerPathParams extends SpeakeasyBase {
    cisLineTypeId: string;
    employerId: string;
}
export declare class GetCisLineTypeFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisLineTypeFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetCisLineTypeFromEmployerPathParams;
    headers: GetCisLineTypeFromEmployerHeaders;
}
export declare class GetCisLineTypeFromEmployerResponse extends SpeakeasyBase {
    cisLineType?: shared.CisLineType;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
