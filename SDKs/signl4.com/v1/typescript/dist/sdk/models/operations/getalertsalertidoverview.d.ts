import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlertsAlertIdOverviewPathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class GetAlertsAlertIdOverviewRequest extends SpeakeasyBase {
    pathParams: GetAlertsAlertIdOverviewPathParams;
}
export declare class GetAlertsAlertIdOverviewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    overviewAlert?: shared.OverviewAlert;
    statusCode: number;
}
