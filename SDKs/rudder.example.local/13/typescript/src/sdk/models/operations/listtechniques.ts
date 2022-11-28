import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListTechniques200ApplicationJsonActionEnum {
    ListTechniques = "listTechniques"
}


export class ListTechniques200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=techniques", elemType: shared.Techniques })
  techniques: shared.Techniques[];
}

export enum ListTechniques200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListTechniques200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListTechniques200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListTechniques200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListTechniques200ApplicationJsonResultEnum;
}


export class ListTechniquesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listTechniques200ApplicationJsonObject?: ListTechniques200ApplicationJson;
}
