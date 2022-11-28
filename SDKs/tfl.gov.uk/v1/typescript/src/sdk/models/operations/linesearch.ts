import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}

export enum LineSearchServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}


export class LineSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineSearchServiceTypesEnum[];
}


export class LineSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineSearchPathParams;

  @SpeakeasyMetadata()
  queryParams: LineSearchQueryParams;
}


export class LineSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesRouteSearchResponse?: shared.TflApiPresentationEntitiesRouteSearchResponse;
}
