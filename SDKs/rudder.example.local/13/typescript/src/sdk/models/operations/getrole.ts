import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRole200ApplicationJsonActionEnum {
    GetRole = "getRole"
}

export enum GetRole200ApplicationJsonDataIdEnum {
    Inventory = "inventory",
    Compliance = "compliance",
    Administrator = "administrator",
    Etc = "etc"
}

export enum GetRole200ApplicationJsonDataRightsEnum {
    NodeRead = "node_read",
    UserAccountAll = "userAccount_all"
}


export class GetRole200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: GetRole200ApplicationJsonDataIdEnum;

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights: GetRole200ApplicationJsonDataRightsEnum[];
}

export enum GetRole200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetRole200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetRole200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetRole200ApplicationJsonData })
  data: GetRole200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetRole200ApplicationJsonResultEnum;
}


export class GetRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRole200ApplicationJsonObject?: GetRole200ApplicationJson;
}
