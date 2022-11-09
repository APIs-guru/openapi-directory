import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCisLinesFromSubContractorPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class GetCisLinesFromSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisLinesFromSubContractorRequest extends SpeakeasyBase {
    pathParams: GetCisLinesFromSubContractorPathParams;
    headers: GetCisLinesFromSubContractorHeaders;
}
export declare class GetCisLinesFromSubContractorResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
