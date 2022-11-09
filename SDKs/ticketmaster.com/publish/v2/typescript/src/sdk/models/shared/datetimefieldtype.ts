import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DurationFieldType } from "./durationfieldtype";
import { DurationFieldType } from "./durationfieldtype";


export class DateTimeFieldType extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationType" })
  durationType?: DurationFieldType;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rangeDurationType" })
  rangeDurationType?: DurationFieldType;
}
