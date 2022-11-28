import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTimesheetsQueryParams extends SpeakeasyBase {
    order?: string;
    page?: number;
    where?: string;
}
export declare class GetTimesheetsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    xeroTenantId: string;
}
export declare class GetTimesheetsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetTimesheetsRequest extends SpeakeasyBase {
    queryParams: GetTimesheetsQueryParams;
    headers: GetTimesheetsHeaders;
    security: GetTimesheetsSecurity;
}
export declare class GetTimesheetsResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    statusCode: number;
    timesheets?: shared.Timesheets;
}
