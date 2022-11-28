import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConstituencyItem } from "./constituencyitem";
import { Link } from "./link";



export class ConstituencyMembersServiceSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ConstituencyItem })
  items?: ConstituencyItem[];

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
