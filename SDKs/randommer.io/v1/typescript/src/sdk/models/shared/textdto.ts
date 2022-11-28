import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TextDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
