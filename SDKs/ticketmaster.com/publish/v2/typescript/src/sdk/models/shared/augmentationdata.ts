import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";


export enum AugmentationDataRelatedEntityTypeEnum {
    Event = "event",
    Attraction = "attraction",
    Venue = "venue"
}


// AugmentationData
/** 
 * This class defines the Augmentation Data on the Publish API
**/
export class AugmentationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: Change })
  changes: Change[];

  @SpeakeasyMetadata({ data: "json, name=relatedEntityId" })
  relatedEntityId: string;

  @SpeakeasyMetadata({ data: "json, name=relatedEntityType" })
  relatedEntityType: AugmentationDataRelatedEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber: number;
}
