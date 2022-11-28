import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DebateContributionItem } from "./debatecontributionitem";
import { Link } from "./link";



export class DebateContributionMembersServiceSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: DebateContributionItem })
  items?: DebateContributionItem[];

  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=resultContext" })
  resultContext?: string;

  @SpeakeasyMetadata({ data: "json, name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "json, name=take" })
  take?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
