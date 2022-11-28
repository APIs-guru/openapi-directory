import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointGetByModePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modes" })
  modes: string[];
}


export class StopPointGetByModeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class StopPointGetByModeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointGetByModePathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointGetByModeQueryParams;
}


export class StopPointGetByModeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesStopPointsResponse?: shared.TflApiPresentationEntitiesStopPointsResponse;
}
