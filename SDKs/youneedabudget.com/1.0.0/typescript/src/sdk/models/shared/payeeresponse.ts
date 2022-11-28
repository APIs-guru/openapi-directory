import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payee } from "./payee";



export class PayeeResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payee" })
  payee: Payee;
}


export class PayeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: PayeeResponseData;
}
