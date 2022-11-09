import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckDirectivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=directiveId" })
  directiveId: string;
}


export class CheckDirectiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckDirectivePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Directive;
}

export enum CheckDirective200ApplicationJsonActionEnum {
    CheckDirective = "checkDirective"
}


export class CheckDirective200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum CheckDirective200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CheckDirective200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CheckDirective200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CheckDirective200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CheckDirective200ApplicationJsonResultEnum;
}


export class CheckDirectiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkDirective200ApplicationJsonObject?: CheckDirective200ApplicationJson;
}
