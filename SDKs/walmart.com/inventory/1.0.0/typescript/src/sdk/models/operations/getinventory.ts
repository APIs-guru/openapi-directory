import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInventoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipNode" })
  shipNode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sku" })
  sku: string;
}


export class GetInventoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" })
  wmConsumerChannelType: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" })
  wmQosCorrelationId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" })
  wmSecAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" })
  wmSvcName: string;
}

export enum GetInventory200ApplicationJsonQuantityUnitEnum {
    Each = "EACH"
}


export class GetInventory200ApplicationJsonQuantity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: GetInventory200ApplicationJsonQuantityUnitEnum;
}


export class GetInventory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: GetInventory200ApplicationJsonQuantity;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku: string;
}


export class GetInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInventoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetInventoryHeaders;
}


export class GetInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInventory200ApplicationJsonObject?: GetInventory200ApplicationJson;
}
