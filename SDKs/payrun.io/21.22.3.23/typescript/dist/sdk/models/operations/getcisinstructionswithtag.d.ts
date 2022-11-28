import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCisInstructionsWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class GetCisInstructionsWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisInstructionsWithTagRequest extends SpeakeasyBase {
    pathParams: GetCisInstructionsWithTagPathParams;
    headers: GetCisInstructionsWithTagHeaders;
}
export declare class GetCisInstructionsWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
