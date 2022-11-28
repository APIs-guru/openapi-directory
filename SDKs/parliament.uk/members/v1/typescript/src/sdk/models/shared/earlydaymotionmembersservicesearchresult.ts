import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EarlyDayMotionItem } from "./earlydaymotionitem";
import { Link } from "./link";



export class EarlyDayMotionMembersServiceSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: EarlyDayMotionItem })
  items?: EarlyDayMotionItem[];

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
