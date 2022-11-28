import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttachmentsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetAttachmentsIdRequest extends SpeakeasyBase {
    pathParams: GetAttachmentsIdPathParams;
}
export declare class GetAttachmentsIdResponse extends SpeakeasyBase {
    attachment?: shared.Attachment;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
