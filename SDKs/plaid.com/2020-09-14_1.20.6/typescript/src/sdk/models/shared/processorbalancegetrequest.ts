import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProcessorBalanceGetRequest
/** 
 * ProcessorBalanceGetRequest defines the request schema for `/processor/balance/get`
**/
export class ProcessorBalanceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=processor_token" })
  processorToken: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
