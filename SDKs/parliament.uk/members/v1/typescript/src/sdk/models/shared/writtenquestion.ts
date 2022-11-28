import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnsweringBody } from "./answeringbody";
import { Member } from "./member";
import { GroupedQuestion } from "./groupedquestion";



export class WrittenQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerIsCorrection" })
  answerIsCorrection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answerIsHolding" })
  answerIsHolding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answerText" })
  answerText?: string;

  @SpeakeasyMetadata({ data: "json, name=answeringBody" })
  answeringBody?: AnsweringBody;

  @SpeakeasyMetadata({ data: "json, name=answeringBodyId" })
  answeringBodyId?: number;

  @SpeakeasyMetadata({ data: "json, name=answeringMember" })
  answeringMember?: Member;

  @SpeakeasyMetadata({ data: "json, name=answeringMemberId" })
  answeringMemberId?: number;

  @SpeakeasyMetadata({ data: "json, name=askingMemberId" })
  askingMemberId?: number;

  @SpeakeasyMetadata({ data: "json, name=attachmentCount" })
  attachmentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=correctingMember" })
  correctingMember?: Member;

  @SpeakeasyMetadata({ data: "json, name=correctingMemberId" })
  correctingMemberId?: number;

  @SpeakeasyMetadata({ data: "json, name=dateAnswered" })
  dateAnswered?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateForAnswer" })
  dateForAnswer?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateTabled" })
  dateTabled?: Date;

  @SpeakeasyMetadata({ data: "json, name=groupedQuestions" })
  groupedQuestions?: string[];

  @SpeakeasyMetadata({ data: "json, name=groupedQuestionsDates", elemType: GroupedQuestion })
  groupedQuestionsDates?: GroupedQuestion[];

  @SpeakeasyMetadata({ data: "json, name=heading" })
  heading?: string;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isNamedDay" })
  isNamedDay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isWithdrawn" })
  isWithdrawn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=memberHasInterest" })
  memberHasInterest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=questionText" })
  questionText?: string;

  @SpeakeasyMetadata({ data: "json, name=uin" })
  uin?: string;
}
