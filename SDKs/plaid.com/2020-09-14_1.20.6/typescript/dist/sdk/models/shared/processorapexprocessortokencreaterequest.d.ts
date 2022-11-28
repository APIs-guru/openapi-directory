import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ProcessorApexProcessorTokenCreateRequest defines the request schema for `/processor/apex/processor_token/create`
**/
export declare class ProcessorApexProcessorTokenCreateRequest extends SpeakeasyBase {
    accessToken: string;
    accountId: string;
    clientId?: string;
    secret?: string;
}
