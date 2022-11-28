import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStopPointSearchQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tflOperatedNationalRailStationsOnly" })
  tflOperatedNationalRailStationsOnly?: boolean;
}


export class GetStopPointSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStopPointSearchQueryParams;
}


export class GetStopPointSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
