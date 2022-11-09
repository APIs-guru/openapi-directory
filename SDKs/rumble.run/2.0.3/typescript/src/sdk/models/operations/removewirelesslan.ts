import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveWirelessLanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=wireless_id" })
  wirelessId: string;
}


export class RemoveWirelessLanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveWirelessLanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveWirelessLanPathParams;

  @Metadata()
  security: RemoveWirelessLanSecurity;
}


export class RemoveWirelessLanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
