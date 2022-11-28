import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlertsAlertIdAnnotationsPathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class GetAlertsAlertIdAnnotationsRequest extends SpeakeasyBase {
    pathParams: GetAlertsAlertIdAnnotationsPathParams;
}
export declare class GetAlertsAlertIdAnnotationsResponse extends SpeakeasyBase {
    alertAnnotationInfos?: shared.AlertAnnotationInfo[];
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
