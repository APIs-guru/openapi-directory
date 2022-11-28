import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubContractorRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    revisionNumber: string;
    subContractorId: string;
}
export declare class GetSubContractorRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetSubContractorRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: GetSubContractorRevisionByNumberPathParams;
    headers: GetSubContractorRevisionByNumberHeaders;
}
export declare class GetSubContractorRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    subContractor?: shared.SubContractor;
}
