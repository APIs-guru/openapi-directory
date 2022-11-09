import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LineRouteByModePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modes" })
  modes: string[];
}

export enum LineRouteByModeServiceTypesEnum {
    Regular = "Regular"
,    Night = "Night"
}


export class LineRouteByModeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineRouteByModeServiceTypesEnum[];
}


export class LineRouteByModeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineRouteByModePathParams;

  @Metadata()
  queryParams: LineRouteByModeQueryParams;
}


export class LineRouteByModeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
