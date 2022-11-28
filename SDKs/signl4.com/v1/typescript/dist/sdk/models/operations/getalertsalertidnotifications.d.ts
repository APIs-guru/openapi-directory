import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlertsAlertIdNotificationsPathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class GetAlertsAlertIdNotificationsRequest extends SpeakeasyBase {
    pathParams: GetAlertsAlertIdNotificationsPathParams;
}
export declare class GetAlertsAlertIdNotificationsResponse extends SpeakeasyBase {
    alertNotificationInfos?: shared.AlertNotificationInfo[];
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
