import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Change } from "./change";

export enum AugmentationDataRelatedEntityTypeEnum {
    Event = "event"
,    Attraction = "attraction"
,    Venue = "venue"
}


// AugmentationData
/** 
 * This class defines the Augmentation Data on the Publish API
**/
export class AugmentationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=changes", elemType: shared.Change })
  changes: Change[];

  @Metadata({ data: "json, name=relatedEntityId" })
  relatedEntityId: string;

  @Metadata({ data: "json, name=relatedEntityType" })
  relatedEntityType: AugmentationDataRelatedEntityTypeEnum;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber: number;
}
