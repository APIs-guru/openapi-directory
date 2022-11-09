import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountCtrlGetAccountServicesByAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class AccountCtrlGetAccountServicesByAccountIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class AccountCtrlGetAccountServicesByAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountCtrlGetAccountServicesByAccountIdPathParams;

  @Metadata()
  security: AccountCtrlGetAccountServicesByAccountIdSecurity;
}


export class AccountCtrlGetAccountServicesByAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  accountHalResponse?: shared.AccountHalResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
