import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
export declare class PostSearchResult extends SpeakeasyBase {
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
    searchContent?: string;
    searchTitle?: string;
    source?: string;
    title?: string;
    type?: string;
    url?: string;
    userId?: string;
}
