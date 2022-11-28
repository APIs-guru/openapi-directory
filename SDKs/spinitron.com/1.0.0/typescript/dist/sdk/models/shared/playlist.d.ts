import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
export declare class PlaylistLinks extends SpeakeasyBase {
    persona?: Link;
    self?: Link;
    show?: Link;
    spins?: Link;
}
export declare class Playlist extends SpeakeasyBase {
    links?: PlaylistLinks;
    automation?: boolean;
    category?: string;
    description?: string;
    duration?: number;
    end?: Date;
    episodeDescription?: string;
    episodeName?: string;
    hideDj?: boolean;
    id?: number;
    image?: string;
    personaId?: number;
    showId?: number;
    since?: number;
    start?: Date;
    timezone?: string;
    title?: string;
    url?: string;
}
