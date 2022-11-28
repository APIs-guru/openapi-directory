import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveWirelessLanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=wireless_id" })
  wirelessId: string;
}


export class RemoveWirelessLanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveWirelessLanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveWirelessLanPathParams;

  @SpeakeasyMetadata()
  security: RemoveWirelessLanSecurity;
}


export class RemoveWirelessLanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
