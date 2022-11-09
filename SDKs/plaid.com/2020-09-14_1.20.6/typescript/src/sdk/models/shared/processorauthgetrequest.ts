import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProcessorAuthGetRequest
/** 
 * ProcessorAuthGetRequest defines the request schema for `/processor/auth/get`
**/
export class ProcessorAuthGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=processor_token" })
  processorToken: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
