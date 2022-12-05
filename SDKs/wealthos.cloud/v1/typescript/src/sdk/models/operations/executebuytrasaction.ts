import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecuteBuyTrasactionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


// ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell
/** 
 * Definition of an single instruction(buy|sell)
**/
export class ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_order_id" })
  clientOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=investment_product_id" })
  investmentProductId: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// ExecuteBuyTrasactionBuyTransactionRequest
/** 
 * Definition of an buy transaction request
**/
export class ExecuteBuyTrasactionBuyTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=investment_instructions", elemType: ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell })
  investmentInstructions: ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell[];

  @SpeakeasyMetadata({ data: "json, name=pot_id" })
  potId: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;
}


export class ExecuteBuyTrasactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class ExecuteBuyTrasactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ExecuteBuyTrasactionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ExecuteBuyTrasactionBuyTransactionRequest;

  @SpeakeasyMetadata()
  security: ExecuteBuyTrasactionSecurity;
}


export class ExecuteBuyTrasactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  executeBuyTrasaction200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeBuyTrasaction400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeBuyTrasaction401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeBuyTrasaction403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeBuyTrasaction404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeBuyTrasaction409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeBuyTrasaction429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  executeBuyTrasaction500ApplicationJsonAny?: any;
}
