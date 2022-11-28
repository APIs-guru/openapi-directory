import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeeInput } from "./createpayee";



export class CreatePayeesRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payees", elemType: CreatePayeeInput })
  payees: CreatePayeeInput[];

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;
}
