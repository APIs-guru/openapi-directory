import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiDailyreportsDailyreportsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=house" })
  house?: shared.HouseEnumEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetApiDailyreportsDailyreportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiDailyreportsDailyreportsQueryParams;
}


export class GetApiDailyreportsDailyreportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dailyReportViewModelSearchResult?: shared.DailyReportViewModelSearchResult;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  statusCode: number;
}
