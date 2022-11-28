import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SuperFundProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ABN" })
  abn?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=SPIN" })
  spin?: string;

  @SpeakeasyMetadata({ data: "json, name=USI" })
  usi?: string;
}
