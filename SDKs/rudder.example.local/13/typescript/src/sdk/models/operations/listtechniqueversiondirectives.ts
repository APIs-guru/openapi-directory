import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListTechniqueVersionDirectivesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=techniqueName" })
  techniqueName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=techniqueVersion" })
  techniqueVersion: string;
}

export enum ListTechniqueVersionDirectives200ApplicationJsonActionEnum {
    ListTechniqueDirectives = "listTechniqueDirectives"
}


export class ListTechniqueVersionDirectives200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum ListTechniqueVersionDirectives200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListTechniqueVersionDirectives200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListTechniqueVersionDirectives200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListTechniqueVersionDirectives200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListTechniqueVersionDirectives200ApplicationJsonResultEnum;
}


export class ListTechniqueVersionDirectivesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListTechniqueVersionDirectivesPathParams;
}


export class ListTechniqueVersionDirectivesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listTechniqueVersionDirectives200ApplicationJsonObject?: ListTechniqueVersionDirectives200ApplicationJson;
}
