import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TextDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;
}
