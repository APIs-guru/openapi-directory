import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateChangeRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" })
  changeRequestId: number;
}


export class UpdateChangeRequestRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateChangeRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateChangeRequestPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateChangeRequestRequestBody;
}

export enum UpdateChangeRequest200ApplicationJsonActionEnum {
    UpdateChangeRequest = "updateChangeRequest"
}


export class UpdateChangeRequest200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum UpdateChangeRequest200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateChangeRequest200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateChangeRequest200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateChangeRequest200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateChangeRequest200ApplicationJsonResultEnum;
}


export class UpdateChangeRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateChangeRequest200ApplicationJsonObject?: UpdateChangeRequest200ApplicationJson;
}
