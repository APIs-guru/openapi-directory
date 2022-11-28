import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HotPoolSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}
