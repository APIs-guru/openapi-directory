import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsUndoCloseMultipleRequests extends SpeakeasyBase {
    changeAlertStatusMultipleInfo?: shared.ChangeAlertStatusMultipleInfo;
    changeAlertStatusMultipleInfo1?: shared.ChangeAlertStatusMultipleInfo;
    changeAlertStatusMultipleInfo2?: shared.ChangeAlertStatusMultipleInfo;
    changeAlertStatusMultipleInfo3?: shared.ChangeAlertStatusMultipleInfo;
}
export declare class PostAlertsUndoCloseMultipleRequest extends SpeakeasyBase {
    request?: PostAlertsUndoCloseMultipleRequests;
}
export declare class PostAlertsUndoCloseMultipleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
