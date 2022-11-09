import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBankAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bank_account_id" })
  bankAccountId: string;
}


export class GetBankAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetBankAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBankAccountPathParams;

  @Metadata()
  security: GetBankAccountSecurity;
}


export class GetBankAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getBankAccountResponse?: shared.GetBankAccountResponse;

  @Metadata()
  statusCode: number;
}
