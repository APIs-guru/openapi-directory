import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWirelessLanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=wireless_id" })
  wirelessId: string;
}


export class GetWirelessLanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetWirelessLanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWirelessLanPathParams;

  @Metadata()
  security: GetWirelessLanSecurity;
}


export class GetWirelessLanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wireless?: shared.Wireless;
}
