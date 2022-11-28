import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BikePointSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class BikePointSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BikePointSearchQueryParams;
}


export class BikePointSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPlace })
  tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
