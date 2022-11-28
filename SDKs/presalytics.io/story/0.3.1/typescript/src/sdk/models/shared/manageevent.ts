import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ManageEventActionEnum {
    Create = "create",
    Fire = "fire",
    Change = "change",
    Delete = "delete"
}


export class ManageEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ManageEventActionEnum;

  @SpeakeasyMetadata({ data: "json, name=action_params" })
  actionParams?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
