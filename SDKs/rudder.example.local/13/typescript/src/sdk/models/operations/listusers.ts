import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListUsers200ApplicationJsonActionEnum {
    ListUsers = "listUsers"
}

export enum ListUsers200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListUsers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListUsers200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ValidatedUser })
  data: shared.ValidatedUser[];

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListUsers200ApplicationJsonResultEnum;
}


export class ListUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listUsers200ApplicationJsonObject?: ListUsers200ApplicationJson;
}
