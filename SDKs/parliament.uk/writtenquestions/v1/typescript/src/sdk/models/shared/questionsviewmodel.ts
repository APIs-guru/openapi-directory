import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberViewModel } from "./memberviewmodel";
import { MemberViewModel } from "./memberviewmodel";
import { AttachmentViewModel } from "./attachmentviewmodel";
import { MemberViewModel } from "./memberviewmodel";
import { GroupedQuestionViewModel } from "./groupedquestionviewmodel";
import { HouseEnumEnum } from "./houseenumenum";


export class QuestionsViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerIsCorrection" })
  answerIsCorrection?: boolean;

  @Metadata({ data: "json, name=answerIsHolding" })
  answerIsHolding?: boolean;

  @Metadata({ data: "json, name=answerText" })
  answerText?: string;

  @Metadata({ data: "json, name=answeringBodyId" })
  answeringBodyId?: number;

  @Metadata({ data: "json, name=answeringBodyName" })
  answeringBodyName?: string;

  @Metadata({ data: "json, name=answeringMember" })
  answeringMember?: MemberViewModel;

  @Metadata({ data: "json, name=answeringMemberId" })
  answeringMemberId?: number;

  @Metadata({ data: "json, name=askingMember" })
  askingMember?: MemberViewModel;

  @Metadata({ data: "json, name=askingMemberId" })
  askingMemberId?: number;

  @Metadata({ data: "json, name=attachmentCount" })
  attachmentCount?: number;

  @Metadata({ data: "json, name=attachments", elemType: shared.AttachmentViewModel })
  attachments?: AttachmentViewModel[];

  @Metadata({ data: "json, name=comparableAnswerText" })
  comparableAnswerText?: string;

  @Metadata({ data: "json, name=correctingMember" })
  correctingMember?: MemberViewModel;

  @Metadata({ data: "json, name=correctingMemberId" })
  correctingMemberId?: number;

  @Metadata({ data: "json, name=dateAnswerCorrected" })
  dateAnswerCorrected?: Date;

  @Metadata({ data: "json, name=dateAnswered" })
  dateAnswered?: Date;

  @Metadata({ data: "json, name=dateForAnswer" })
  dateForAnswer?: Date;

  @Metadata({ data: "json, name=dateHoldingAnswer" })
  dateHoldingAnswer?: Date;

  @Metadata({ data: "json, name=dateTabled" })
  dateTabled?: Date;

  @Metadata({ data: "json, name=groupedQuestions" })
  groupedQuestions?: string[];

  @Metadata({ data: "json, name=groupedQuestionsDates", elemType: shared.GroupedQuestionViewModel })
  groupedQuestionsDates?: GroupedQuestionViewModel[];

  @Metadata({ data: "json, name=heading" })
  heading?: string;

  @Metadata({ data: "json, name=house" })
  house?: HouseEnumEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isNamedDay" })
  isNamedDay?: boolean;

  @Metadata({ data: "json, name=isWithdrawn" })
  isWithdrawn?: boolean;

  @Metadata({ data: "json, name=memberHasInterest" })
  memberHasInterest?: boolean;

  @Metadata({ data: "json, name=originalAnswerText" })
  originalAnswerText?: string;

  @Metadata({ data: "json, name=questionText" })
  questionText?: string;

  @Metadata({ data: "json, name=uin" })
  uin?: string;
}
