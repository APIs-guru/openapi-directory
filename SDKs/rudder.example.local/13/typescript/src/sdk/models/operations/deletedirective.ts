import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDirectivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=directiveId" })
  directiveId: string;
}


export class DeleteDirectiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDirectivePathParams;
}

export enum DeleteDirective200ApplicationJsonActionEnum {
    DeleteDirective = "deleteDirective"
}


export class DeleteDirective200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum DeleteDirective200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeleteDirective200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteDirective200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeleteDirective200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DeleteDirective200ApplicationJsonResultEnum;
}


export class DeleteDirectiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteDirective200ApplicationJsonObject?: DeleteDirective200ApplicationJson;
}
