import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class UpdateNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNodePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.NodeSettings;
}

export enum UpdateNode200ApplicationJsonActionEnum {
    UpdateNode = "updateNode"
}


// UpdateNode200ApplicationJsonData
/** 
 * Information about the node
**/
export class UpdateNode200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum UpdateNode200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateNode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateNode200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateNode200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateNode200ApplicationJsonResultEnum;
}


export class UpdateNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNode200ApplicationJsonObject?: UpdateNode200ApplicationJson;
}
