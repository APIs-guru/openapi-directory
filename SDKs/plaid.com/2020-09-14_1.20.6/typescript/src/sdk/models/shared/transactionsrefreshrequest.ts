import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransactionsRefreshRequest
/** 
 * TransactionsRefreshRequest defines the request schema for `/transactions/refresh`
**/
export class TransactionsRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
