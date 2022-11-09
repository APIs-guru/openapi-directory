import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TelemetryData extends SpeakeasyBase {
  @Metadata({ data: "json, name=level" })
  level?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=optionalValues" })
  optionalValues?: Map<string, string>;

  @Metadata({ data: "json, name=time" })
  time?: string;
}
