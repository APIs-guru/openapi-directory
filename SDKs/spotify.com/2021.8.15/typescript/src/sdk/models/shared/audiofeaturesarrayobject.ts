import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AudioFeaturesObject } from "./audiofeaturesobject";


export class AudioFeaturesArrayObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio_features", elemType: shared.AudioFeaturesObject })
  audioFeatures?: AudioFeaturesObject[];
}
