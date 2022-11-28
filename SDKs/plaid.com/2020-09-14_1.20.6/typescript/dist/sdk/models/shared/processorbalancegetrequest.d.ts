import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ProcessorBalanceGetRequest defines the request schema for `/processor/balance/get`
**/
export declare class ProcessorBalanceGetRequest extends SpeakeasyBase {
    clientId?: string;
    processorToken: string;
    secret?: string;
}
