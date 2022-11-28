import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchBusSchedulesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SearchBusSchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBusSchedulesQueryParams;
}


export class SearchBusSchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
