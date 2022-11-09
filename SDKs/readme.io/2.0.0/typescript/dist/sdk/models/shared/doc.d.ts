import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DocTypeEnum {
    Basic = "basic",
    Error = "error",
    Link = "link"
}
export declare class Doc extends SpeakeasyBase {
    body?: string;
    category: string;
    hidden?: boolean;
    parentDoc?: string;
    title: string;
    type?: DocTypeEnum;
}
