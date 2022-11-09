import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCisLineFromSubContractorPathParams extends SpeakeasyBase {
    cisLineId: string;
    employerId: string;
    subContractorId: string;
}
export declare class GetCisLineFromSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisLineFromSubContractorRequest extends SpeakeasyBase {
    pathParams: GetCisLineFromSubContractorPathParams;
    headers: GetCisLineFromSubContractorHeaders;
}
export declare class GetCisLineFromSubContractorResponse extends SpeakeasyBase {
    cisLine?: shared.CisLine;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
