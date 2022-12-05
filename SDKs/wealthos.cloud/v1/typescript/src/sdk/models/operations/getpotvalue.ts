import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPotValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}


export class GetPotValueHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPotValueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPotValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPotValuePathParams;

  @SpeakeasyMetadata()
  headers: GetPotValueHeaders;

  @SpeakeasyMetadata()
  security: GetPotValueSecurity;
}


export class GetPotValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPotValue200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotValue400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotValue401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotValue403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotValue404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotValue429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotValue500ApplicationJsonAny?: any;
}
