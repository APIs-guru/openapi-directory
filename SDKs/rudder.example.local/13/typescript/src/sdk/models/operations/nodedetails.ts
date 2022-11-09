import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NodeDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class NodeDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class NodeDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodeDetailsPathParams;

  @Metadata()
  queryParams: NodeDetailsQueryParams;
}

export enum NodeDetails200ApplicationJsonActionEnum {
    NodeDetails = "nodeDetails"
}


// NodeDetails200ApplicationJsonData
/** 
 * Information about the node
**/
export class NodeDetails200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum NodeDetails200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class NodeDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: NodeDetails200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: NodeDetails200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: NodeDetails200ApplicationJsonResultEnum;
}


export class NodeDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nodeDetails200ApplicationJsonObject?: NodeDetails200ApplicationJson;
}
