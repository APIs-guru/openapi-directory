import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}


export class UpdatePotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class UpdatePotSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class UpdatePotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePotPathParams;

  @SpeakeasyMetadata()
  headers: UpdatePotHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: UpdatePotSecurity;
}


export class UpdatePotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePot200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePot400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePot401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePot403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePot404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePot409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePot429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePot500ApplicationJsonAny?: any;
}
