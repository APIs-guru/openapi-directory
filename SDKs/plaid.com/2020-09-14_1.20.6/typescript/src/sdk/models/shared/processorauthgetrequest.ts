import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProcessorAuthGetRequest
/** 
 * ProcessorAuthGetRequest defines the request schema for `/processor/auth/get`
**/
export class ProcessorAuthGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=processor_token" })
  processorToken: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
