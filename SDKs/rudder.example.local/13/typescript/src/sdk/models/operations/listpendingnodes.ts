import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPendingNodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=composition" })
  composition?: shared.NodeCompositionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;

  @Metadata({ data: "queryParam, serialization=json;name=query" })
  query?: shared.NodeQuery;

  @Metadata({ data: "queryParam, style=form;explode=true;name=select" })
  select?: string;

  @Metadata({ data: "queryParam, serialization=json;name=where", elemType: shared.NodeWhere })
  where?: shared.NodeWhere[];
}


export class ListPendingNodesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPendingNodesQueryParams;
}

export enum ListPendingNodes200ApplicationJsonActionEnum {
    ListPendingNodes = "listPendingNodes"
}


// ListPendingNodes200ApplicationJsonData
/** 
 * Information about the nodes
**/
export class ListPendingNodes200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum ListPendingNodes200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListPendingNodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListPendingNodes200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListPendingNodes200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListPendingNodes200ApplicationJsonResultEnum;
}


export class ListPendingNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listPendingNodes200ApplicationJsonObject?: ListPendingNodes200ApplicationJson;
}
