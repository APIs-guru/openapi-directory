import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlaceGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PlaceGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeChildren" })
  includeChildren?: boolean;
}


export class PlaceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlaceGetPathParams;

  @SpeakeasyMetadata()
  queryParams: PlaceGetQueryParams;
}


export class PlaceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPlace })
  tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
