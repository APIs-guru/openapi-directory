import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesChargeConnectorOccupancy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=sourceSystemPlaceId" })
  sourceSystemPlaceId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
