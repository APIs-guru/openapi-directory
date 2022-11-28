import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPendingNodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=composition" })
  composition?: shared.NodeCompositionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;

  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=query" })
  query?: shared.NodeQuery;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" })
  select?: string;

  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=where", elemType: shared.NodeWhere })
  where?: shared.NodeWhere[];
}

export enum ListPendingNodes200ApplicationJsonActionEnum {
    ListPendingNodes = "listPendingNodes"
}


// ListPendingNodes200ApplicationJsonData
/** 
 * Information about the nodes
**/
export class ListPendingNodes200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum ListPendingNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListPendingNodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListPendingNodes200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListPendingNodes200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListPendingNodes200ApplicationJsonResultEnum;
}


export class ListPendingNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPendingNodesQueryParams;
}


export class ListPendingNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPendingNodes200ApplicationJsonObject?: ListPendingNodes200ApplicationJson;
}
