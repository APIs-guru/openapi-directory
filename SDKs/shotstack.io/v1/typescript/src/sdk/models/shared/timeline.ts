import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Font } from "./font";
import { Soundtrack } from "./soundtrack";
import { Track } from "./track";



// Timeline
/** 
 * A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
**/
export class Timeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=background" })
  background?: string;

  @SpeakeasyMetadata({ data: "json, name=cache" })
  cache?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fonts", elemType: Font })
  fonts?: Font[];

  @SpeakeasyMetadata({ data: "json, name=soundtrack" })
  soundtrack?: Soundtrack;

  @SpeakeasyMetadata({ data: "json, name=tracks", elemType: Track })
  tracks: Track[];
}
