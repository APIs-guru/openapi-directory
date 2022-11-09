import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointSearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class StopPointSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=faresOnly" })
  faresOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeHubs" })
  includeHubs?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lines" })
  lines?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=tflOperatedNationalRailStationsOnly" })
  tflOperatedNationalRailStationsOnly?: boolean;
}


export class StopPointSearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointSearchPathParams;

  @Metadata()
  queryParams: StopPointSearchQueryParams;
}


export class StopPointSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
