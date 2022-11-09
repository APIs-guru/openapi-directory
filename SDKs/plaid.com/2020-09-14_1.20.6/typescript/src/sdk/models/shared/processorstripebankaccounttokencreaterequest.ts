import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProcessorStripeBankAccountTokenCreateRequest
/** 
 * ProcessorStripeBankAccountTokenCreateRequest defines the request schema for `/processor/stripe/bank_account/create`
**/
export class ProcessorStripeBankAccountTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=account_id" })
  accountId: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
