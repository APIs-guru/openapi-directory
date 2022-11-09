import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RepositoryInfoBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName?: string;

  @Metadata({ data: "json, name=commitId" })
  commitId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=prebuildHash" })
  prebuildHash?: string;

  @Metadata({ data: "json, name=repoId" })
  repoId?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
