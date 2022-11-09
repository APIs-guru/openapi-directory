import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDirectivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=directiveId" })
  directiveId: string;
}


export class UpdateDirectiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDirectivePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Directive;
}

export enum UpdateDirective200ApplicationJsonActionEnum {
    UpdateDirective = "updateDirective"
}


export class UpdateDirective200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum UpdateDirective200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateDirective200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateDirective200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateDirective200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateDirective200ApplicationJsonResultEnum;
}


export class UpdateDirectiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDirective200ApplicationJsonObject?: UpdateDirective200ApplicationJson;
}
