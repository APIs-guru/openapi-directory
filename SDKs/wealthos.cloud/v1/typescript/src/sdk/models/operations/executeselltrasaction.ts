import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecuteSellTrasactionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


// ExecuteSellTrasactionSellTransactionRequestInstructionBuySell
/** 
 * Definition of an single instruction(buy|sell)
**/
export class ExecuteSellTrasactionSellTransactionRequestInstructionBuySell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_order_id" })
  clientOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=investment_product_id" })
  investmentProductId: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// ExecuteSellTrasactionSellTransactionRequest
/** 
 * Definition of an sell transaction request
**/
export class ExecuteSellTrasactionSellTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pot_id" })
  potId: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=sell_instructions", elemType: ExecuteSellTrasactionSellTransactionRequestInstructionBuySell })
  sellInstructions: ExecuteSellTrasactionSellTransactionRequestInstructionBuySell[];
}


export class ExecuteSellTrasactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class ExecuteSellTrasactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ExecuteSellTrasactionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ExecuteSellTrasactionSellTransactionRequest;

  @SpeakeasyMetadata()
  security: ExecuteSellTrasactionSecurity;
}


export class ExecuteSellTrasactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  executeSellTrasaction200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeSellTrasaction500ApplicationJsonAny?: any;
}
