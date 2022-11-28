import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsIdAttachmentsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetTransactionsIdAttachmentsRequest extends SpeakeasyBase {
    pathParams: GetTransactionsIdAttachmentsPathParams;
}
export declare class GetTransactionsIdAttachmentsResponse extends SpeakeasyBase {
    attachments?: shared.Attachment[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
