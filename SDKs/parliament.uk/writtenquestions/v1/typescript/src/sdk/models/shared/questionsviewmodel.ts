import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberViewModel } from "./memberviewmodel";
import { AttachmentViewModel } from "./attachmentviewmodel";
import { GroupedQuestionViewModel } from "./groupedquestionviewmodel";
import { HouseEnumEnum } from "./houseenumenum";



export class QuestionsViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerIsCorrection" })
  answerIsCorrection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answerIsHolding" })
  answerIsHolding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answerText" })
  answerText?: string;

  @SpeakeasyMetadata({ data: "json, name=answeringBodyId" })
  answeringBodyId?: number;

  @SpeakeasyMetadata({ data: "json, name=answeringBodyName" })
  answeringBodyName?: string;

  @SpeakeasyMetadata({ data: "json, name=answeringMember" })
  answeringMember?: MemberViewModel;

  @SpeakeasyMetadata({ data: "json, name=answeringMemberId" })
  answeringMemberId?: number;

  @SpeakeasyMetadata({ data: "json, name=askingMember" })
  askingMember?: MemberViewModel;

  @SpeakeasyMetadata({ data: "json, name=askingMemberId" })
  askingMemberId?: number;

  @SpeakeasyMetadata({ data: "json, name=attachmentCount" })
  attachmentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: AttachmentViewModel })
  attachments?: AttachmentViewModel[];

  @SpeakeasyMetadata({ data: "json, name=comparableAnswerText" })
  comparableAnswerText?: string;

  @SpeakeasyMetadata({ data: "json, name=correctingMember" })
  correctingMember?: MemberViewModel;

  @SpeakeasyMetadata({ data: "json, name=correctingMemberId" })
  correctingMemberId?: number;

  @SpeakeasyMetadata({ data: "json, name=dateAnswerCorrected" })
  dateAnswerCorrected?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateAnswered" })
  dateAnswered?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateForAnswer" })
  dateForAnswer?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateHoldingAnswer" })
  dateHoldingAnswer?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateTabled" })
  dateTabled?: Date;

  @SpeakeasyMetadata({ data: "json, name=groupedQuestions" })
  groupedQuestions?: string[];

  @SpeakeasyMetadata({ data: "json, name=groupedQuestionsDates", elemType: GroupedQuestionViewModel })
  groupedQuestionsDates?: GroupedQuestionViewModel[];

  @SpeakeasyMetadata({ data: "json, name=heading" })
  heading?: string;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: HouseEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isNamedDay" })
  isNamedDay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isWithdrawn" })
  isWithdrawn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=memberHasInterest" })
  memberHasInterest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=originalAnswerText" })
  originalAnswerText?: string;

  @SpeakeasyMetadata({ data: "json, name=questionText" })
  questionText?: string;

  @SpeakeasyMetadata({ data: "json, name=uin" })
  uin?: string;
}
