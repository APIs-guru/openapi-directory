import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
/**
 * An offer, wanted, admin, taken or received post.
**/
export declare class Post extends SpeakeasyBase {
    content?: string;
    date?: Date;
    expiration?: Date;
    footer?: string;
    groupId?: string;
    latitude?: number;
    longitude?: number;
    outcome?: string;
    photos?: Photo[];
    postId?: string;
    source?: string;
    title?: string;
    type?: string;
    url?: string;
    userId?: string;
}
