import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Font } from "./font";
import { Soundtrack } from "./soundtrack";
import { Track } from "./track";


// Timeline
/** 
 * A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
**/
export class Timeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=background" })
  background?: string;

  @Metadata({ data: "json, name=cache" })
  cache?: boolean;

  @Metadata({ data: "json, name=fonts", elemType: shared.Font })
  fonts?: Font[];

  @Metadata({ data: "json, name=soundtrack" })
  soundtrack?: Soundtrack;

  @Metadata({ data: "json, name=tracks", elemType: shared.Track })
  tracks: Track[];
}
