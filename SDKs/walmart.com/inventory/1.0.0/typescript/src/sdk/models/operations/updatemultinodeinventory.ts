import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMultiNodeInventoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;
}


export class UpdateMultiNodeInventoryHeaders extends SpeakeasyBase {
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

export enum UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum {
    Each = "EACH"
}


export class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum;
}


export class UpdateMultiNodeInventoryRequestBodyInventoriesNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputQty" })
  inputQty: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty;

  @SpeakeasyMetadata({ data: "json, name=shipNode" })
  shipNode: string;
}


export class UpdateMultiNodeInventoryRequestBodyInventories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: UpdateMultiNodeInventoryRequestBodyInventoriesNodes })
  nodes: UpdateMultiNodeInventoryRequestBodyInventoriesNodes[];
}


export class UpdateMultiNodeInventoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventories" })
  inventories: UpdateMultiNodeInventoryRequestBodyInventories;
}

export enum UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum {
    Application = "APPLICATION",
    System = "SYSTEM",
    Request = "REQUEST",
    Data = "DATA"
}


export class UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}


// UpdateMultiNodeInventory200ApplicationJsonNodesErrors
/** 
 * Node Update Error description.
**/
export class UpdateMultiNodeInventory200ApplicationJsonNodesErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=causes", elemType: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses })
  causes?: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses[];

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
  severity?: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum;
}


export class UpdateMultiNodeInventory200ApplicationJsonNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: UpdateMultiNodeInventory200ApplicationJsonNodesErrors })
  errors?: UpdateMultiNodeInventory200ApplicationJsonNodesErrors[];

  @SpeakeasyMetadata({ data: "json, name=shipNode" })
  shipNode?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class UpdateMultiNodeInventory200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: UpdateMultiNodeInventory200ApplicationJsonNodes })
  nodes?: UpdateMultiNodeInventory200ApplicationJsonNodes[];

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}


export class UpdateMultiNodeInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMultiNodeInventoryPathParams;

  @SpeakeasyMetadata()
  headers: UpdateMultiNodeInventoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateMultiNodeInventoryRequestBody;
}


export class UpdateMultiNodeInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateMultiNodeInventory200ApplicationJsonObject?: UpdateMultiNodeInventory200ApplicationJson;
}
