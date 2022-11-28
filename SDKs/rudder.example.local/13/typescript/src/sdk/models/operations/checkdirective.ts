import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckDirectivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directiveId" })
  directiveId: string;
}

export enum CheckDirective200ApplicationJsonActionEnum {
    CheckDirective = "checkDirective"
}


export class CheckDirective200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum CheckDirective200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CheckDirective200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CheckDirective200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CheckDirective200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CheckDirective200ApplicationJsonResultEnum;
}


export class CheckDirectiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckDirectivePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Directive;
}


export class CheckDirectiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkDirective200ApplicationJsonObject?: CheckDirective200ApplicationJson;
}
