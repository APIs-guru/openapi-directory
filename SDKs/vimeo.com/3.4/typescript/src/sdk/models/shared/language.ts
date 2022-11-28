import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Language extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
