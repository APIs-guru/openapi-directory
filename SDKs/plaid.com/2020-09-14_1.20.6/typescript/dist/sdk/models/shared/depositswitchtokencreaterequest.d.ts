import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * DepositSwitchTokenCreateRequest defines the request schema for `/deposit_switch/token/create`
**/
export declare class DepositSwitchTokenCreateRequest extends SpeakeasyBase {
    clientId?: string;
    depositSwitchId: string;
    secret?: string;
}
