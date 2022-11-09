import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateInventoryForAnItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=shipNode" })
  shipNode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sku" })
  sku: string;
}


export class UpdateInventoryForAnItemHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" })
  wmConsumerChannelType: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" })
  wmQosCorrelationId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" })
  wmSecAccessToken: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" })
  wmSvcName: string;
}

export enum UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum {
    Each = "EACH"
}


export class UpdateInventoryForAnItemApplicationJsonQuantity extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=unit" })
  unit: UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum;
}


export class UpdateInventoryForAnItemApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=quantity" })
  quantity: UpdateInventoryForAnItemApplicationJsonQuantity;

  @Metadata({ data: "json, name=sku" })
  sku: string;
}


export class UpdateInventoryForAnItemRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  object?: UpdateInventoryForAnItemApplicationJson;
}


export class UpdateInventoryForAnItemRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateInventoryForAnItemQueryParams;

  @Metadata()
  headers: UpdateInventoryForAnItemHeaders;

  @Metadata()
  request: UpdateInventoryForAnItemRequests;
}

export enum UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum {
    Each = "EACH"
}


export class UpdateInventoryForAnItem200ApplicationJsonQuantity extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=unit" })
  unit: UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum;
}


export class UpdateInventoryForAnItem200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=quantity" })
  quantity: UpdateInventoryForAnItem200ApplicationJsonQuantity;

  @Metadata({ data: "json, name=sku" })
  sku: string;
}


export class UpdateInventoryForAnItemResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateInventoryForAnItem200ApplicationJsonObject?: UpdateInventoryForAnItem200ApplicationJson;
}
