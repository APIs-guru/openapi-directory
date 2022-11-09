import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RegeneratePolicies200ApplicationJsonActionEnum {
    RegeneratePolicies = "regeneratePolicies"
}

export enum RegeneratePolicies200ApplicationJsonDataPoliciesEnum {
    Started = "Started"
}


export class RegeneratePolicies200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=policies" })
  policies: RegeneratePolicies200ApplicationJsonDataPoliciesEnum;
}

export enum RegeneratePolicies200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class RegeneratePolicies200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: RegeneratePolicies200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: RegeneratePolicies200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: RegeneratePolicies200ApplicationJsonResultEnum;
}


export class RegeneratePoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  regeneratePolicies200ApplicationJsonObject?: RegeneratePolicies200ApplicationJson;
}
