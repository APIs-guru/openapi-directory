import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class StopPointSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=faresOnly" })
  faresOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHubs" })
  includeHubs?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lines" })
  lines?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tflOperatedNationalRailStationsOnly" })
  tflOperatedNationalRailStationsOnly?: boolean;
}


export class StopPointSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointSearchPathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointSearchQueryParams;
}


export class StopPointSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
