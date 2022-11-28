import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreatePayee2Input } from "./createpayee2";



export class CreatePayeesRequest2Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payees", elemType: CreatePayee2Input })
  payees: CreatePayee2Input[];

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;
}
