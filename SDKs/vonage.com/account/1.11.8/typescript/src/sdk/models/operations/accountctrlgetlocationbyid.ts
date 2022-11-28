import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountCtrlGetLocationByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: number;
}


export class AccountCtrlGetLocationByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class AccountCtrlGetLocationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountCtrlGetLocationByIdPathParams;

  @SpeakeasyMetadata()
  security: AccountCtrlGetLocationByIdSecurity;
}


export class AccountCtrlGetLocationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationHalResponse?: shared.LocationHalResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
