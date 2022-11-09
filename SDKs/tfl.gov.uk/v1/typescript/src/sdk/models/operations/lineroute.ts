import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum LineRouteServiceTypesEnum {
    Regular = "Regular"
,    Night = "Night"
}


export class LineRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineRouteServiceTypesEnum[];
}


export class LineRouteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LineRouteQueryParams;
}


export class LineRouteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
