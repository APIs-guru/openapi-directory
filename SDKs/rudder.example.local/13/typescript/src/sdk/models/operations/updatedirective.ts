import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDirectivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directiveId" })
  directiveId: string;
}

export enum UpdateDirective200ApplicationJsonActionEnum {
    UpdateDirective = "updateDirective"
}


export class UpdateDirective200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum UpdateDirective200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateDirective200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateDirective200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateDirective200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateDirective200ApplicationJsonResultEnum;
}


export class UpdateDirectiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDirectivePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Directive;
}


export class UpdateDirectiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDirective200ApplicationJsonObject?: UpdateDirective200ApplicationJson;
}
