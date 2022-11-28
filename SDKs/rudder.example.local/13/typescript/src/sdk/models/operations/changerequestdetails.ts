import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeRequestDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" })
  changeRequestId: number;
}

export enum ChangeRequestDetails200ApplicationJsonActionEnum {
    ChangeRequestDetails = "changeRequestDetails"
}


export class ChangeRequestDetails200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum ChangeRequestDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ChangeRequestDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ChangeRequestDetails200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ChangeRequestDetails200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ChangeRequestDetails200ApplicationJsonResultEnum;
}


export class ChangeRequestDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeRequestDetailsPathParams;
}


export class ChangeRequestDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  changeRequestDetails200ApplicationJsonObject?: ChangeRequestDetails200ApplicationJson;
}
