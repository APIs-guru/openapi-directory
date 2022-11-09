import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWfsInventoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fromModifiedDate" })
  fromModifiedDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sku" })
  sku?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toModifiedDate" })
  toModifiedDate?: string;
}


export class GetWfsInventoryHeaders extends SpeakeasyBase {
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


export class GetWfsInventoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWfsInventoryQueryParams;

  @Metadata()
  headers: GetWfsInventoryHeaders;
}


export class GetWfsInventory200ApplicationJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=availToSellQty" })
  availToSellQty?: number;

  @Metadata({ data: "json, name=modifiedDate" })
  modifiedDate?: string;

  @Metadata({ data: "json, name=onHandQty" })
  onHandQty?: number;

  @Metadata({ data: "json, name=shipNodeType" })
  shipNodeType?: string;
}


export class GetWfsInventory200ApplicationJsonPayloadInventory extends SpeakeasyBase {
  @Metadata({ data: "json, name=shipNodes", elemType: operations.GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes })
  shipNodes?: GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes[];

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetWfsInventory200ApplicationJsonPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventory", elemType: operations.GetWfsInventory200ApplicationJsonPayloadInventory })
  inventory?: GetWfsInventory200ApplicationJsonPayloadInventory[];
}


export class GetWfsInventory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers" })
  headers?: GetWfsInventory200ApplicationJsonHeaders;

  @Metadata({ data: "json, name=payload" })
  payload?: GetWfsInventory200ApplicationJsonPayload;
}


export class GetWfsInventoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getWfsInventory200ApplicationJsonObject?: GetWfsInventory200ApplicationJson;
}
