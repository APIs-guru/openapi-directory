import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsRequests extends SpeakeasyBase {
    raiseAlertInfo?: shared.RaiseAlertInfo;
    raiseAlertInfo1?: shared.RaiseAlertInfo;
    raiseAlertInfo2?: shared.RaiseAlertInfo;
    raiseAlertInfo3?: shared.RaiseAlertInfo;
}
export declare class PostAlertsRequest extends SpeakeasyBase {
    request?: PostAlertsRequests;
}
export declare class PostAlertsResponse extends SpeakeasyBase {
    alertInfo?: shared.AlertInfo;
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
