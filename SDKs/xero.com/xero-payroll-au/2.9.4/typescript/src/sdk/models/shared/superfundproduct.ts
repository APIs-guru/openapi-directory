import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SuperFundProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=ABN" })
  abn?: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=SPIN" })
  spin?: string;

  @Metadata({ data: "json, name=USI" })
  usi?: string;
}
