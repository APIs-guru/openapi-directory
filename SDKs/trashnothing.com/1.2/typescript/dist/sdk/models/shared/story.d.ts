import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
import { User } from "./user";
/**
 * A user story
**/
export declare class Story extends SpeakeasyBase {
    content?: string;
    date?: Date;
    likeCount?: number;
    photos?: Photo[];
    shareUrl?: string;
    storyId?: string;
    title?: string;
    user?: User;
    userLiked?: boolean;
}
