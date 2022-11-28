import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CheckStatusEnum {
    Critical = "Critical",
    Warning = "Warning",
    Ok = "Ok"
}
export declare class Check extends SpeakeasyBase {
    msg: string;
    name: string;
    status: CheckStatusEnum;
}
