import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpdatePolicies200ApplicationJsonActionEnum {
    UpdatePolicies = "updatePolicies"
}

export enum UpdatePolicies200ApplicationJsonDataPoliciesEnum {
    Started = "Started"
}


export class UpdatePolicies200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=policies" })
  policies: UpdatePolicies200ApplicationJsonDataPoliciesEnum;
}

export enum UpdatePolicies200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdatePolicies200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdatePolicies200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdatePolicies200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdatePolicies200ApplicationJsonResultEnum;
}


export class UpdatePoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePolicies200ApplicationJsonObject?: UpdatePolicies200ApplicationJson;
}
