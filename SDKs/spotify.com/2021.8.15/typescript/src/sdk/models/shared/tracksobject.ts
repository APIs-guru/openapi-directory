import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackObject } from "./trackobject";



export class TracksObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tracks", elemType: TrackObject })
  tracks?: TrackObject[];
}
