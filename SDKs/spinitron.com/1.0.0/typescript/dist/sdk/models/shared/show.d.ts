import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
export declare class ShowLinks extends SpeakeasyBase {
    personas?: Link[];
    playlists?: Link;
    self?: Link;
}
/**
 * A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.
**/
export declare class Show extends SpeakeasyBase {
    links?: ShowLinks;
    category?: string;
    description?: string;
    duration?: number;
    end?: Date;
    hideDj?: boolean;
    id?: number;
    image?: string;
    oneOff?: boolean;
    since?: number;
    start?: Date;
    timezone?: string;
    title?: string;
    url?: string;
}
