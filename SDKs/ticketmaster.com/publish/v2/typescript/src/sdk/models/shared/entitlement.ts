import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";


export enum EntitlementRelatedEntityTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}

export enum EntitlementSourceEnum {
    Ticketmaster = "ticketmaster"
}


// Entitlement
/** 
 * This class defines an entitlement data on the Publish API
**/
export class Entitlement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=relatedEntityId" })
  relatedEntityId?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedEntitySource" })
  relatedEntitySource?: Source;

  @SpeakeasyMetadata({ data: "json, name=relatedEntityType" })
  relatedEntityType: EntitlementRelatedEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: EntitlementSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
