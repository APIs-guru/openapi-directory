import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesStopPointRouteSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lineId" })
  lineId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineString" })
  lineString?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=naptanId" })
  naptanId?: string;

  @SpeakeasyMetadata({ data: "json, name=routeSectionName" })
  routeSectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=validFrom" })
  validFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=validTo" })
  validTo?: Date;

  @SpeakeasyMetadata({ data: "json, name=vehicleDestinationText" })
  vehicleDestinationText?: string;
}
