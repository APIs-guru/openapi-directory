import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMultiNodeInventoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;
}


export class UpdateMultiNodeInventoryHeaders extends SpeakeasyBase {
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

export enum UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum {
    Each = "EACH"
}


export class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=unit" })
  unit: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum;
}


export class UpdateMultiNodeInventoryRequestBodyInventoriesNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputQty" })
  inputQty: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty;

  @Metadata({ data: "json, name=shipNode" })
  shipNode: string;
}


export class UpdateMultiNodeInventoryRequestBodyInventories extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodes })
  nodes: UpdateMultiNodeInventoryRequestBodyInventoriesNodes[];
}


export class UpdateMultiNodeInventoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventories" })
  inventories: UpdateMultiNodeInventoryRequestBodyInventories;
}


export class UpdateMultiNodeInventoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMultiNodeInventoryPathParams;

  @Metadata()
  headers: UpdateMultiNodeInventoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateMultiNodeInventoryRequestBody;
}

export enum UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum {
    Application = "APPLICATION"
,    System = "SYSTEM"
,    Request = "REQUEST"
,    Data = "DATA"
}


export class UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

export enum UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum {
    Info = "INFO"
,    Warn = "WARN"
,    Error = "ERROR"
}


// UpdateMultiNodeInventory200ApplicationJsonNodesErrors
/** 
 * Node Update Error description.
**/
export class UpdateMultiNodeInventory200ApplicationJsonNodesErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum;

  @Metadata({ data: "json, name=causes", elemType: operations.UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses })
  causes?: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses[];

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
  severity?: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum;
}


export class UpdateMultiNodeInventory200ApplicationJsonNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: operations.UpdateMultiNodeInventory200ApplicationJsonNodesErrors })
  errors?: UpdateMultiNodeInventory200ApplicationJsonNodesErrors[];

  @Metadata({ data: "json, name=shipNode" })
  shipNode?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class UpdateMultiNodeInventory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: operations.UpdateMultiNodeInventory200ApplicationJsonNodes })
  nodes?: UpdateMultiNodeInventory200ApplicationJsonNodes[];

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}


export class UpdateMultiNodeInventoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateMultiNodeInventory200ApplicationJsonObject?: UpdateMultiNodeInventory200ApplicationJson;
}
