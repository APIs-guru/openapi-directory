import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCisLineTagPathParams extends SpeakeasyBase {
    cisLineId: string;
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class DeleteCisLineTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteCisLineTagRequest extends SpeakeasyBase {
    pathParams: DeleteCisLineTagPathParams;
    headers: DeleteCisLineTagHeaders;
}
export declare class DeleteCisLineTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
