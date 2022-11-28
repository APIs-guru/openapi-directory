import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";


export enum ExtensionDataRelatedEntityTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}


// ExtensionData
/** 
 * This class defines an extenstion data on the Publish API
**/
export class ExtensionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=relatedEntityId" })
  relatedEntityId?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedEntitySource" })
  relatedEntitySource?: Source;

  @SpeakeasyMetadata({ data: "json, name=relatedEntityType" })
  relatedEntityType: ExtensionDataRelatedEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: number;
}
