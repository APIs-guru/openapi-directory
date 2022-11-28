import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsAcknowledgeMultipleRequests extends SpeakeasyBase {
    changeAlertStatusMultipleInfo?: shared.ChangeAlertStatusMultipleInfo;
    changeAlertStatusMultipleInfo1?: shared.ChangeAlertStatusMultipleInfo;
    changeAlertStatusMultipleInfo2?: shared.ChangeAlertStatusMultipleInfo;
    changeAlertStatusMultipleInfo3?: shared.ChangeAlertStatusMultipleInfo;
}
export declare class PostAlertsAcknowledgeMultipleRequest extends SpeakeasyBase {
    request?: PostAlertsAcknowledgeMultipleRequests;
}
export declare class PostAlertsAcknowledgeMultipleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
