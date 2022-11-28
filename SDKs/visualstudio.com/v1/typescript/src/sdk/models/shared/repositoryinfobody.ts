import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RepositoryInfoBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName?: string;

  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prebuildHash" })
  prebuildHash?: string;

  @SpeakeasyMetadata({ data: "json, name=repoId" })
  repoId?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
