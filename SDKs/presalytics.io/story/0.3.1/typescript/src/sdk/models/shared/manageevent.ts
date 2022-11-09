import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ManageEventActionEnum {
    Create = "create"
,    Fire = "fire"
,    Change = "change"
,    Delete = "delete"
}


export class ManageEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: ManageEventActionEnum;

  @Metadata({ data: "json, name=action_params" })
  actionParams?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
