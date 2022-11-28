import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum LineRouteServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}


export class LineRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineRouteServiceTypesEnum[];
}


export class LineRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LineRouteQueryParams;
}


export class LineRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
