import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
