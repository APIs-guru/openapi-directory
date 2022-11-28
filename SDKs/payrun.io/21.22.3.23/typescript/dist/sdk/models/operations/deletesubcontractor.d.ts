import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSubContractorPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class DeleteSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteSubContractorRequest extends SpeakeasyBase {
    pathParams: DeleteSubContractorPathParams;
    headers: DeleteSubContractorHeaders;
}
export declare class DeleteSubContractorResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
