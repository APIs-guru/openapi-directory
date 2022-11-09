import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGroupTree200ApplicationJsonActionEnum {
    GetGroupTree = "GetGroupTree"
}


export class GetGroupTree200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupCategories" })
  groupCategories: Map<string, any>;
}

export enum GetGroupTree200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetGroupTree200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetGroupTree200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetGroupTree200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetGroupTree200ApplicationJsonResultEnum;
}


export class GetGroupTreeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getGroupTree200ApplicationJsonObject?: GetGroupTree200ApplicationJson;

  @Metadata()
  statusCode: number;
}
