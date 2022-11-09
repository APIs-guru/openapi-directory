import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DurationField } from "./durationfield";
import { DurationField } from "./durationfield";
import { DurationField } from "./durationfield";
import { DateTimeFieldType } from "./datetimefieldtype";


export class DateTimeField extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationField" })
  durationField?: DurationField;

  @Metadata({ data: "json, name=leapDurationField" })
  leapDurationField?: DurationField;

  @Metadata({ data: "json, name=lenient" })
  lenient?: boolean;

  @Metadata({ data: "json, name=maximumValue" })
  maximumValue?: number;

  @Metadata({ data: "json, name=minimumValue" })
  minimumValue?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rangeDurationField" })
  rangeDurationField?: DurationField;

  @Metadata({ data: "json, name=supported" })
  supported?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: DateTimeFieldType;
}
