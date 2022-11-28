import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EndDate" })
  endDate: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=StartDate" })
  startDate: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class LineStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRange.endDate" })
  dateRangeEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRange.startDate" })
  dateRangeStartDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detail" })
  detail?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: string;
}


export class LineStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: LineStatusQueryParams;
}


export class LineStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
