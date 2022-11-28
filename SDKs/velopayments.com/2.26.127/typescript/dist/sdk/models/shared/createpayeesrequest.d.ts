import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeeInput } from "./createpayee";
export declare class CreatePayeesRequestInput extends SpeakeasyBase {
    payees: CreatePayeeInput[];
    payorId: string;
}
