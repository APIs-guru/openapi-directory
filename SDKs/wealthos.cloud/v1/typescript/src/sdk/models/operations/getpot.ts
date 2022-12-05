import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}


export class GetPotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPotSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPotPathParams;

  @SpeakeasyMetadata()
  headers: GetPotHeaders;

  @SpeakeasyMetadata()
  security: GetPotSecurity;
}


export class GetPotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPot200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPot401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPot403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPot404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPot429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPot500ApplicationJsonAny?: any;
}
