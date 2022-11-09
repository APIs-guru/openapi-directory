import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupNotice
/** 
 * Group notices are created by group moderators in order to provide useful information to the group members (eg. group rules and guidelines).
**/
export class GroupNotice extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=group_id" })
  groupId?: string;

  @Metadata({ data: "json, name=notice_id" })
  noticeId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
