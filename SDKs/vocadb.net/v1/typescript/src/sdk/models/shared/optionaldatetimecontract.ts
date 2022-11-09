import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionalDateTimeContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day?: number;

  @Metadata({ data: "json, name=formatted" })
  formatted?: string;

  @Metadata({ data: "json, name=isEmpty" })
  isEmpty?: boolean;

  @Metadata({ data: "json, name=month" })
  month?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
