import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
