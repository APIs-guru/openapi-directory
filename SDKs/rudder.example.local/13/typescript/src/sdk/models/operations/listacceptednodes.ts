import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAcceptedNodesQueryParams extends SpeakeasyBase {
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


export class ListAcceptedNodesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAcceptedNodesQueryParams;
}

export enum ListAcceptedNodes200ApplicationJsonActionEnum {
    ListAcceptedNodes = "listAcceptedNodes"
}


// ListAcceptedNodes200ApplicationJsonData
/** 
 * Information about the nodes
**/
export class ListAcceptedNodes200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum ListAcceptedNodes200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListAcceptedNodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListAcceptedNodes200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListAcceptedNodes200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListAcceptedNodes200ApplicationJsonResultEnum;
}


export class ListAcceptedNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAcceptedNodes200ApplicationJsonObject?: ListAcceptedNodes200ApplicationJson;
}
