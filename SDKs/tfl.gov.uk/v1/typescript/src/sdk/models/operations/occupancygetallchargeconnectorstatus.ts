import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OccupancyGetAllChargeConnectorStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesChargeConnectorOccupancy })
  tflApiPresentationEntitiesChargeConnectorOccupancies?: shared.TflApiPresentationEntitiesChargeConnectorOccupancy[];
}
