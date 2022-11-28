import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Did extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_tag" })
  customTag?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}
