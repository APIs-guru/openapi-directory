import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AccountsGetRequest;
}


export class AccountsGetResponse extends SpeakeasyBase {
  @Metadata()
  accountsGetResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
