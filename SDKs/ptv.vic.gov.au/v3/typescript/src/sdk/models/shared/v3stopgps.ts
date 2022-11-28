import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3StopGps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}
