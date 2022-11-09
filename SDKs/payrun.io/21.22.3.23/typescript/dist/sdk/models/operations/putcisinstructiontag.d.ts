import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutCisInstructionTagPathParams extends SpeakeasyBase {
    cisInstructionId: string;
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class PutCisInstructionTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutCisInstructionTagRequest extends SpeakeasyBase {
    pathParams: PutCisInstructionTagPathParams;
    headers: PutCisInstructionTagHeaders;
}
export declare class PutCisInstructionTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
