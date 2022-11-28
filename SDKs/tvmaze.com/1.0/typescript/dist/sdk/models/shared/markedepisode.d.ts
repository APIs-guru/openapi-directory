import { SpeakeasyBase } from "../../../internal/utils";
export declare class MarkedEpisodeEmbedded extends SpeakeasyBase {
    episode?: Map<string, any>;
}
export declare class MarkedEpisodeInput extends SpeakeasyBase {
    embedded?: MarkedEpisodeEmbedded;
    markedAt?: number;
    type?: any;
}
export declare class MarkedEpisode extends SpeakeasyBase {
    embedded?: MarkedEpisodeEmbedded;
    episodeId?: number;
    markedAt?: number;
    type?: any;
}
