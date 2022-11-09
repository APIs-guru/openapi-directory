import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInventoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=shipNode" })
  shipNode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sku" })
  sku: string;
}


export class GetInventoryHeaders extends SpeakeasyBase {
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


export class GetInventoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInventoryQueryParams;

  @Metadata()
  headers: GetInventoryHeaders;
}

export enum GetInventory200ApplicationJsonQuantityUnitEnum {
    Each = "EACH"
}


export class GetInventory200ApplicationJsonQuantity extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=unit" })
  unit: GetInventory200ApplicationJsonQuantityUnitEnum;
}


export class GetInventory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=quantity" })
  quantity: GetInventory200ApplicationJsonQuantity;

  @Metadata({ data: "json, name=sku" })
  sku: string;
}


export class GetInventoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInventory200ApplicationJsonObject?: GetInventory200ApplicationJson;
}
