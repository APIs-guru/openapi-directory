import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListTechniquesDirectivesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=techniqueName" })
  techniqueName: string;
}

export enum ListTechniquesDirectives200ApplicationJsonActionEnum {
    ListTechniquesDirectives = "listTechniquesDirectives"
}


export class ListTechniquesDirectives200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum ListTechniquesDirectives200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListTechniquesDirectives200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListTechniquesDirectives200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListTechniquesDirectives200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListTechniquesDirectives200ApplicationJsonResultEnum;
}


export class ListTechniquesDirectivesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListTechniquesDirectivesPathParams;
}


export class ListTechniquesDirectivesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listTechniquesDirectives200ApplicationJsonObject?: ListTechniquesDirectives200ApplicationJson;
}
