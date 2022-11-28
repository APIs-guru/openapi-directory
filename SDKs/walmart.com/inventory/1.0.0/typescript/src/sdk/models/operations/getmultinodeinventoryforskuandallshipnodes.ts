import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMultiNodeInventoryForSkuAndAllShipnodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipNode" })
  shipNode?: string;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodesHeaders extends SpeakeasyBase {
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

export enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum {
    Each = "EACH"
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum;
}

export enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}


// GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors
/** 
 * Node Update Error description.
**/
export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=causes", elemType: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses })
  causes?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=errorIdentifiers" })
  errorIdentifiers?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum;
}

export enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum {
    Each = "EACH"
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availToSellQty" })
  availToSellQty?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors })
  errors?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors[];

  @SpeakeasyMetadata({ data: "json, name=inputQty" })
  inputQty?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty;

  @SpeakeasyMetadata({ data: "json, name=shipNode" })
  shipNode?: string;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes })
  nodes?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes[];

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMultiNodeInventoryForSkuAndAllShipnodesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams;

  @SpeakeasyMetadata()
  headers: GetMultiNodeInventoryForSkuAndAllShipnodesHeaders;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonObject?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson;
}
