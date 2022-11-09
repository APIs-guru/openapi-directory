import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagsFromJournalLinePathParams extends SpeakeasyBase {
    employerId: string;
    journalLineId: string;
}
export declare class GetTagsFromJournalLineHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromJournalLineRequest extends SpeakeasyBase {
    pathParams: GetTagsFromJournalLinePathParams;
    headers: GetTagsFromJournalLineHeaders;
}
export declare class GetTagsFromJournalLineResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
