import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGroupTree200ApplicationJsonActionEnum {
    GetGroupTree = "GetGroupTree"
}


export class GetGroupTree200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupCategories" })
  groupCategories: Map<string, any>;
}

export enum GetGroupTree200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetGroupTree200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetGroupTree200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetGroupTree200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetGroupTree200ApplicationJsonResultEnum;
}


export class GetGroupTreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getGroupTree200ApplicationJsonObject?: GetGroupTree200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
