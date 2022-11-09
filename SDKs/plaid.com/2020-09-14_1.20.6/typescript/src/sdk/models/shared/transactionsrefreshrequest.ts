import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransactionsRefreshRequest
/** 
 * TransactionsRefreshRequest defines the request schema for `/transactions/refresh`
**/
export class TransactionsRefreshRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
