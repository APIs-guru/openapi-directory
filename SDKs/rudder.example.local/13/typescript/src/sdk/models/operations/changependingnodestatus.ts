import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangePendingNodeStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}

export enum ChangePendingNodeStatusRequestBodyStatusEnum {
    Accepted = "accepted"
,    Refused = "refused"
}


export class ChangePendingNodeStatusRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: ChangePendingNodeStatusRequestBodyStatusEnum;
}


export class ChangePendingNodeStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangePendingNodeStatusPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ChangePendingNodeStatusRequestBody;
}

export enum ChangePendingNodeStatus200ApplicationJsonActionEnum {
    ChangePendingNodeStatus = "changePendingNodeStatus"
}


// ChangePendingNodeStatus200ApplicationJsonData
/** 
 * Information about the node
**/
export class ChangePendingNodeStatus200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum ChangePendingNodeStatus200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ChangePendingNodeStatus200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ChangePendingNodeStatus200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ChangePendingNodeStatus200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ChangePendingNodeStatus200ApplicationJsonResultEnum;
}


export class ChangePendingNodeStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  changePendingNodeStatus200ApplicationJsonObject?: ChangePendingNodeStatus200ApplicationJson;
}
