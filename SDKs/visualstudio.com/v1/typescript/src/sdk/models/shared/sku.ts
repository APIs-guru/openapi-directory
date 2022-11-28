import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Sku extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: string;
}
