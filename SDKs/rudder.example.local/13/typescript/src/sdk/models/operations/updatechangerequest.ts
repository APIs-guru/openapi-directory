import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateChangeRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" })
  changeRequestId: number;
}


export class UpdateChangeRequestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum UpdateChangeRequest200ApplicationJsonActionEnum {
    UpdateChangeRequest = "updateChangeRequest"
}


export class UpdateChangeRequest200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum UpdateChangeRequest200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateChangeRequest200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateChangeRequest200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateChangeRequest200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateChangeRequest200ApplicationJsonResultEnum;
}


export class UpdateChangeRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateChangeRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateChangeRequestRequestBody;
}


export class UpdateChangeRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateChangeRequest200ApplicationJsonObject?: UpdateChangeRequest200ApplicationJson;
}
