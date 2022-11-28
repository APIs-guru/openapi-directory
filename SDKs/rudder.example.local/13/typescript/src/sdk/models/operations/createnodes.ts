import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateNodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=Node parameters", elemType: shared.NodeAdd })
  nodeParameters?: shared.NodeAdd[];
}

export enum CreateNodes200ApplicationJsonActionEnum {
    CreateNodes = "createNodes"
}


export class CreateNodes200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string[];

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed: string[];
}

export enum CreateNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CreateNodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateNodes200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateNodes200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CreateNodes200ApplicationJsonResultEnum;
}


export class CreateNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateNodesQueryParams;
}


export class CreateNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNodes200ApplicationJsonObject?: CreateNodes200ApplicationJson;
}
