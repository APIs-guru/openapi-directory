import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeIntervalObject } from "./timeintervalobject";
import { TimeIntervalObject } from "./timeintervalobject";
import { SectionObject } from "./sectionobject";
import { SegmentObject } from "./segmentobject";
import { TimeIntervalObject } from "./timeintervalobject";


// AudioAnalysisObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#audio-analysis-object - Find more info on the official Spotify Web API Reference
**/
export class AudioAnalysisObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=bars", elemType: shared.TimeIntervalObject })
  bars?: TimeIntervalObject[];

  @Metadata({ data: "json, name=beats", elemType: shared.TimeIntervalObject })
  beats?: TimeIntervalObject[];

  @Metadata({ data: "json, name=sections", elemType: shared.SectionObject })
  sections?: SectionObject[];

  @Metadata({ data: "json, name=segments", elemType: shared.SegmentObject })
  segments?: SegmentObject[];

  @Metadata({ data: "json, name=tatums", elemType: shared.TimeIntervalObject })
  tatums?: TimeIntervalObject[];
}
