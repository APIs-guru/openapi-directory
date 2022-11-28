import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Challenge2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
