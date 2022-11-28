import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CurrentUserEmail
/** 
 * Data related to the users' email address.
**/
export class CurrentUserEmail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=bouncing" })
  bouncing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spam_stop" })
  spamStop?: boolean;
}


export class CurrentUserFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percent_positive" })
  percentPositive?: number;

  @SpeakeasyMetadata({ data: "json, name=restriction" })
  restriction?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}


// CurrentUserLocation
/** 
 * The users' location.  The location is used to determine which posts are shown to the user (may be null).
**/
export class CurrentUserLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=radius" })
  radius?: number;
}


// CurrentUserPostLocation
/** 
 * Location data used by the user the last time they posted.
**/
export class CurrentUserPostLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CurrentUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about_me" })
  aboutMe?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "json, name=digest_photos" })
  digestPhotos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: CurrentUserEmail;

  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: CurrentUserFeedback;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=has_password" })
  hasPassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_listings_view" })
  lastListingsView?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: CurrentUserLocation;

  @SpeakeasyMetadata({ data: "json, name=member_since" })
  memberSince?: string;

  @SpeakeasyMetadata({ data: "json, name=post_location" })
  postLocation?: CurrentUserPostLocation;

  @SpeakeasyMetadata({ data: "json, name=post_reminders" })
  postReminders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=profile_image" })
  profileImage?: string;

  @SpeakeasyMetadata({ data: "json, name=profile_image_source" })
  profileImageSource?: string;

  @SpeakeasyMetadata({ data: "json, name=public_name" })
  publicName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_post_sources" })
  publicPostSources?: string[];

  @SpeakeasyMetadata({ data: "json, name=reply_time" })
  replyTime?: number;

  @SpeakeasyMetadata({ data: "json, name=show_all_group_posts" })
  showAllGroupPosts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=signup" })
  signup?: Date;

  @SpeakeasyMetadata({ data: "json, name=special_notices" })
  specialNotices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=uses_fair_offer_policy" })
  usesFairOfferPolicy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}
