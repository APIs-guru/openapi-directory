import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DateTimeZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixed" })
  fixed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
