import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AcceptChangeRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" })
  changeRequestId: number;
}

export enum AcceptChangeRequestRequestBodyStatusEnum {
    PendingDeployment = "pending deployment"
,    Deployed = "deployed"
}


export class AcceptChangeRequestRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: AcceptChangeRequestRequestBodyStatusEnum;
}


export class AcceptChangeRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AcceptChangeRequestPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AcceptChangeRequestRequestBody;
}

export enum AcceptChangeRequest200ApplicationJsonActionEnum {
    AcceptChangeRequest = "acceptChangeRequest"
}


export class AcceptChangeRequest200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum AcceptChangeRequest200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class AcceptChangeRequest200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: AcceptChangeRequest200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: AcceptChangeRequest200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: AcceptChangeRequest200ApplicationJsonResultEnum;
}


export class AcceptChangeRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  acceptChangeRequest200ApplicationJsonObject?: AcceptChangeRequest200ApplicationJson;
}
