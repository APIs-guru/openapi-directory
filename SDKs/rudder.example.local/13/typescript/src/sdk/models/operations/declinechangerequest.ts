import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeclineChangeRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" })
  changeRequestId: number;
}


export class DeclineChangeRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeclineChangeRequestPathParams;
}

export enum DeclineChangeRequest200ApplicationJsonActionEnum {
    DeclineChangeRequest = "declineChangeRequest"
}


export class DeclineChangeRequest200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.ChangeRequest })
  rules: shared.ChangeRequest[];
}

export enum DeclineChangeRequest200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeclineChangeRequest200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeclineChangeRequest200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeclineChangeRequest200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DeclineChangeRequest200ApplicationJsonResultEnum;
}


export class DeclineChangeRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  declineChangeRequest200ApplicationJsonObject?: DeclineChangeRequest200ApplicationJson;
}
