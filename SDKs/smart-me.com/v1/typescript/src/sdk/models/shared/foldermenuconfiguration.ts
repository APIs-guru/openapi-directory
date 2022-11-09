import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FolderMenuItem } from "./foldermenuitem";


// FolderMenuConfiguration
/** 
 * Container Class for the Web API representing a folder menu and it's items
**/
export class FolderMenuConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BrowserTimeZoneName" })
  browserTimeZoneName?: string;

  @Metadata({ data: "json, name=BrowserUtcTime" })
  browserUtcTime?: string;

  @Metadata({ data: "json, name=Items", elemType: shared.FolderMenuItem })
  items?: FolderMenuItem[];
}
