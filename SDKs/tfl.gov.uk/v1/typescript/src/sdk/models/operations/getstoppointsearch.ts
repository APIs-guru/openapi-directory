import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStopPointSearchQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tflOperatedNationalRailStationsOnly" })
  tflOperatedNationalRailStationsOnly?: boolean;
}


export class GetStopPointSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStopPointSearchQueryParams;
}


export class GetStopPointSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
