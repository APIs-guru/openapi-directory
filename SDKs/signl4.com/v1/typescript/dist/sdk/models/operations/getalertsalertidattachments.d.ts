import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlertsAlertIdAttachmentsPathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class GetAlertsAlertIdAttachmentsRequest extends SpeakeasyBase {
    pathParams: GetAlertsAlertIdAttachmentsPathParams;
}
export declare class GetAlertsAlertIdAttachmentsResponse extends SpeakeasyBase {
    alertAttachmentInfos?: shared.AlertAttachmentInfo[];
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
