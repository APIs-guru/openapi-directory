import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LineStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EndDate" })
  endDate: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=StartDate" })
  startDate: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class LineStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dateRange.endDate" })
  dateRangeEndDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateRange.startDate" })
  dateRangeStartDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=detail" })
  detail?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: string;
}


export class LineStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineStatusPathParams;

  @Metadata()
  queryParams: LineStatusQueryParams;
}


export class LineStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
