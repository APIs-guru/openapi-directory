import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DurationField } from "./durationfield";
import { DateTimeFieldType } from "./datetimefieldtype";



export class DateTimeField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationField" })
  durationField?: DurationField;

  @SpeakeasyMetadata({ data: "json, name=leapDurationField" })
  leapDurationField?: DurationField;

  @SpeakeasyMetadata({ data: "json, name=lenient" })
  lenient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maximumValue" })
  maximumValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumValue" })
  minimumValue?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rangeDurationField" })
  rangeDurationField?: DurationField;

  @SpeakeasyMetadata({ data: "json, name=supported" })
  supported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DateTimeFieldType;
}
