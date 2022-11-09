import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagsFromCisInstructionPathParams extends SpeakeasyBase {
    cisInstructionId: string;
    employerId: string;
    subContractorId: string;
}
export declare class GetTagsFromCisInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromCisInstructionRequest extends SpeakeasyBase {
    pathParams: GetTagsFromCisInstructionPathParams;
    headers: GetTagsFromCisInstructionHeaders;
}
export declare class GetTagsFromCisInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
