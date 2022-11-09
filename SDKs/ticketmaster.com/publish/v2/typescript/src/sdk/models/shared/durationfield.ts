import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DurationFieldType } from "./durationfieldtype";


export class DurationField extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=precise" })
  precise?: boolean;

  @Metadata({ data: "json, name=supported" })
  supported?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: DurationFieldType;

  @Metadata({ data: "json, name=unitMillis" })
  unitMillis?: number;
}
