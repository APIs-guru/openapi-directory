import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsAlertIdUndoClosePathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class PostAlertsAlertIdUndoCloseRequests extends SpeakeasyBase {
    changeAlertStatusInfo?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo1?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo2?: shared.ChangeAlertStatusInfo;
    changeAlertStatusInfo3?: shared.ChangeAlertStatusInfo;
}
export declare class PostAlertsAlertIdUndoCloseRequest extends SpeakeasyBase {
    pathParams: PostAlertsAlertIdUndoClosePathParams;
    request?: PostAlertsAlertIdUndoCloseRequests;
}
export declare class PostAlertsAlertIdUndoCloseResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    overviewAlert?: shared.OverviewAlert;
    statusCode: number;
}
