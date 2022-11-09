import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Logo extends SpeakeasyBase {
  @Metadata({ data: "json, name=enable" })
  enable: boolean;
}
