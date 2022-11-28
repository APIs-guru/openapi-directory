import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllJournalLinesWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class GetAllJournalLinesWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllJournalLinesWithTagRequest extends SpeakeasyBase {
    pathParams: GetAllJournalLinesWithTagPathParams;
    headers: GetAllJournalLinesWithTagHeaders;
}
export declare class GetAllJournalLinesWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
