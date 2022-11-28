import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WrittenQuestionItem } from "./writtenquestionitem";
import { Link } from "./link";



export class WrittenQuestionMembersServiceSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: WrittenQuestionItem })
  items?: WrittenQuestionItem[];

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
