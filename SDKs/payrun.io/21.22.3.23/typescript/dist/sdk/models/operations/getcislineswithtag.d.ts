import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCisLinesWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class GetCisLinesWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisLinesWithTagRequest extends SpeakeasyBase {
    pathParams: GetCisLinesWithTagPathParams;
    headers: GetCisLinesWithTagHeaders;
}
export declare class GetCisLinesWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
