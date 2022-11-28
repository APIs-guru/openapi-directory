import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RegeneratePolicies200ApplicationJsonActionEnum {
    RegeneratePolicies = "regeneratePolicies"
}

export enum RegeneratePolicies200ApplicationJsonDataPoliciesEnum {
    Started = "Started"
}


export class RegeneratePolicies200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policies" })
  policies: RegeneratePolicies200ApplicationJsonDataPoliciesEnum;
}

export enum RegeneratePolicies200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class RegeneratePolicies200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: RegeneratePolicies200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: RegeneratePolicies200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: RegeneratePolicies200ApplicationJsonResultEnum;
}


export class RegeneratePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  regeneratePolicies200ApplicationJsonObject?: RegeneratePolicies200ApplicationJson;
}
