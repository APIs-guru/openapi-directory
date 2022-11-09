import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberForDate } from "./memberfordate";
import { MemberForDate } from "./memberfordate";

export enum PublishedWrittenQuestionQuestionTypeEnum {
    NamedDay = "NamedDay"
,    Ordinary = "Ordinary"
}


export class PublishedWrittenQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Answer" })
  answer?: string;

  @Metadata({ data: "json, name=AnsweredWhen" })
  answeredWhen?: Date;

  @Metadata({ data: "json, name=AnsweringBody" })
  answeringBody?: string;

  @Metadata({ data: "json, name=AnsweringBodyId" })
  answeringBodyId?: number;

  @Metadata({ data: "json, name=AnsweringMinister" })
  answeringMinister?: MemberForDate;

  @Metadata({ data: "json, name=AnsweringMinisterId" })
  answeringMinisterId?: number;

  @Metadata({ data: "json, name=AnsweringMinisterTitle" })
  answeringMinisterTitle?: string;

  @Metadata({ data: "json, name=AskingMember" })
  askingMember?: MemberForDate;

  @Metadata({ data: "json, name=AskingMemberId" })
  askingMemberId?: number;

  @Metadata({ data: "json, name=DueForAnswer" })
  dueForAnswer?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=QuestionText" })
  questionText?: string;

  @Metadata({ data: "json, name=QuestionType" })
  questionType?: PublishedWrittenQuestionQuestionTypeEnum;

  @Metadata({ data: "json, name=TabledWhen" })
  tabledWhen?: Date;

  @Metadata({ data: "json, name=UIN" })
  uin?: number;
}
