import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListUsers200ApplicationJsonActionEnum {
    ListUsers = "listUsers"
}

export enum ListUsers200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListUsers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListUsers200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data", elemType: shared.ValidatedUser })
  data: shared.ValidatedUser[];

  @Metadata({ data: "json, name=result" })
  result: ListUsers200ApplicationJsonResultEnum;
}


export class ListUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listUsers200ApplicationJsonObject?: ListUsers200ApplicationJson;
}
