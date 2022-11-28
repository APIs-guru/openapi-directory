import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payee } from "./payee";



export class PayeesResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payees", elemType: Payee })
  payees: Payee[];

  @SpeakeasyMetadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class PayeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: PayeesResponseData;
}
