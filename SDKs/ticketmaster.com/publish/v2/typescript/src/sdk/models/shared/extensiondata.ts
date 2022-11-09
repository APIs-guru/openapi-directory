import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";

export enum ExtensionDataRelatedEntityTypeEnum {
    Event = "event"
,    Venue = "venue"
,    Attraction = "attraction"
}


// ExtensionData
/** 
 * This class defines an extenstion data on the Publish API
**/
export class ExtensionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Map<string, any>;

  @Metadata({ data: "json, name=relatedEntityId" })
  relatedEntityId?: string;

  @Metadata({ data: "json, name=relatedEntitySource" })
  relatedEntitySource?: Source;

  @Metadata({ data: "json, name=relatedEntityType" })
  relatedEntityType: ExtensionDataRelatedEntityTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
