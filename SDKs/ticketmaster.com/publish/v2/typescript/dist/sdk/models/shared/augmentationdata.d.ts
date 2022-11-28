import { SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
export declare enum AugmentationDataRelatedEntityTypeEnum {
    Event = "event",
    Attraction = "attraction",
    Venue = "venue"
}
/**
 * This class defines the Augmentation Data on the Publish API
**/
export declare class AugmentationData extends SpeakeasyBase {
    changes: Change[];
    relatedEntityId: string;
    relatedEntityType: AugmentationDataRelatedEntityTypeEnum;
    score?: number;
    source: string;
    versionNumber: number;
}
