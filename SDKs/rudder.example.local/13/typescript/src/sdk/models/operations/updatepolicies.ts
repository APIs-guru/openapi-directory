import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpdatePolicies200ApplicationJsonActionEnum {
    UpdatePolicies = "updatePolicies"
}

export enum UpdatePolicies200ApplicationJsonDataPoliciesEnum {
    Started = "Started"
}


export class UpdatePolicies200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policies" })
  policies: UpdatePolicies200ApplicationJsonDataPoliciesEnum;
}

export enum UpdatePolicies200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdatePolicies200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdatePolicies200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdatePolicies200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdatePolicies200ApplicationJsonResultEnum;
}


export class UpdatePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePolicies200ApplicationJsonObject?: UpdatePolicies200ApplicationJson;
}
