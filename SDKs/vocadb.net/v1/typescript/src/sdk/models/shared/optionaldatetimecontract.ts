import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionalDateTimeContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: number;

  @SpeakeasyMetadata({ data: "json, name=formatted" })
  formatted?: string;

  @SpeakeasyMetadata({ data: "json, name=isEmpty" })
  isEmpty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
