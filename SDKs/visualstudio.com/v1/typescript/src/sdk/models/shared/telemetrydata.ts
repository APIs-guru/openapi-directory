import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TelemetryData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=optionalValues" })
  optionalValues?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
