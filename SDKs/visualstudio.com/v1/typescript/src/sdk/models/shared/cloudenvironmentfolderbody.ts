import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CloudEnvironmentFolderBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recentFolderPaths" })
  recentFolderPaths?: string[];
}
