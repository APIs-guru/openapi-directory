import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrackObject } from "./trackobject";


export class TracksObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=tracks", elemType: shared.TrackObject })
  tracks?: TrackObject[];
}
