import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeIntervalObject } from "./timeintervalobject";
import { SectionObject } from "./sectionobject";
import { SegmentObject } from "./segmentobject";



// AudioAnalysisObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#audio-analysis-object - Find more info on the official Spotify Web API Reference
**/
export class AudioAnalysisObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bars", elemType: TimeIntervalObject })
  bars?: TimeIntervalObject[];

  @SpeakeasyMetadata({ data: "json, name=beats", elemType: TimeIntervalObject })
  beats?: TimeIntervalObject[];

  @SpeakeasyMetadata({ data: "json, name=sections", elemType: SectionObject })
  sections?: SectionObject[];

  @SpeakeasyMetadata({ data: "json, name=segments", elemType: SegmentObject })
  segments?: SegmentObject[];

  @SpeakeasyMetadata({ data: "json, name=tatums", elemType: TimeIntervalObject })
  tatums?: TimeIntervalObject[];
}
