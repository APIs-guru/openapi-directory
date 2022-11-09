import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMultiNodeInventoryForSkuAndAllShipnodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=shipNode" })
  shipNode?: string;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodesHeaders extends SpeakeasyBase {
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


export class GetMultiNodeInventoryForSkuAndAllShipnodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMultiNodeInventoryForSkuAndAllShipnodesPathParams;

  @Metadata()
  queryParams: GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams;

  @Metadata()
  headers: GetMultiNodeInventoryForSkuAndAllShipnodesHeaders;
}

export enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum {
    Each = "EACH"
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=unit" })
  unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum;
}

export enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum {
    Application = "APPLICATION"
,    System = "SYSTEM"
,    Request = "REQUEST"
,    Data = "DATA"
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

export enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum {
    Info = "INFO"
,    Warn = "WARN"
,    Error = "ERROR"
}


// GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors
/** 
 * Node Update Error description.
**/
export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum;

  @Metadata({ data: "json, name=causes", elemType: operations.GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses })
  causes?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses[];

  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=errorIdentifiers" })
  errorIdentifiers?: Map<string, Map<string, any>>;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=info" })
  info?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum;
}

export enum GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum {
    Each = "EACH"
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=unit" })
  unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=availToSellQty" })
  availToSellQty?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty;

  @Metadata({ data: "json, name=errors", elemType: operations.GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors })
  errors?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors[];

  @Metadata({ data: "json, name=inputQty" })
  inputQty?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty;

  @Metadata({ data: "json, name=shipNode" })
  shipNode?: string;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: operations.GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes })
  nodes?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes[];

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetMultiNodeInventoryForSkuAndAllShipnodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonObject?: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson;
}
