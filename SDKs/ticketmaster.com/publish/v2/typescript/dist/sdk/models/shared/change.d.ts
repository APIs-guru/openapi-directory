import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChangeOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace",
    Move = "move",
    Copy = "copy",
    Test = "test"
}
/**
 * This class defines the Changes on the Publish API
**/
export declare class Change extends SpeakeasyBase {
    from?: string;
    op: ChangeOpEnum;
    path: string;
    value?: Map<string, any>;
}
