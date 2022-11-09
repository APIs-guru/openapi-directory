import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ManageEventActionEnum {
    Create = "create",
    Fire = "fire",
    Change = "change",
    Delete = "delete"
}
export declare class ManageEvent extends SpeakeasyBase {
    action?: ManageEventActionEnum;
    actionParams?: Map<string, any>;
    name?: string;
}
