import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}
