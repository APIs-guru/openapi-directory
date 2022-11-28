import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class DeleteNodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: shared.NodeDeleteModeEnum;
}

export enum DeleteNode200ApplicationJsonActionEnum {
    DeleteNode = "deleteNode"
}


// DeleteNode200ApplicationJsonData
/** 
 * Information about the node
**/
export class DeleteNode200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum DeleteNode200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeleteNode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteNode200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeleteNode200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteNode200ApplicationJsonResultEnum;
}


export class DeleteNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNodePathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteNodeQueryParams;
}


export class DeleteNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteNode200ApplicationJsonObject?: DeleteNode200ApplicationJson;
}
