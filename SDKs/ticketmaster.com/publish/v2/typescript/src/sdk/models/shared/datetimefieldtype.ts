import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DurationFieldType } from "./durationfieldtype";



export class DateTimeFieldType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationType" })
  durationType?: DurationFieldType;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rangeDurationType" })
  rangeDurationType?: DurationFieldType;
}
