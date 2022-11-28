import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OccupancyGetChargeConnectorStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class OccupancyGetChargeConnectorStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OccupancyGetChargeConnectorStatusPathParams;
}


export class OccupancyGetChargeConnectorStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesChargeConnectorOccupancy })
  tflApiPresentationEntitiesChargeConnectorOccupancies?: shared.TflApiPresentationEntitiesChargeConnectorOccupancy[];
}
