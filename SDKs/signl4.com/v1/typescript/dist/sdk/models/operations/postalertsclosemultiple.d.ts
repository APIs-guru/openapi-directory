import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsCloseMultipleRequests extends SpeakeasyBase {
    changeAlertStatusMultipleInfo?: shared.ChangeAlertStatusMultipleInfo;
    changeAlertStatusMultipleInfo1?: shared.ChangeAlertStatusMultipleInfo;
    changeAlertStatusMultipleInfo2?: shared.ChangeAlertStatusMultipleInfo;
    changeAlertStatusMultipleInfo3?: shared.ChangeAlertStatusMultipleInfo;
}
export declare class PostAlertsCloseMultipleRequest extends SpeakeasyBase {
    request?: PostAlertsCloseMultipleRequests;
}
export declare class PostAlertsCloseMultipleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
