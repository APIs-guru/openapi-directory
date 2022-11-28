import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHealthDashboardQueryParams extends SpeakeasyBase {
    country?: string;
    unixTimestampSeconds?: string;
    unixtimezoneOffsetSeconds?: string;
}
export declare class GetHealthDashboardSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetHealthDashboardRequest extends SpeakeasyBase {
    queryParams: GetHealthDashboardQueryParams;
    security: GetHealthDashboardSecurity;
}
export declare class GetHealthDashboardResponse extends SpeakeasyBase {
    contentType: string;
    databases?: shared.Database[];
    statusCode: number;
}
