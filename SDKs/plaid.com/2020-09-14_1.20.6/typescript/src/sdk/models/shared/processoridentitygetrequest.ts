import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProcessorIdentityGetRequest
/** 
 * ProcessorIdentityGetRequest defines the request schema for `/processor/identity/get`
**/
export class ProcessorIdentityGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=processor_token" })
  processorToken: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
