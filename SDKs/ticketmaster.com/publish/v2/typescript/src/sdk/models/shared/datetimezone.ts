import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DateTimeZone extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixed" })
  fixed?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
