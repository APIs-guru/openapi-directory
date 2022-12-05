import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPotHoldingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}


export class GetPotHoldingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPotHoldingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPotHoldingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPotHoldingsPathParams;

  @SpeakeasyMetadata()
  headers: GetPotHoldingsHeaders;

  @SpeakeasyMetadata()
  security: GetPotHoldingsSecurity;
}


export class GetPotHoldingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPotHoldings200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotHoldings500ApplicationJsonAny?: any;
}
