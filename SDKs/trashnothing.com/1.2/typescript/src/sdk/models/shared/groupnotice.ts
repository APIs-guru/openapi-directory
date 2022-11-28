import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupNotice
/** 
 * Group notices are created by group moderators in order to provide useful information to the group members (eg. group rules and guidelines).
**/
export class GroupNotice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=notice_id" })
  noticeId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
