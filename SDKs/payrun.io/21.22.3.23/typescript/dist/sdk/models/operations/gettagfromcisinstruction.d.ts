import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagFromCisInstructionPathParams extends SpeakeasyBase {
    cisInstructionId: string;
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class GetTagFromCisInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromCisInstructionRequest extends SpeakeasyBase {
    pathParams: GetTagFromCisInstructionPathParams;
    headers: GetTagFromCisInstructionHeaders;
}
export declare class GetTagFromCisInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
