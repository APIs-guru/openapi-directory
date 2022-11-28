import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SimplePortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
