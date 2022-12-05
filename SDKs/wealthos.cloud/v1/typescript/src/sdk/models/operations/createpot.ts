import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreatePotSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreatePotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePotHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: CreatePotSecurity;
}


export class CreatePotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPot201ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPot400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPot401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPot403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPot409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPot429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPot500ApplicationJsonAny?: any;
}
