import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsAlertIdAcknowledgePathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class PostAlertsAlertIdAcknowledgeRequests extends SpeakeasyBase {
    changeAlertStatusInfo?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo1?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo2?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo3?: shared.ChangeAlertStatusInfo;
}
export declare class PostAlertsAlertIdAcknowledgeRequest extends SpeakeasyBase {
    pathParams: PostAlertsAlertIdAcknowledgePathParams;
    request?: PostAlertsAlertIdAcknowledgeRequests;
}
export declare class PostAlertsAlertIdAcknowledgeResponse extends SpeakeasyBase {
    alertInfo?: shared.AlertInfo;
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
