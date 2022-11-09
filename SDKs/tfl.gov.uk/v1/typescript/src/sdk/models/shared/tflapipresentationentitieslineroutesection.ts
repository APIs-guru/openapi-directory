import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesLineRouteSection extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=fromStation" })
  fromStation?: string;

  @Metadata({ data: "json, name=routeId" })
  routeId?: number;

  @Metadata({ data: "json, name=serviceType" })
  serviceType?: string;

  @Metadata({ data: "json, name=toStation" })
  toStation?: string;

  @Metadata({ data: "json, name=vehicleDestinationText" })
  vehicleDestinationText?: string;
}
