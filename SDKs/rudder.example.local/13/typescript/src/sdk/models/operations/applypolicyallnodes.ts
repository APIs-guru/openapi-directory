import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApplyPolicyAllNodes200ApplicationJsonActionEnum {
    ApplyPolicyAllNodes = "applyPolicyAllNodes"
}


export class ApplyPolicyAllNodes200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;
}

export enum ApplyPolicyAllNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ApplyPolicyAllNodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ApplyPolicyAllNodes200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: ApplyPolicyAllNodes200ApplicationJsonData })
  data: ApplyPolicyAllNodes200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ApplyPolicyAllNodes200ApplicationJsonResultEnum;
}


export class ApplyPolicyAllNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  applyPolicyAllNodes200ApplicationJsonObject?: ApplyPolicyAllNodes200ApplicationJson;
}
