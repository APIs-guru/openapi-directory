import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioFeaturesObject } from "./audiofeaturesobject";



export class AudioFeaturesArrayObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_features", elemType: AudioFeaturesObject })
  audioFeatures?: AudioFeaturesObject[];
}
