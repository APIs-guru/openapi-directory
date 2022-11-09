import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3StopGps extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}
