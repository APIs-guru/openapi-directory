import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAcceptedNodesQueryParams extends SpeakeasyBase {
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

export enum ListAcceptedNodes200ApplicationJsonActionEnum {
    ListAcceptedNodes = "listAcceptedNodes"
}


// ListAcceptedNodes200ApplicationJsonData
/** 
 * Information about the nodes
**/
export class ListAcceptedNodes200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeFull })
  nodes: shared.NodeFull[];
}

export enum ListAcceptedNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListAcceptedNodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListAcceptedNodes200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListAcceptedNodes200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListAcceptedNodes200ApplicationJsonResultEnum;
}


export class ListAcceptedNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAcceptedNodesQueryParams;
}


export class ListAcceptedNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAcceptedNodes200ApplicationJsonObject?: ListAcceptedNodes200ApplicationJson;
}
