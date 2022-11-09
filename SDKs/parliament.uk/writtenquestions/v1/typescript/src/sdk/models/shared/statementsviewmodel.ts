import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachmentViewModel } from "./attachmentviewmodel";
import { HouseEnumEnum } from "./houseenumenum";
import { LinkedStatements } from "./linkedstatements";
import { MemberViewModel } from "./memberviewmodel";


export class StatementsViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=answeringBodyId" })
  answeringBodyId?: number;

  @Metadata({ data: "json, name=answeringBodyName" })
  answeringBodyName?: string;

  @Metadata({ data: "json, name=attachments", elemType: shared.AttachmentViewModel })
  attachments?: AttachmentViewModel[];

  @Metadata({ data: "json, name=dateMade" })
  dateMade?: Date;

  @Metadata({ data: "json, name=hasAttachments" })
  hasAttachments?: boolean;

  @Metadata({ data: "json, name=hasLinkedStatements" })
  hasLinkedStatements?: boolean;

  @Metadata({ data: "json, name=house" })
  house?: HouseEnumEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=linkedStatements", elemType: shared.LinkedStatements })
  linkedStatements?: LinkedStatements[];

  @Metadata({ data: "json, name=member" })
  member?: MemberViewModel;

  @Metadata({ data: "json, name=memberId" })
  memberId?: number;

  @Metadata({ data: "json, name=memberRole" })
  memberRole?: string;

  @Metadata({ data: "json, name=noticeNumber" })
  noticeNumber?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=uin" })
  uin?: string;
}
