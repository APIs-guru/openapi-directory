import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProcessorApexProcessorTokenCreateRequest
/** 
 * ProcessorApexProcessorTokenCreateRequest defines the request schema for `/processor/apex/processor_token/create`
**/
export class ProcessorApexProcessorTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
