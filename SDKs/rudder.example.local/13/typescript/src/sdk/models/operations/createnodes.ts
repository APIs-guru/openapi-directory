import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateNodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=Node parameters", elemType: shared.NodeAdd })
  nodeParameters?: shared.NodeAdd[];
}


export class CreateNodesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateNodesQueryParams;
}

export enum CreateNodes200ApplicationJsonActionEnum {
    CreateNodes = "createNodes"
}


export class CreateNodes200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: string[];

  @Metadata({ data: "json, name=failed" })
  failed: string[];
}

export enum CreateNodes200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CreateNodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateNodes200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CreateNodes200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CreateNodes200ApplicationJsonResultEnum;
}


export class CreateNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNodes200ApplicationJsonObject?: CreateNodes200ApplicationJson;
}
