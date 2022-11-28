import { SpeakeasyBase } from "../../../internal/utils";
import { TimeIntervalObject } from "./timeintervalobject";
import { SectionObject } from "./sectionobject";
import { SegmentObject } from "./segmentobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#audio-analysis-object - Find more info on the official Spotify Web API Reference
**/
export declare class AudioAnalysisObject extends SpeakeasyBase {
    bars?: TimeIntervalObject[];
    beats?: TimeIntervalObject[];
    sections?: SectionObject[];
    segments?: SegmentObject[];
    tatums?: TimeIntervalObject[];
}
