import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreatePayee } from "./createpayee";


export class CreatePayeesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=payees", elemType: shared.CreatePayee })
  payees: CreatePayee[];

  @Metadata({ data: "json, name=payorId" })
  payorId: string;
}
