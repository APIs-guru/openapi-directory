import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class DeleteNodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: shared.NodeDeleteModeEnum;
}


export class DeleteNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNodePathParams;

  @Metadata()
  queryParams: DeleteNodeQueryParams;
}

export enum DeleteNode200ApplicationJsonActionEnum {
    DeleteNode = "deleteNode"
}


// DeleteNode200ApplicationJsonData
/** 
 * Information about the node
**/
export class DeleteNode200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum DeleteNode200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeleteNode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteNode200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeleteNode200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DeleteNode200ApplicationJsonResultEnum;
}


export class DeleteNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteNode200ApplicationJsonObject?: DeleteNode200ApplicationJson;
}
