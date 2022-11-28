import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchUserRolesServerList = [
	"https://flex-api.twilio.com",
] as const;


export class FetchUserRolesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class FetchUserRolesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUserRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: FetchUserRolesHeaders;

  @SpeakeasyMetadata()
  security: FetchUserRolesSecurity;
}


export class FetchUserRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1UserRoles?: shared.FlexV1UserRoles;
}
