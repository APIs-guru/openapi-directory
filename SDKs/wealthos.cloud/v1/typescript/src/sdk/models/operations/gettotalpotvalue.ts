import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTotalPotValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investor_id" })
  investorId: string;
}


export class GetTotalPotValueHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetTotalPotValueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetTotalPotValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTotalPotValuePathParams;

  @SpeakeasyMetadata()
  headers: GetTotalPotValueHeaders;

  @SpeakeasyMetadata()
  security: GetTotalPotValueSecurity;
}


export class GetTotalPotValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTotalPotValue200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotValue500ApplicationJsonAny?: any;
}
