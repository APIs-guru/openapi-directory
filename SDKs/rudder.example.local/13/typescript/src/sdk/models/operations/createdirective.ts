import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDirectiveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DirectiveNew;
}

export enum CreateDirective200ApplicationJsonActionEnum {
    CreateDirective = "createDirective"
}


export class CreateDirective200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum CreateDirective200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CreateDirective200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateDirective200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CreateDirective200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CreateDirective200ApplicationJsonResultEnum;
}


export class CreateDirectiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDirective200ApplicationJsonObject?: CreateDirective200ApplicationJson;
}
