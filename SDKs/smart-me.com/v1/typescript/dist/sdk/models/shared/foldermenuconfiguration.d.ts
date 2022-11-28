import { SpeakeasyBase } from "../../../internal/utils";
import { FolderMenuItem } from "./foldermenuitem";
/**
 * Container Class for the Web API representing a folder menu and it's items
**/
export declare class FolderMenuConfiguration extends SpeakeasyBase {
    browserTimeZoneName?: string;
    browserUtcTime?: string;
    items?: FolderMenuItem[];
}
