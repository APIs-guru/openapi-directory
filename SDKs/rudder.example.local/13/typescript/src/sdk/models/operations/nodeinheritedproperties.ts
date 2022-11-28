import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NodeInheritedPropertiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}

export enum NodeInheritedProperties200ApplicationJsonActionEnum {
    NodeInheritedProperties = "nodeInheritedProperties"
}

export enum NodeInheritedProperties200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class NodeInheritedProperties200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: NodeInheritedProperties200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.NodeInheritedProperties })
  data: shared.NodeInheritedProperties[];

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: NodeInheritedProperties200ApplicationJsonResultEnum;
}


export class NodeInheritedPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodeInheritedPropertiesPathParams;
}


export class NodeInheritedPropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nodeInheritedProperties200ApplicationJsonObject?: NodeInheritedProperties200ApplicationJson;
}
