import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DebateContribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerCount" })
  answerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=debateId" })
  debateId?: number;

  @SpeakeasyMetadata({ data: "json, name=debateTitle" })
  debateTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=debateWebsiteId" })
  debateWebsiteId?: string;

  @SpeakeasyMetadata({ data: "json, name=firstTimecode" })
  firstTimecode?: Date;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: string;

  @SpeakeasyMetadata({ data: "json, name=interventionCount" })
  interventionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=pointsOfOrderCount" })
  pointsOfOrderCount?: number;

  @SpeakeasyMetadata({ data: "json, name=questionCount" })
  questionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: string;

  @SpeakeasyMetadata({ data: "json, name=sittingDate" })
  sittingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=speechCount" })
  speechCount?: number;

  @SpeakeasyMetadata({ data: "json, name=statementsCount" })
  statementsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=supplementaryQuestionCount" })
  supplementaryQuestionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalContributions" })
  totalContributions?: number;
}
