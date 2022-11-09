import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNodesStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class GetNodesStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNodesStatusQueryParams;
}

export enum GetNodesStatus200ApplicationJsonActionEnum {
    GetNodesStatus = "getNodesStatus"
}

export enum GetNodesStatus200ApplicationJsonDataNodesStatusEnum {
    Pending = "pending"
,    Accepted = "accepted"
,    Deleted = "deleted"
,    Unknown = "unknown"
}


export class GetNodesStatus200ApplicationJsonDataNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=status" })
  status: GetNodesStatus200ApplicationJsonDataNodesStatusEnum;
}


// GetNodesStatus200ApplicationJsonData
/** 
 * List of nodeId and associated status
**/
export class GetNodesStatus200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: operations.GetNodesStatus200ApplicationJsonDataNodes })
  nodes: GetNodesStatus200ApplicationJsonDataNodes[];
}

export enum GetNodesStatus200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetNodesStatus200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetNodesStatus200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetNodesStatus200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetNodesStatus200ApplicationJsonResultEnum;
}


export class GetNodesStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodesStatus200ApplicationJsonObject?: GetNodesStatus200ApplicationJson;
}
