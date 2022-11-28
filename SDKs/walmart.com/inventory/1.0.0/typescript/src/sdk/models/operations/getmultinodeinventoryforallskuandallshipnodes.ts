import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextCursor" })
  nextCursor?: string;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders extends SpeakeasyBase {
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

export enum GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum {
    Each = "EACH"
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum;
}

export enum GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum {
    Each = "EACH"
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availToSellQty" })
  availToSellQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty;

  @SpeakeasyMetadata({ data: "json, name=inputQty" })
  inputQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty;

  @SpeakeasyMetadata({ data: "json, name=shipNode" })
  shipNode?: string;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes })
  nodes?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes[];

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventories", elemType: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories })
  inventories?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories[];
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextCursor" })
  nextCursor?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elements" })
  elements?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams;

  @SpeakeasyMetadata()
  headers: GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonObject?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson;
}
