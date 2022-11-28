import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCurrentUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=about_me" })
  aboutMe?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=digest_photos" })
  digestPhotos?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=last_listings_view" })
  lastListingsView?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=old_password" })
  oldPassword?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=post_reminders" })
  postReminders?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=profile_image_source" })
  profileImageSource?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=public_name" })
  publicName?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=public_post_sources" })
  publicPostSources?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=show_all_group_posts" })
  showAllGroupPosts?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=special_notices" })
  specialNotices?: number;
}


export class UpdateCurrentUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateCurrentUserRequestBody;
}


export class UpdateCurrentUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  currentUser?: shared.CurrentUser;

  @SpeakeasyMetadata()
  statusCode: number;
}
