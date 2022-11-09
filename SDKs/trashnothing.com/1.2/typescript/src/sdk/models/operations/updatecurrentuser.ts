import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCurrentUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=about_me" })
  aboutMe?: string;

  @Metadata({ data: "multipart_form, name=digest" })
  digest?: string;

  @Metadata({ data: "multipart_form, name=digest_photos" })
  digestPhotos?: number;

  @Metadata({ data: "multipart_form, name=firstname" })
  firstname?: string;

  @Metadata({ data: "multipart_form, name=last_listings_view" })
  lastListingsView?: Date;

  @Metadata({ data: "multipart_form, name=lastname" })
  lastname?: string;

  @Metadata({ data: "multipart_form, name=old_password" })
  oldPassword?: string;

  @Metadata({ data: "multipart_form, name=password" })
  password?: string;

  @Metadata({ data: "multipart_form, name=post_reminders" })
  postReminders?: number;

  @Metadata({ data: "multipart_form, name=profile_image_source" })
  profileImageSource?: string;

  @Metadata({ data: "multipart_form, name=public_name" })
  publicName?: number;

  @Metadata({ data: "multipart_form, name=public_post_sources" })
  publicPostSources?: string;

  @Metadata({ data: "multipart_form, name=show_all_group_posts" })
  showAllGroupPosts?: number;

  @Metadata({ data: "multipart_form, name=special_notices" })
  specialNotices?: number;
}


export class UpdateCurrentUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateCurrentUserRequestBody;
}


export class UpdateCurrentUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  currentUser?: shared.CurrentUser;

  @Metadata()
  statusCode: number;
}
