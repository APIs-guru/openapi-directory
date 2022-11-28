import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { WrittenQuestion } from "./writtenquestion";



export class WrittenQuestionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: WrittenQuestion;
}
