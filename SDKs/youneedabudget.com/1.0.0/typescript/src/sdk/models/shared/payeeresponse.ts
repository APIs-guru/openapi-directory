import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Payee } from "./payee";


export class PayeeResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=payee" })
  payee: Payee;
}


export class PayeeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: PayeeResponseData;
}
