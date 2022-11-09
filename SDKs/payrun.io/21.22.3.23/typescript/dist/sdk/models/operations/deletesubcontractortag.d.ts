import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteSubContractorTagPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class DeleteSubContractorTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteSubContractorTagRequest extends SpeakeasyBase {
    pathParams: DeleteSubContractorTagPathParams;
    headers: DeleteSubContractorTagHeaders;
}
export declare class DeleteSubContractorTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
