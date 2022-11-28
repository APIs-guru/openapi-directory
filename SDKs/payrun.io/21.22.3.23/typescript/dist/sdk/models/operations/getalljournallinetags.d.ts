import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllJournalLineTagsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetAllJournalLineTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllJournalLineTagsRequest extends SpeakeasyBase {
    pathParams: GetAllJournalLineTagsPathParams;
    headers: GetAllJournalLineTagsHeaders;
}
export declare class GetAllJournalLineTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
