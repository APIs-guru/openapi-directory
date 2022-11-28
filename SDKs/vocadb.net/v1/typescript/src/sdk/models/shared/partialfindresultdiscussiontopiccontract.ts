import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiscussionTopicContract } from "./discussiontopiccontract";



export class PartialFindResultDiscussionTopicContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: DiscussionTopicContract })
  items?: DiscussionTopicContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
