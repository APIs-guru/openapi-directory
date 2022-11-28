import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeclineChangeRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" })
  changeRequestId: number;
}

export enum DeclineChangeRequest200ApplicationJsonActionEnum {
    DeclineChangeRequest = "declineChangeRequest"
}


export class DeclineChangeRequest200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum DeclineChangeRequest200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeclineChangeRequest200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeclineChangeRequest200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeclineChangeRequest200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeclineChangeRequest200ApplicationJsonResultEnum;
}


export class DeclineChangeRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeclineChangeRequestPathParams;
}


export class DeclineChangeRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  declineChangeRequest200ApplicationJsonObject?: DeclineChangeRequest200ApplicationJson;
}
