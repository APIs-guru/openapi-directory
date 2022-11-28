import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersIdAttachmentsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostUsersIdAttachmentsRequestBody extends SpeakeasyBase {
    fileData?: string;
    fileName?: string;
    title?: string;
}
export declare class PostUsersIdAttachmentsRequest extends SpeakeasyBase {
    pathParams: PostUsersIdAttachmentsPathParams;
    request?: PostUsersIdAttachmentsRequestBody;
}
export declare class PostUsersIdAttachmentsResponse extends SpeakeasyBase {
    attachment?: shared.Attachment;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
