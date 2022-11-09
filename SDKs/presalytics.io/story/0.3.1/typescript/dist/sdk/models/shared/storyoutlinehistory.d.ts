import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A revision repository for story outlines
**/
export declare class StoryOutlineHistory extends SpeakeasyBase {
    collaboratorUserId?: string;
    createdAt?: Date;
    createdBy?: string;
    id?: string;
    outline?: string;
    revisionNumber?: number;
    storyId?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
