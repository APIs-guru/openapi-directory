import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountCtrlGetLocationByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: number;
}


export class AccountCtrlGetLocationByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class AccountCtrlGetLocationByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountCtrlGetLocationByIdPathParams;

  @Metadata()
  security: AccountCtrlGetLocationByIdSecurity;
}


export class AccountCtrlGetLocationByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationHalResponse?: shared.LocationHalResponse;

  @Metadata()
  statusCode: number;
}
