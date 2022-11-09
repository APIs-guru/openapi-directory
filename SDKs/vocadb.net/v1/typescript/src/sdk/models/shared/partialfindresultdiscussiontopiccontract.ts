import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DiscussionTopicContract } from "./discussiontopiccontract";


export class PartialFindResultDiscussionTopicContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.DiscussionTopicContract })
  items?: DiscussionTopicContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
