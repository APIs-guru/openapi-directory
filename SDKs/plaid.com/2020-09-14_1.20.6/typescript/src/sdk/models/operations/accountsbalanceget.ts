import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountsBalanceGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AccountsBalanceGetRequest;
}


export class AccountsBalanceGetResponse extends SpeakeasyBase {
  @Metadata()
  accountsGetResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
