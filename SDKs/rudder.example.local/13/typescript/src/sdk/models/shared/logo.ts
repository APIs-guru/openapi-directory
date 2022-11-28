import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Logo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable: boolean;
}
