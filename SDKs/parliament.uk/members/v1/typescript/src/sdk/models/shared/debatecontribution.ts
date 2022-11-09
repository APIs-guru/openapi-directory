import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DebateContribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerCount" })
  answerCount?: number;

  @Metadata({ data: "json, name=debateId" })
  debateId?: number;

  @Metadata({ data: "json, name=debateTitle" })
  debateTitle?: string;

  @Metadata({ data: "json, name=debateWebsiteId" })
  debateWebsiteId?: string;

  @Metadata({ data: "json, name=firstTimecode" })
  firstTimecode?: Date;

  @Metadata({ data: "json, name=house" })
  house?: string;

  @Metadata({ data: "json, name=interventionCount" })
  interventionCount?: number;

  @Metadata({ data: "json, name=pointsOfOrderCount" })
  pointsOfOrderCount?: number;

  @Metadata({ data: "json, name=questionCount" })
  questionCount?: number;

  @Metadata({ data: "json, name=section" })
  section?: string;

  @Metadata({ data: "json, name=sittingDate" })
  sittingDate?: Date;

  @Metadata({ data: "json, name=speechCount" })
  speechCount?: number;

  @Metadata({ data: "json, name=statementsCount" })
  statementsCount?: number;

  @Metadata({ data: "json, name=supplementaryQuestionCount" })
  supplementaryQuestionCount?: number;

  @Metadata({ data: "json, name=totalContributions" })
  totalContributions?: number;
}
