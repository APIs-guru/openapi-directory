import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { DebateContribution } from "./debatecontribution";



export class DebateContributionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: DebateContribution;
}
