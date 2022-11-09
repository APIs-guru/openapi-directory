import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SimplePortRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
