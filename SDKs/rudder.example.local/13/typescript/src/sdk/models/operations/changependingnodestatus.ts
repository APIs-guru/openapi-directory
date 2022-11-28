import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangePendingNodeStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}

export enum ChangePendingNodeStatusRequestBodyStatusEnum {
    Accepted = "accepted",
    Refused = "refused"
}


export class ChangePendingNodeStatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChangePendingNodeStatusRequestBodyStatusEnum;
}

export enum ChangePendingNodeStatus200ApplicationJsonActionEnum {
    ChangePendingNodeStatus = "changePendingNodeStatus"
}


// ChangePendingNodeStatus200ApplicationJsonData
/** 
 * Information about the node
**/
export class ChangePendingNodeStatus200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum ChangePendingNodeStatus200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ChangePendingNodeStatus200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ChangePendingNodeStatus200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ChangePendingNodeStatus200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ChangePendingNodeStatus200ApplicationJsonResultEnum;
}


export class ChangePendingNodeStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangePendingNodeStatusPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ChangePendingNodeStatusRequestBody;
}


export class ChangePendingNodeStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  changePendingNodeStatus200ApplicationJsonObject?: ChangePendingNodeStatus200ApplicationJson;
}
