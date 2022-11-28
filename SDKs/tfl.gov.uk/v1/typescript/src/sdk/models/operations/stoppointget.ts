import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class StopPointGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeCrowdingData" })
  includeCrowdingData?: boolean;
}


export class StopPointGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointGetPathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointGetQueryParams;
}


export class StopPointGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
