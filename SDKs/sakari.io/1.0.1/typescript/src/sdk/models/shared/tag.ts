import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=visible" })
  visible?: boolean;
}
