import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteJournalLineTagPathParams extends SpeakeasyBase {
    employerId: string;
    journalLineId: string;
    tagId: string;
}
export declare class DeleteJournalLineTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteJournalLineTagRequest extends SpeakeasyBase {
    pathParams: DeleteJournalLineTagPathParams;
    headers: DeleteJournalLineTagHeaders;
}
export declare class DeleteJournalLineTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
