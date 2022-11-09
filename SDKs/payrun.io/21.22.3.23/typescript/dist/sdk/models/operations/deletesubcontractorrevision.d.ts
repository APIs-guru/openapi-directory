import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteSubContractorRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    subContractorId: string;
}
export declare class DeleteSubContractorRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteSubContractorRevisionRequest extends SpeakeasyBase {
    pathParams: DeleteSubContractorRevisionPathParams;
    headers: DeleteSubContractorRevisionHeaders;
}
export declare class DeleteSubContractorRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
