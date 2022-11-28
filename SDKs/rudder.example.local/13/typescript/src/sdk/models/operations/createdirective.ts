import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateDirective200ApplicationJsonActionEnum {
    CreateDirective = "createDirective"
}


export class CreateDirective200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum CreateDirective200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CreateDirective200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateDirective200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateDirective200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CreateDirective200ApplicationJsonResultEnum;
}


export class CreateDirectiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.DirectiveNew;
}


export class CreateDirectiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDirective200ApplicationJsonObject?: CreateDirective200ApplicationJson;
}
