import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdAttachmentsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdAttachmentsQueryParams extends SpeakeasyBase {
    unassigned?: number;
}
export declare class GetUsersIdAttachmentsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdAttachmentsPathParams;
    queryParams: GetUsersIdAttachmentsQueryParams;
}
export declare class GetUsersIdAttachmentsResponse extends SpeakeasyBase {
    attachments?: shared.Attachment[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
