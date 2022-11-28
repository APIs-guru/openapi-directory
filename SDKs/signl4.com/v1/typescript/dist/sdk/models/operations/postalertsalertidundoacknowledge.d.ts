import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsAlertIdUndoAcknowledgePathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class PostAlertsAlertIdUndoAcknowledgeRequests extends SpeakeasyBase {
    changeAlertStatusInfo?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo1?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo2?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo3?: shared.ChangeAlertStatusInfo;
}
export declare class PostAlertsAlertIdUndoAcknowledgeRequest extends SpeakeasyBase {
    pathParams: PostAlertsAlertIdUndoAcknowledgePathParams;
    request?: PostAlertsAlertIdUndoAcknowledgeRequests;
}
export declare class PostAlertsAlertIdUndoAcknowledgeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    overviewAlert?: shared.OverviewAlert;
    statusCode: number;
}
