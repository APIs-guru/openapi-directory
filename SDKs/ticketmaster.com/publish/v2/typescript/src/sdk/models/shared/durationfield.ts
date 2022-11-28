import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DurationFieldType } from "./durationfieldtype";



export class DurationField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=precise" })
  precise?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supported" })
  supported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DurationFieldType;

  @SpeakeasyMetadata({ data: "json, name=unitMillis" })
  unitMillis?: number;
}
