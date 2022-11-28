import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}

export enum UpdateNode200ApplicationJsonActionEnum {
    UpdateNode = "updateNode"
}


// UpdateNode200ApplicationJsonData
/** 
 * Information about the node
**/
export class UpdateNode200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum UpdateNode200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateNode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateNode200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateNode200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateNode200ApplicationJsonResultEnum;
}


export class UpdateNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNodePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NodeSettings;
}


export class UpdateNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNode200ApplicationJsonObject?: UpdateNode200ApplicationJson;
}
