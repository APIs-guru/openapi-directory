import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StoryCollaborator } from "./storycollaborator";
import { OoxmlDocument } from "./ooxmldocument";
import { StoryOutlineHistory } from "./storyoutlinehistory";
/**
 * Model for story objects
**/
export declare class Story extends SpeakeasyBase {
    collaborators?: StoryCollaborator[];
    createdAt?: Date;
    createdBy?: string;
    id?: string;
    isPublic?: boolean;
    ooxmlDocuments?: OoxmlDocument[];
    outline?: string;
    outlineHistory?: StoryOutlineHistory[];
    revision?: number;
    title?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
