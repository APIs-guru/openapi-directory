import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextCursor" })
  nextCursor?: string;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders extends SpeakeasyBase {
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


export class GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams;

  @Metadata()
  headers: GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders;
}

export enum GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum {
    Each = "EACH"
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=unit" })
  unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum;
}

export enum GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum {
    Each = "EACH"
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=unit" })
  unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=availToSellQty" })
  availToSellQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty;

  @Metadata({ data: "json, name=inputQty" })
  inputQty?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty;

  @Metadata({ data: "json, name=shipNode" })
  shipNode?: string;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: operations.GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes })
  nodes?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes[];

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventories", elemType: operations.GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories })
  inventories?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories[];
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextCursor" })
  nextCursor?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=elements" })
  elements?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements;

  @Metadata({ data: "json, name=meta" })
  meta?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta;
}


export class GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonObject?: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson;
}
