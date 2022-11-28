import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProcessorStripeBankAccountTokenCreateRequest
/** 
 * ProcessorStripeBankAccountTokenCreateRequest defines the request schema for `/processor/stripe/bank_account/create`
**/
export class ProcessorStripeBankAccountTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
