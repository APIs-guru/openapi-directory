import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CloudEnvironmentFolderBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=recentFolderPaths" })
  recentFolderPaths?: string[];
}
