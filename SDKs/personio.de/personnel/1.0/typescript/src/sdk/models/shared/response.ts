import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Response extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Map<string, any>;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
