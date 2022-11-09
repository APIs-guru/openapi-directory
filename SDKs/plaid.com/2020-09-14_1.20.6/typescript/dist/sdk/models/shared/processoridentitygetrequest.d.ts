import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * ProcessorIdentityGetRequest defines the request schema for `/processor/identity/get`
**/
export declare class ProcessorIdentityGetRequest extends SpeakeasyBase {
    clientId?: string;
    processorToken: string;
    secret?: string;
}
