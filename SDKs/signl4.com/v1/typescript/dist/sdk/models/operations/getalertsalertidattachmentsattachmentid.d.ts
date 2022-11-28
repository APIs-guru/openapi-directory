import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlertsAlertIdAttachmentsAttachmentIdPathParams extends SpeakeasyBase {
    alertId: string;
    attachmentId: string;
}
export declare class GetAlertsAlertIdAttachmentsAttachmentIdQueryParams extends SpeakeasyBase {
    height?: number;
    scale?: boolean;
    width?: number;
}
export declare class GetAlertsAlertIdAttachmentsAttachmentIdRequest extends SpeakeasyBase {
    pathParams: GetAlertsAlertIdAttachmentsAttachmentIdPathParams;
    queryParams: GetAlertsAlertIdAttachmentsAttachmentIdQueryParams;
}
export declare class GetAlertsAlertIdAttachmentsAttachmentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    getAlertsAlertIdAttachmentsAttachmentId200ApplicationJsonBinaryString?: Uint8Array;
    getAlertsAlertIdAttachmentsAttachmentId200TextJsonBinaryString?: Uint8Array;
    getAlertsAlertIdAttachmentsAttachmentId200TextPlainBinaryString?: Uint8Array;
    statusCode: number;
}
