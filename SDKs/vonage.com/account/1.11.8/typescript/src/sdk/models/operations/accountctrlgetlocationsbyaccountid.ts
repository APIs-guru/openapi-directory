import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountCtrlGetLocationsByAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class AccountCtrlGetLocationsByAccountIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class AccountCtrlGetLocationsByAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountCtrlGetLocationsByAccountIdPathParams;

  @Metadata()
  security: AccountCtrlGetLocationsByAccountIdSecurity;
}


export class AccountCtrlGetLocationsByAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationsHalResponse?: shared.LocationsHalResponse;

  @Metadata()
  statusCode: number;
}
