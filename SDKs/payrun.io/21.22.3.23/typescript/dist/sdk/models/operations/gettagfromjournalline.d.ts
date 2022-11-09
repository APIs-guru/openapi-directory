import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagFromJournalLinePathParams extends SpeakeasyBase {
    employerId: string;
    journalLineId: string;
    tagId: string;
}
export declare class GetTagFromJournalLineHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromJournalLineRequest extends SpeakeasyBase {
    pathParams: GetTagFromJournalLinePathParams;
    headers: GetTagFromJournalLineHeaders;
}
export declare class GetTagFromJournalLineResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
