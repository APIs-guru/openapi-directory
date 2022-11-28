import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FolderMenuItem } from "./foldermenuitem";



// FolderMenuConfiguration
/** 
 * Container Class for the Web API representing a folder menu and it's items
**/
export class FolderMenuConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BrowserTimeZoneName" })
  browserTimeZoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=BrowserUtcTime" })
  browserUtcTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: FolderMenuItem })
  items?: FolderMenuItem[];
}
