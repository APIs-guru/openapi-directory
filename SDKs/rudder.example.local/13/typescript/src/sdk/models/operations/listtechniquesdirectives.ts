import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTechniquesDirectivesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=techniqueName" })
  techniqueName: string;
}


export class ListTechniquesDirectivesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListTechniquesDirectivesPathParams;
}

export enum ListTechniquesDirectives200ApplicationJsonActionEnum {
    ListTechniquesDirectives = "listTechniquesDirectives"
}


export class ListTechniquesDirectives200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum ListTechniquesDirectives200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListTechniquesDirectives200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListTechniquesDirectives200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListTechniquesDirectives200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListTechniquesDirectives200ApplicationJsonResultEnum;
}


export class ListTechniquesDirectivesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listTechniquesDirectives200ApplicationJsonObject?: ListTechniquesDirectives200ApplicationJson;
}
