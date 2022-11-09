import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HotPoolSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: number;
}
