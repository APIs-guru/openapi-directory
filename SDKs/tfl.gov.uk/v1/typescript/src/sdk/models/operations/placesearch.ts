import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlaceSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" })
  types?: string[];
}


export class PlaceSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PlaceSearchQueryParams;
}


export class PlaceSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPlace })
  tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
