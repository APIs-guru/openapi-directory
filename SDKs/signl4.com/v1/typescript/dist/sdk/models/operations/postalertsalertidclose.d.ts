import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsAlertIdClosePathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class PostAlertsAlertIdCloseRequests extends SpeakeasyBase {
    changeAlertStatusInfo?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo1?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo2?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo3?: shared.ChangeAlertStatusInfo;
}
export declare class PostAlertsAlertIdCloseRequest extends SpeakeasyBase {
    pathParams: PostAlertsAlertIdClosePathParams;
    request?: PostAlertsAlertIdCloseRequests;
}
export declare class PostAlertsAlertIdCloseResponse extends SpeakeasyBase {
    alertInfo?: shared.AlertInfo;
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
