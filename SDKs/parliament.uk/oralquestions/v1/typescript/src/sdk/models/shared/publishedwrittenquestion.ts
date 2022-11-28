import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberForDate } from "./memberfordate";


export enum PublishedWrittenQuestionQuestionTypeEnum {
    NamedDay = "NamedDay",
    Ordinary = "Ordinary"
}


export class PublishedWrittenQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=AnsweredWhen" })
  answeredWhen?: Date;

  @SpeakeasyMetadata({ data: "json, name=AnsweringBody" })
  answeringBody?: string;

  @SpeakeasyMetadata({ data: "json, name=AnsweringBodyId" })
  answeringBodyId?: number;

  @SpeakeasyMetadata({ data: "json, name=AnsweringMinister" })
  answeringMinister?: MemberForDate;

  @SpeakeasyMetadata({ data: "json, name=AnsweringMinisterId" })
  answeringMinisterId?: number;

  @SpeakeasyMetadata({ data: "json, name=AnsweringMinisterTitle" })
  answeringMinisterTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=AskingMember" })
  askingMember?: MemberForDate;

  @SpeakeasyMetadata({ data: "json, name=AskingMemberId" })
  askingMemberId?: number;

  @SpeakeasyMetadata({ data: "json, name=DueForAnswer" })
  dueForAnswer?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=QuestionText" })
  questionText?: string;

  @SpeakeasyMetadata({ data: "json, name=QuestionType" })
  questionType?: PublishedWrittenQuestionQuestionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TabledWhen" })
  tabledWhen?: Date;

  @SpeakeasyMetadata({ data: "json, name=UIN" })
  uin?: number;
}
