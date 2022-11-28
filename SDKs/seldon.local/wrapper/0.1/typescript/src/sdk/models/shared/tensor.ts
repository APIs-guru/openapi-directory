import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tensor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shape" })
  shape?: number[];

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: number[];
}
