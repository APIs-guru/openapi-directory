import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Chronology } from "./chronology";
import { DateTimeFieldType } from "./datetimefieldtype";
import { DateTimeField } from "./datetimefield";


export class LocalTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=chronology" })
  chronology?: Chronology;

  @Metadata({ data: "json, name=fieldTypes", elemType: shared.DateTimeFieldType })
  fieldTypes?: DateTimeFieldType[];

  @Metadata({ data: "json, name=fields", elemType: shared.DateTimeField })
  fields?: DateTimeField[];

  @Metadata({ data: "json, name=hourOfDay" })
  hourOfDay?: number;

  @Metadata({ data: "json, name=millisOfDay" })
  millisOfDay?: number;

  @Metadata({ data: "json, name=millisOfSecond" })
  millisOfSecond?: number;

  @Metadata({ data: "json, name=minuteOfHour" })
  minuteOfHour?: number;

  @Metadata({ data: "json, name=secondOfMinute" })
  secondOfMinute?: number;

  @Metadata({ data: "json, name=values" })
  values?: number[];
}
