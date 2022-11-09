import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EarlyDayMotionItem } from "./earlydaymotionitem";
import { Link } from "./link";


export class EarlyDayMotionMembersServiceSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.EarlyDayMotionItem })
  items?: EarlyDayMotionItem[];

  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=resultContext" })
  resultContext?: string;

  @Metadata({ data: "json, name=skip" })
  skip?: number;

  @Metadata({ data: "json, name=take" })
  take?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
