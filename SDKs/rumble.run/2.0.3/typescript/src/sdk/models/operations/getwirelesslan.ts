import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWirelessLanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=wireless_id" })
  wirelessId: string;
}


export class GetWirelessLanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetWirelessLanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWirelessLanPathParams;

  @SpeakeasyMetadata()
  security: GetWirelessLanSecurity;
}


export class GetWirelessLanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wireless?: shared.Wireless;
}
