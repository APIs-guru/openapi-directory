import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesLineRouteSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=fromStation" })
  fromStation?: string;

  @SpeakeasyMetadata({ data: "json, name=routeId" })
  routeId?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=toStation" })
  toStation?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicleDestinationText" })
  vehicleDestinationText?: string;
}
