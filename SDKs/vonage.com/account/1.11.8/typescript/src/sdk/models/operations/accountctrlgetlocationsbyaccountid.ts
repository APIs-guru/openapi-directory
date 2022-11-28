import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountCtrlGetLocationsByAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class AccountCtrlGetLocationsByAccountIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class AccountCtrlGetLocationsByAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountCtrlGetLocationsByAccountIdPathParams;

  @SpeakeasyMetadata()
  security: AccountCtrlGetLocationsByAccountIdSecurity;
}


export class AccountCtrlGetLocationsByAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationsHalResponse?: shared.LocationsHalResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
