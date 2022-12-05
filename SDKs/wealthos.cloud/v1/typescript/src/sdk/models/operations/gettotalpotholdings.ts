import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTotalPotHoldingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investor_id" })
  investorId: string;
}


export class GetTotalPotHoldingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetTotalPotHoldingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetTotalPotHoldingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTotalPotHoldingsPathParams;

  @SpeakeasyMetadata()
  headers: GetTotalPotHoldingsHeaders;

  @SpeakeasyMetadata()
  security: GetTotalPotHoldingsSecurity;
}


export class GetTotalPotHoldingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTotalPotHoldings200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTotalPotHoldings500ApplicationJsonAny?: any;
}
