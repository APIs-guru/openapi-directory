import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBankAccountByV1IdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=v1_bank_account_id" })
  v1BankAccountId: string;
}


export class GetBankAccountByV1IdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetBankAccountByV1IdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBankAccountByV1IdPathParams;

  @Metadata()
  security: GetBankAccountByV1IdSecurity;
}


export class GetBankAccountByV1IdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getBankAccountByV1IdResponse?: shared.GetBankAccountByV1IdResponse;

  @Metadata()
  statusCode: number;
}
