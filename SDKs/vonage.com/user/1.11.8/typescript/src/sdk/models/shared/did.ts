import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Did extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_tag" })
  customTag?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}
