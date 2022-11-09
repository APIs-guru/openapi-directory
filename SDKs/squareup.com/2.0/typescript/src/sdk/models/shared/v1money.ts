import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V1Money extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currency_code" })
  currencyCode?: string;
}
