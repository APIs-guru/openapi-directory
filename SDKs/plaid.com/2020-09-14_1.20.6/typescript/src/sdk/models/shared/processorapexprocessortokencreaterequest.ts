import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProcessorApexProcessorTokenCreateRequest
/** 
 * ProcessorApexProcessorTokenCreateRequest defines the request schema for `/processor/apex/processor_token/create`
**/
export class ProcessorApexProcessorTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=account_id" })
  accountId: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
