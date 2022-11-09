import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Payee } from "./payee";


export class PayeesResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=payees", elemType: shared.Payee })
  payees: Payee[];

  @Metadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class PayeesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: PayeesResponseData;
}
