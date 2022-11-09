import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteSubContractorRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    revisionNumber: string;
    subContractorId: string;
}
export declare class DeleteSubContractorRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteSubContractorRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: DeleteSubContractorRevisionByNumberPathParams;
    headers: DeleteSubContractorRevisionByNumberHeaders;
}
export declare class DeleteSubContractorRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
