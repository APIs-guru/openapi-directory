import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentViewModel } from "./attachmentviewmodel";
import { HouseEnumEnum } from "./houseenumenum";
import { LinkedStatements } from "./linkedstatements";
import { MemberViewModel } from "./memberviewmodel";
export declare class StatementsViewModel extends SpeakeasyBase {
    answeringBodyId?: number;
    answeringBodyName?: string;
    attachments?: AttachmentViewModel[];
    dateMade?: Date;
    hasAttachments?: boolean;
    hasLinkedStatements?: boolean;
    house?: HouseEnumEnum;
    id?: number;
    linkedStatements?: LinkedStatements[];
    member?: MemberViewModel;
    memberId?: number;
    memberRole?: string;
    noticeNumber?: number;
    text?: string;
    title?: string;
    uin?: string;
}
