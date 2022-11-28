import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDirectivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directiveId" })
  directiveId: string;
}

export enum DeleteDirective200ApplicationJsonActionEnum {
    DeleteDirective = "deleteDirective"
}


export class DeleteDirective200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum DeleteDirective200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeleteDirective200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteDirective200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeleteDirective200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteDirective200ApplicationJsonResultEnum;
}


export class DeleteDirectiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDirectivePathParams;
}


export class DeleteDirectiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteDirective200ApplicationJsonObject?: DeleteDirective200ApplicationJson;
}
