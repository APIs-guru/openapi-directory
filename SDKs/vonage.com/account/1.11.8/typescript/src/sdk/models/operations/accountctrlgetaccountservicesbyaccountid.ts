import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountCtrlGetAccountServicesByAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class AccountCtrlGetAccountServicesByAccountIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class AccountCtrlGetAccountServicesByAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountCtrlGetAccountServicesByAccountIdPathParams;

  @SpeakeasyMetadata()
  security: AccountCtrlGetAccountServicesByAccountIdSecurity;
}


export class AccountCtrlGetAccountServicesByAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountHalResponse?: shared.AccountHalResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
