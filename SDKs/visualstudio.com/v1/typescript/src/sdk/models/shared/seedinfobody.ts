import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitConfigOptionsBody } from "./gitconfigoptionsbody";
import { RepositoryInfoBody } from "./repositoryinfobody";



export class SeedInfoBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gitConfig" })
  gitConfig?: GitConfigOptionsBody;

  @SpeakeasyMetadata({ data: "json, name=recurseClone" })
  recurseClone?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: RepositoryInfoBody;

  @SpeakeasyMetadata({ data: "json, name=seedMoniker" })
  seedMoniker?: string;

  @SpeakeasyMetadata({ data: "json, name=seedType" })
  seedType?: string;
}
