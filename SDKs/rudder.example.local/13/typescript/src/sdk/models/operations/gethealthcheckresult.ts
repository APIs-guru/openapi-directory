import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetHealthcheckResult200ApplicationJsonActionEnum {
    GetHealthcheckResult = "getHealthcheckResult"
}

export enum GetHealthcheckResult200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetHealthcheckResult200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetHealthcheckResult200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data", elemType: shared.Check })
  data: shared.Check[];

  @Metadata({ data: "json, name=result" })
  result: GetHealthcheckResult200ApplicationJsonResultEnum;
}


export class GetHealthcheckResultResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getHealthcheckResult200ApplicationJsonObject?: GetHealthcheckResult200ApplicationJson;
}
