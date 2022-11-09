import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApplyPolicyAllNodes200ApplicationJsonActionEnum {
    ApplyPolicyAllNodes = "applyPolicyAllNodes"
}


export class ApplyPolicyAllNodes200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=result" })
  result?: string;
}

export enum ApplyPolicyAllNodes200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ApplyPolicyAllNodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ApplyPolicyAllNodes200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data", elemType: operations.ApplyPolicyAllNodes200ApplicationJsonData })
  data: ApplyPolicyAllNodes200ApplicationJsonData[];

  @Metadata({ data: "json, name=result" })
  result: ApplyPolicyAllNodes200ApplicationJsonResultEnum;
}


export class ApplyPolicyAllNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  applyPolicyAllNodes200ApplicationJsonObject?: ApplyPolicyAllNodes200ApplicationJson;
}
