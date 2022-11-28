import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OccupancyGetAllChargeConnectorStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesChargeConnectorOccupancy })
  tflApiPresentationEntitiesChargeConnectorOccupancies?: shared.TflApiPresentationEntitiesChargeConnectorOccupancy[];
}
