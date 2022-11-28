import { SpeakeasyBase } from "../../../internal/utils";
import { StoryCollaborator } from "./storycollaborator";
import { View } from "./view";
/**
 * A user session with an open story
**/
export declare class Session extends SpeakeasyBase {
    collaborator?: StoryCollaborator;
    collaboratorId?: string;
    createdAt?: Date;
    createdBy?: string;
    host?: string;
    id?: string;
    outlineRevision?: number;
    updatedAt?: Date;
    updatedBy?: string;
    views?: View[];
}
