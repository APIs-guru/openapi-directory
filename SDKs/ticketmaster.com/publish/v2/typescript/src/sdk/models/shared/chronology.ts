import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateTimeZone } from "./datetimezone";



export class Chronology extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: DateTimeZone;
}
