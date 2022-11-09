import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListChangeRequests200ApplicationJsonActionEnum {
    ListChangeRequests = "listChangeRequests"
}


export class ListChangeRequests200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum ListChangeRequests200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListChangeRequests200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListChangeRequests200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListChangeRequests200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListChangeRequests200ApplicationJsonResultEnum;
}


export class ListChangeRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listChangeRequests200ApplicationJsonObject?: ListChangeRequests200ApplicationJson;
}
