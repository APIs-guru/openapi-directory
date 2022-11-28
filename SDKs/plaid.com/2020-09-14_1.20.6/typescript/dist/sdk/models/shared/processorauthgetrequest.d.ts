import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ProcessorAuthGetRequest defines the request schema for `/processor/auth/get`
**/
export declare class ProcessorAuthGetRequest extends SpeakeasyBase {
    clientId?: string;
    processorToken: string;
    secret?: string;
}
