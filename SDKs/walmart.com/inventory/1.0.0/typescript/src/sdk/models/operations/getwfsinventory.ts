import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWfsInventoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromModifiedDate" })
  fromModifiedDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toModifiedDate" })
  toModifiedDate?: string;
}


export class GetWfsInventoryHeaders extends SpeakeasyBase {
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


export class GetWfsInventory200ApplicationJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availToSellQty" })
  availToSellQty?: number;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=onHandQty" })
  onHandQty?: number;

  @SpeakeasyMetadata({ data: "json, name=shipNodeType" })
  shipNodeType?: string;
}


export class GetWfsInventory200ApplicationJsonPayloadInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shipNodes", elemType: GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes })
  shipNodes?: GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes[];

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetWfsInventory200ApplicationJsonPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventory", elemType: GetWfsInventory200ApplicationJsonPayloadInventory })
  inventory?: GetWfsInventory200ApplicationJsonPayloadInventory[];
}


export class GetWfsInventory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: GetWfsInventory200ApplicationJsonHeaders;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: GetWfsInventory200ApplicationJsonPayload;
}


export class GetWfsInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWfsInventoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetWfsInventoryHeaders;
}


export class GetWfsInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getWfsInventory200ApplicationJsonObject?: GetWfsInventory200ApplicationJson;
}
