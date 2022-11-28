import { SpeakeasyBase } from "../../../internal/utils";
import { MemberForDate } from "./memberfordate";
export declare enum PublishedWrittenQuestionQuestionTypeEnum {
    NamedDay = "NamedDay",
    Ordinary = "Ordinary"
}
export declare class PublishedWrittenQuestion extends SpeakeasyBase {
    answer?: string;
    answeredWhen?: Date;
    answeringBody?: string;
    answeringBodyId?: number;
    answeringMinister?: MemberForDate;
    answeringMinisterId?: number;
    answeringMinisterTitle?: string;
    askingMember?: MemberForDate;
    askingMemberId?: number;
    dueForAnswer?: Date;
    id?: number;
    questionText?: string;
    questionType?: PublishedWrittenQuestionQuestionTypeEnum;
    tabledWhen?: Date;
    uin?: number;
}
