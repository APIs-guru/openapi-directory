import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnsweringBody } from "./answeringbody";
import { Member } from "./member";
import { Member } from "./member";
import { GroupedQuestion } from "./groupedquestion";


export class WrittenQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerIsCorrection" })
  answerIsCorrection?: boolean;

  @Metadata({ data: "json, name=answerIsHolding" })
  answerIsHolding?: boolean;

  @Metadata({ data: "json, name=answerText" })
  answerText?: string;

  @Metadata({ data: "json, name=answeringBody" })
  answeringBody?: AnsweringBody;

  @Metadata({ data: "json, name=answeringBodyId" })
  answeringBodyId?: number;

  @Metadata({ data: "json, name=answeringMember" })
  answeringMember?: Member;

  @Metadata({ data: "json, name=answeringMemberId" })
  answeringMemberId?: number;

  @Metadata({ data: "json, name=askingMemberId" })
  askingMemberId?: number;

  @Metadata({ data: "json, name=attachmentCount" })
  attachmentCount?: number;

  @Metadata({ data: "json, name=correctingMember" })
  correctingMember?: Member;

  @Metadata({ data: "json, name=correctingMemberId" })
  correctingMemberId?: number;

  @Metadata({ data: "json, name=dateAnswered" })
  dateAnswered?: Date;

  @Metadata({ data: "json, name=dateForAnswer" })
  dateForAnswer?: Date;

  @Metadata({ data: "json, name=dateTabled" })
  dateTabled?: Date;

  @Metadata({ data: "json, name=groupedQuestions" })
  groupedQuestions?: string[];

  @Metadata({ data: "json, name=groupedQuestionsDates", elemType: shared.GroupedQuestion })
  groupedQuestionsDates?: GroupedQuestion[];

  @Metadata({ data: "json, name=heading" })
  heading?: string;

  @Metadata({ data: "json, name=house" })
  house?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isNamedDay" })
  isNamedDay?: boolean;

  @Metadata({ data: "json, name=isWithdrawn" })
  isWithdrawn?: boolean;

  @Metadata({ data: "json, name=memberHasInterest" })
  memberHasInterest?: boolean;

  @Metadata({ data: "json, name=questionText" })
  questionText?: string;

  @Metadata({ data: "json, name=uin" })
  uin?: string;
}
