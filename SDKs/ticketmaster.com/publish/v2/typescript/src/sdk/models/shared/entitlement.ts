import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";

export enum EntitlementRelatedEntityTypeEnum {
    Event = "event"
,    Venue = "venue"
,    Attraction = "attraction"
}

export enum EntitlementSourceEnum {
    Ticketmaster = "ticketmaster"
}


// Entitlement
/** 
 * This class defines an entitlement data on the Publish API
**/
export class Entitlement extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Map<string, any>;

  @Metadata({ data: "json, name=relatedEntityId" })
  relatedEntityId?: string;

  @Metadata({ data: "json, name=relatedEntitySource" })
  relatedEntitySource?: Source;

  @Metadata({ data: "json, name=relatedEntityType" })
  relatedEntityType: EntitlementRelatedEntityTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: EntitlementSourceEnum;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
