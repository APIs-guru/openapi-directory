import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesChargeConnectorOccupancy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceSystemPlaceId" })
  sourceSystemPlaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
