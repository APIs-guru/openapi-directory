import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlertsAlertIdPathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class GetAlertsAlertIdRequest extends SpeakeasyBase {
    pathParams: GetAlertsAlertIdPathParams;
}
export declare class GetAlertsAlertIdResponse extends SpeakeasyBase {
    alertInfo?: shared.AlertInfo;
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
