import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Color extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alpha" })
  alpha: number;

  @SpeakeasyMetadata({ data: "json, name=blue" })
  blue: number;

  @SpeakeasyMetadata({ data: "json, name=green" })
  green: number;

  @SpeakeasyMetadata({ data: "json, name=red" })
  red: number;
}
