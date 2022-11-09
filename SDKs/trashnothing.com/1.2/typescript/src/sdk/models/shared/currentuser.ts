import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CurrentUserEmail
/** 
 * Data related to the users' email address.
**/
export class CurrentUserEmail extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=bouncing" })
  bouncing?: boolean;

  @Metadata({ data: "json, name=spam_stop" })
  spamStop?: boolean;
}


export class CurrentUserFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=percent_positive" })
  percentPositive?: number;

  @Metadata({ data: "json, name=restriction" })
  restriction?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;
}


// CurrentUserLocation
/** 
 * The users' location.  The location is used to determine which posts are shown to the user (may be null).
**/
export class CurrentUserLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=radius" })
  radius?: number;
}


// CurrentUserPostLocation
/** 
 * Location data used by the user the last time they posted.
**/
export class CurrentUserPostLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CurrentUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=about_me" })
  aboutMe?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=digest" })
  digest?: string;

  @Metadata({ data: "json, name=digest_photos" })
  digestPhotos?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: CurrentUserEmail;

  @Metadata({ data: "json, name=feedback" })
  feedback?: CurrentUserFeedback;

  @Metadata({ data: "json, name=firstname" })
  firstname?: string;

  @Metadata({ data: "json, name=has_password" })
  hasPassword?: boolean;

  @Metadata({ data: "json, name=last_listings_view" })
  lastListingsView?: Date;

  @Metadata({ data: "json, name=lastname" })
  lastname?: string;

  @Metadata({ data: "json, name=location" })
  location?: CurrentUserLocation;

  @Metadata({ data: "json, name=member_since" })
  memberSince?: string;

  @Metadata({ data: "json, name=post_location" })
  postLocation?: CurrentUserPostLocation;

  @Metadata({ data: "json, name=post_reminders" })
  postReminders?: boolean;

  @Metadata({ data: "json, name=profile_image" })
  profileImage?: string;

  @Metadata({ data: "json, name=profile_image_source" })
  profileImageSource?: string;

  @Metadata({ data: "json, name=public_name" })
  publicName?: boolean;

  @Metadata({ data: "json, name=public_post_sources" })
  publicPostSources?: string[];

  @Metadata({ data: "json, name=reply_time" })
  replyTime?: number;

  @Metadata({ data: "json, name=show_all_group_posts" })
  showAllGroupPosts?: boolean;

  @Metadata({ data: "json, name=signup" })
  signup?: Date;

  @Metadata({ data: "json, name=special_notices" })
  specialNotices?: boolean;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=uses_fair_offer_policy" })
  usesFairOfferPolicy?: boolean;

  @Metadata({ data: "json, name=verified" })
  verified?: boolean;
}
