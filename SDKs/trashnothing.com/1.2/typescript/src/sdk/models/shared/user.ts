import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=percent_positive" })
  percentPositive?: number;

  @Metadata({ data: "json, name=restriction" })
  restriction?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;
}


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=about_me" })
  aboutMe?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=feedback" })
  feedback?: UserFeedback;

  @Metadata({ data: "json, name=firstname" })
  firstname?: string;

  @Metadata({ data: "json, name=lastname" })
  lastname?: string;

  @Metadata({ data: "json, name=member_since" })
  memberSince?: string;

  @Metadata({ data: "json, name=profile_image" })
  profileImage?: string;

  @Metadata({ data: "json, name=reply_time" })
  replyTime?: number;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
