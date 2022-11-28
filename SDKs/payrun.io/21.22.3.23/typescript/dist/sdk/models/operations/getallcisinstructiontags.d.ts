import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllCisInstructionTagsPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class GetAllCisInstructionTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllCisInstructionTagsRequest extends SpeakeasyBase {
    pathParams: GetAllCisInstructionTagsPathParams;
    headers: GetAllCisInstructionTagsHeaders;
}
export declare class GetAllCisInstructionTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
