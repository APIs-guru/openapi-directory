import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LineSearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}

export enum LineSearchServiceTypesEnum {
    Regular = "Regular"
,    Night = "Night"
}


export class LineSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineSearchServiceTypesEnum[];
}


export class LineSearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineSearchPathParams;

  @Metadata()
  queryParams: LineSearchQueryParams;
}


export class LineSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesRouteSearchResponse?: shared.TflApiPresentationEntitiesRouteSearchResponse;
}
