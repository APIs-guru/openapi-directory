import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListTechniques200ApplicationJsonActionEnum {
    ListTechniques = "listTechniques"
}


export class ListTechniques200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=techniques", elemType: shared.Techniques })
  techniques: shared.Techniques[];
}

export enum ListTechniques200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListTechniques200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListTechniques200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListTechniques200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListTechniques200ApplicationJsonResultEnum;
}


export class ListTechniquesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listTechniques200ApplicationJsonObject?: ListTechniques200ApplicationJson;
}
