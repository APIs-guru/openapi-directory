import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRole200ApplicationJsonActionEnum {
    GetRole = "getRole"
}

export enum GetRole200ApplicationJsonDataIdEnum {
    Inventory = "inventory"
,    Compliance = "compliance"
,    Administrator = "administrator"
,    Etc = "etc"
}

export enum GetRole200ApplicationJsonDataRightsEnum {
    NodeRead = "node_read"
,    UserAccountAll = "userAccount_all"
}


export class GetRole200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: GetRole200ApplicationJsonDataIdEnum;

  @Metadata({ data: "json, name=rights" })
  rights: GetRole200ApplicationJsonDataRightsEnum[];
}

export enum GetRole200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetRole200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetRole200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data", elemType: operations.GetRole200ApplicationJsonData })
  data: GetRole200ApplicationJsonData[];

  @Metadata({ data: "json, name=result" })
  result: GetRole200ApplicationJsonResultEnum;
}


export class GetRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRole200ApplicationJsonObject?: GetRole200ApplicationJson;
}
