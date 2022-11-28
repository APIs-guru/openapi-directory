import { SpeakeasyBase } from "../../../internal/utils";
import { GitConfigOptionsBody } from "./gitconfigoptionsbody";
import { RepositoryInfoBody } from "./repositoryinfobody";
export declare class SeedInfoBody extends SpeakeasyBase {
    gitConfig?: GitConfigOptionsBody;
    recurseClone?: boolean;
    repository?: RepositoryInfoBody;
    seedMoniker?: string;
    seedType?: string;
}
