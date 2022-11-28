import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetHealthcheckResult200ApplicationJsonActionEnum {
    GetHealthcheckResult = "getHealthcheckResult"
}

export enum GetHealthcheckResult200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetHealthcheckResult200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetHealthcheckResult200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Check })
  data: shared.Check[];

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetHealthcheckResult200ApplicationJsonResultEnum;
}


export class GetHealthcheckResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getHealthcheckResult200ApplicationJsonObject?: GetHealthcheckResult200ApplicationJson;
}
