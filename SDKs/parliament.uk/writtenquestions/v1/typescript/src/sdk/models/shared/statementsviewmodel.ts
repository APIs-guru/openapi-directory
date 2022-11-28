import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentViewModel } from "./attachmentviewmodel";
import { HouseEnumEnum } from "./houseenumenum";
import { LinkedStatements } from "./linkedstatements";
import { MemberViewModel } from "./memberviewmodel";



export class StatementsViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answeringBodyId" })
  answeringBodyId?: number;

  @SpeakeasyMetadata({ data: "json, name=answeringBodyName" })
  answeringBodyName?: string;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: AttachmentViewModel })
  attachments?: AttachmentViewModel[];

  @SpeakeasyMetadata({ data: "json, name=dateMade" })
  dateMade?: Date;

  @SpeakeasyMetadata({ data: "json, name=hasAttachments" })
  hasAttachments?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasLinkedStatements" })
  hasLinkedStatements?: boolean;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: HouseEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=linkedStatements", elemType: LinkedStatements })
  linkedStatements?: LinkedStatements[];

  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: MemberViewModel;

  @SpeakeasyMetadata({ data: "json, name=memberId" })
  memberId?: number;

  @SpeakeasyMetadata({ data: "json, name=memberRole" })
  memberRole?: string;

  @SpeakeasyMetadata({ data: "json, name=noticeNumber" })
  noticeNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=uin" })
  uin?: string;
}
