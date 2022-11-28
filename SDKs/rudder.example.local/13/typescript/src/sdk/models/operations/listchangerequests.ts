import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListChangeRequests200ApplicationJsonActionEnum {
    ListChangeRequests = "listChangeRequests"
}


export class ListChangeRequests200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum ListChangeRequests200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListChangeRequests200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListChangeRequests200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListChangeRequests200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListChangeRequests200ApplicationJsonResultEnum;
}


export class ListChangeRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listChangeRequests200ApplicationJsonObject?: ListChangeRequests200ApplicationJson;
}
