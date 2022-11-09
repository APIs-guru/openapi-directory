import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTechniqueVersionDirectivesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=techniqueName" })
  techniqueName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=techniqueVersion" })
  techniqueVersion: string;
}


export class ListTechniqueVersionDirectivesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListTechniqueVersionDirectivesPathParams;
}

export enum ListTechniqueVersionDirectives200ApplicationJsonActionEnum {
    ListTechniqueDirectives = "listTechniqueDirectives"
}


export class ListTechniqueVersionDirectives200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum ListTechniqueVersionDirectives200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListTechniqueVersionDirectives200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListTechniqueVersionDirectives200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListTechniqueVersionDirectives200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListTechniqueVersionDirectives200ApplicationJsonResultEnum;
}


export class ListTechniqueVersionDirectivesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listTechniqueVersionDirectives200ApplicationJsonObject?: ListTechniqueVersionDirectives200ApplicationJson;
}
