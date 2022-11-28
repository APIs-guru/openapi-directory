import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineRouteByModePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modes" })
  modes: string[];
}

export enum LineRouteByModeServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}


export class LineRouteByModeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineRouteByModeServiceTypesEnum[];
}


export class LineRouteByModeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineRouteByModePathParams;

  @SpeakeasyMetadata()
  queryParams: LineRouteByModeQueryParams;
}


export class LineRouteByModeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
