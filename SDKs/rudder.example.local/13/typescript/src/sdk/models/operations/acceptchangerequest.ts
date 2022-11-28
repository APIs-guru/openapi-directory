import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AcceptChangeRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" })
  changeRequestId: number;
}

export enum AcceptChangeRequestRequestBodyStatusEnum {
    PendingDeployment = "pending deployment",
    Deployed = "deployed"
}


export class AcceptChangeRequestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AcceptChangeRequestRequestBodyStatusEnum;
}

export enum AcceptChangeRequest200ApplicationJsonActionEnum {
    AcceptChangeRequest = "acceptChangeRequest"
}


export class AcceptChangeRequest200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum AcceptChangeRequest200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class AcceptChangeRequest200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: AcceptChangeRequest200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: AcceptChangeRequest200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: AcceptChangeRequest200ApplicationJsonResultEnum;
}


export class AcceptChangeRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AcceptChangeRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AcceptChangeRequestRequestBody;
}


export class AcceptChangeRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  acceptChangeRequest200ApplicationJsonObject?: AcceptChangeRequest200ApplicationJson;
}
