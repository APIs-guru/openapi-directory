import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiDailyreportsDailyreportsQueryParams extends SpeakeasyBase {
    dateFrom?: Date;
    dateTo?: Date;
    house?: shared.HouseEnumEnum;
    skip?: number;
    take?: number;
}
export declare class GetApiDailyreportsDailyreportsRequest extends SpeakeasyBase {
    queryParams: GetApiDailyreportsDailyreportsQueryParams;
}
export declare class GetApiDailyreportsDailyreportsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    dailyReportViewModelSearchResult?: shared.DailyReportViewModelSearchResult;
    problemDetails?: Map<string, Map<string, any>>;
    statusCode: number;
}
