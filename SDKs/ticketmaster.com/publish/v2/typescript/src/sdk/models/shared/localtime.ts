import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Chronology } from "./chronology";
import { DateTimeFieldType } from "./datetimefieldtype";
import { DateTimeField } from "./datetimefield";



export class LocalTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chronology" })
  chronology?: Chronology;

  @SpeakeasyMetadata({ data: "json, name=fieldTypes", elemType: DateTimeFieldType })
  fieldTypes?: DateTimeFieldType[];

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: DateTimeField })
  fields?: DateTimeField[];

  @SpeakeasyMetadata({ data: "json, name=hourOfDay" })
  hourOfDay?: number;

  @SpeakeasyMetadata({ data: "json, name=millisOfDay" })
  millisOfDay?: number;

  @SpeakeasyMetadata({ data: "json, name=millisOfSecond" })
  millisOfSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=minuteOfHour" })
  minuteOfHour?: number;

  @SpeakeasyMetadata({ data: "json, name=secondOfMinute" })
  secondOfMinute?: number;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: number[];
}
