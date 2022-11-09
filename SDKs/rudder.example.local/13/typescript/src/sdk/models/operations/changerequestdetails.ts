import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeRequestDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" })
  changeRequestId: number;
}


export class ChangeRequestDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeRequestDetailsPathParams;
}

export enum ChangeRequestDetails200ApplicationJsonActionEnum {
    ChangeRequestDetails = "changeRequestDetails"
}


export class ChangeRequestDetails200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum ChangeRequestDetails200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ChangeRequestDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ChangeRequestDetails200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ChangeRequestDetails200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ChangeRequestDetails200ApplicationJsonResultEnum;
}


export class ChangeRequestDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  changeRequestDetails200ApplicationJsonObject?: ChangeRequestDetails200ApplicationJson;
}
