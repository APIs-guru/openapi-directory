import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsAlertIdAnnotatePathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class PostAlertsAlertIdAnnotateRequests extends SpeakeasyBase {
    alertAnnotationInfo?: shared.AlertAnnotationInfo;
    alertAnnotationInfo1?: shared.AlertAnnotationInfo;
    alertAnnotationInfo2?: shared.AlertAnnotationInfo;
    alertAnnotationInfo3?: shared.AlertAnnotationInfo;
}
export declare class PostAlertsAlertIdAnnotateRequest extends SpeakeasyBase {
    pathParams: PostAlertsAlertIdAnnotatePathParams;
    request?: PostAlertsAlertIdAnnotateRequests;
}
export declare class PostAlertsAlertIdAnnotateResponse extends SpeakeasyBase {
    alertAnnotationInfo?: shared.AlertAnnotationInfo;
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
