import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutJournalLineTagPathParams extends SpeakeasyBase {
    employerId: string;
    journalLineId: string;
    tagId: string;
}
export declare class PutJournalLineTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutJournalLineTagRequest extends SpeakeasyBase {
    pathParams: PutJournalLineTagPathParams;
    headers: PutJournalLineTagHeaders;
}
export declare class PutJournalLineTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
