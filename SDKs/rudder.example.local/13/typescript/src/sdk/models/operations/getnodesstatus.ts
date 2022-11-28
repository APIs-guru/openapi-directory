import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNodesStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}

export enum GetNodesStatus200ApplicationJsonActionEnum {
    GetNodesStatus = "getNodesStatus"
}

export enum GetNodesStatus200ApplicationJsonDataNodesStatusEnum {
    Pending = "pending",
    Accepted = "accepted",
    Deleted = "deleted",
    Unknown = "unknown"
}


export class GetNodesStatus200ApplicationJsonDataNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetNodesStatus200ApplicationJsonDataNodesStatusEnum;
}


// GetNodesStatus200ApplicationJsonData
/** 
 * List of nodeId and associated status
**/
export class GetNodesStatus200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: GetNodesStatus200ApplicationJsonDataNodes })
  nodes: GetNodesStatus200ApplicationJsonDataNodes[];
}

export enum GetNodesStatus200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetNodesStatus200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetNodesStatus200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetNodesStatus200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetNodesStatus200ApplicationJsonResultEnum;
}


export class GetNodesStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNodesStatusQueryParams;
}


export class GetNodesStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNodesStatus200ApplicationJsonObject?: GetNodesStatus200ApplicationJson;
}
