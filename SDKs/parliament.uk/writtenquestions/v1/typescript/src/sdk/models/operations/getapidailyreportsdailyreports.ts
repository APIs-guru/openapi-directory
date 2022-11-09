import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiDailyreportsDailyreportsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=house" })
  house?: shared.HouseEnumEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetApiDailyreportsDailyreportsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiDailyreportsDailyreportsQueryParams;
}


export class GetApiDailyreportsDailyreportsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  dailyReportViewModelSearchResult?: shared.DailyReportViewModelSearchResult;

  @Metadata()
  problemDetails?: Map<string, Map<string, any>>;

  @Metadata()
  statusCode: number;
}
