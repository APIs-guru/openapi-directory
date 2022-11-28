import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Events extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  eventType?: string;

  @SpeakeasyMetadata()
  excerpt?: string;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  theIdOfTheObjectAnswerCommentQuestionOrUserTheEventDescribes?: number;
}
