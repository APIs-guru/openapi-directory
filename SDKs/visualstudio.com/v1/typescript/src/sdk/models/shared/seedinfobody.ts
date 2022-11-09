import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GitConfigOptionsBody } from "./gitconfigoptionsbody";
import { RepositoryInfoBody } from "./repositoryinfobody";


export class SeedInfoBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=gitConfig" })
  gitConfig?: GitConfigOptionsBody;

  @Metadata({ data: "json, name=recurseClone" })
  recurseClone?: boolean;

  @Metadata({ data: "json, name=repository" })
  repository?: RepositoryInfoBody;

  @Metadata({ data: "json, name=seedMoniker" })
  seedMoniker?: string;

  @Metadata({ data: "json, name=seedType" })
  seedType?: string;
}
