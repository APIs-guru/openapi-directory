import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NodeInheritedPropertiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class NodeInheritedPropertiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodeInheritedPropertiesPathParams;
}

export enum NodeInheritedProperties200ApplicationJsonActionEnum {
    NodeInheritedProperties = "nodeInheritedProperties"
}

export enum NodeInheritedProperties200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class NodeInheritedProperties200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: NodeInheritedProperties200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data", elemType: shared.NodeInheritedProperties })
  data: shared.NodeInheritedProperties[];

  @Metadata({ data: "json, name=result" })
  result: NodeInheritedProperties200ApplicationJsonResultEnum;
}


export class NodeInheritedPropertiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nodeInheritedProperties200ApplicationJsonObject?: NodeInheritedProperties200ApplicationJson;
}
