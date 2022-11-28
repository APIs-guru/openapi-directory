import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NodeDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class NodeDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}

export enum NodeDetails200ApplicationJsonActionEnum {
    NodeDetails = "nodeDetails"
}


// NodeDetails200ApplicationJsonData
/** 
 * Information about the node
**/
export class NodeDetails200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum NodeDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class NodeDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: NodeDetails200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: NodeDetails200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: NodeDetails200ApplicationJsonResultEnum;
}


export class NodeDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodeDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: NodeDetailsQueryParams;
}


export class NodeDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nodeDetails200ApplicationJsonObject?: NodeDetails200ApplicationJson;
}
