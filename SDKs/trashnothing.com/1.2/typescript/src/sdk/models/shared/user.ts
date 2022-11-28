import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percent_positive" })
  percentPositive?: number;

  @SpeakeasyMetadata({ data: "json, name=restriction" })
  restriction?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}


export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about_me" })
  aboutMe?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: UserFeedback;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=member_since" })
  memberSince?: string;

  @SpeakeasyMetadata({ data: "json, name=profile_image" })
  profileImage?: string;

  @SpeakeasyMetadata({ data: "json, name=reply_time" })
  replyTime?: number;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
