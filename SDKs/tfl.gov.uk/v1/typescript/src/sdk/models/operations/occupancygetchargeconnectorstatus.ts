import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OccupancyGetChargeConnectorStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class OccupancyGetChargeConnectorStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OccupancyGetChargeConnectorStatusPathParams;
}


export class OccupancyGetChargeConnectorStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesChargeConnectorOccupancy })
  tflApiPresentationEntitiesChargeConnectorOccupancies?: shared.TflApiPresentationEntitiesChargeConnectorOccupancy[];
}
