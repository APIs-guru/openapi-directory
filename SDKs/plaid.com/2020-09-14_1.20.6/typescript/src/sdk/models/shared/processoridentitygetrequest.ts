import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProcessorIdentityGetRequest
/** 
 * ProcessorIdentityGetRequest defines the request schema for `/processor/identity/get`
**/
export class ProcessorIdentityGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=processor_token" })
  processorToken: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
