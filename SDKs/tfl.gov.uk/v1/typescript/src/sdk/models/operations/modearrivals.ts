import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ModeArrivalsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mode" })
  mode: string;
}


export class ModeArrivalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;
}


export class ModeArrivalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ModeArrivalsPathParams;

  @SpeakeasyMetadata()
  queryParams: ModeArrivalsQueryParams;
}


export class ModeArrivalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPrediction })
  tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}
