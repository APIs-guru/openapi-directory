import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorData extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
