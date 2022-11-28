import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChangelogTypeEnum {
    Unknown = "",
    Added = "added",
    Fixed = "fixed",
    Improved = "improved",
    Deprecated = "deprecated",
    Removed = "removed"
}
export declare class Changelog extends SpeakeasyBase {
    body: string;
    hidden?: boolean;
    title: string;
    type?: ChangelogTypeEnum;
}
