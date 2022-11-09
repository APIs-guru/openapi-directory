import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesStopPointRouteSection extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=lineId" })
  lineId?: string;

  @Metadata({ data: "json, name=lineString" })
  lineString?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=naptanId" })
  naptanId?: string;

  @Metadata({ data: "json, name=routeSectionName" })
  routeSectionName?: string;

  @Metadata({ data: "json, name=serviceType" })
  serviceType?: string;

  @Metadata({ data: "json, name=validFrom" })
  validFrom?: Date;

  @Metadata({ data: "json, name=validTo" })
  validTo?: Date;

  @Metadata({ data: "json, name=vehicleDestinationText" })
  vehicleDestinationText?: string;
}
