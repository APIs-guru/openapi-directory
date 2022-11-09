import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateTimeZone } from "./datetimezone";


export class Chronology extends SpeakeasyBase {
  @Metadata({ data: "json, name=zone" })
  zone?: DateTimeZone;
}
