import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
