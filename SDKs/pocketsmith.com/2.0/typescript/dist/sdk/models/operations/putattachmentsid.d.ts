import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAttachmentsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutAttachmentsIdRequestBody extends SpeakeasyBase {
    title?: string;
}
export declare class PutAttachmentsIdRequest extends SpeakeasyBase {
    pathParams: PutAttachmentsIdPathParams;
    request?: PutAttachmentsIdRequestBody;
}
export declare class PutAttachmentsIdResponse extends SpeakeasyBase {
    attachment?: shared.Attachment;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
