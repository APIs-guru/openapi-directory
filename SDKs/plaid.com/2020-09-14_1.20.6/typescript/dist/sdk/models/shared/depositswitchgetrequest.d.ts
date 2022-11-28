import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DepositSwitchGetRequest defines the request schema for `/deposit_switch/get`
**/
export declare class DepositSwitchGetRequest extends SpeakeasyBase {
    clientId?: string;
    depositSwitchId: string;
    secret?: string;
}
