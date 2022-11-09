import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreatePayee2 } from "./createpayee2";


export class CreatePayeesRequest2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=payees", elemType: shared.CreatePayee2 })
  payees: CreatePayee2[];

  @Metadata({ data: "json, name=payorId" })
  payorId: string;
}
