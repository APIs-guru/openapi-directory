package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateCurrentUserRequestBody struct {
	AboutMe            *string    `multipartForm:"name=about_me"`
	Digest             *string    `multipartForm:"name=digest"`
	DigestPhotos       *int64     `multipartForm:"name=digest_photos"`
	Firstname          *string    `multipartForm:"name=firstname"`
	LastListingsView   *time.Time `multipartForm:"name=last_listings_view"`
	Lastname           *string    `multipartForm:"name=lastname"`
	OldPassword        *string    `multipartForm:"name=old_password"`
	Password           *string    `multipartForm:"name=password"`
	PostReminders      *int64     `multipartForm:"name=post_reminders"`
	ProfileImageSource *string    `multipartForm:"name=profile_image_source"`
	PublicName         *int64     `multipartForm:"name=public_name"`
	PublicPostSources  *string    `multipartForm:"name=public_post_sources"`
	ShowAllGroupPosts  *int64     `multipartForm:"name=show_all_group_posts"`
	SpecialNotices     *int64     `multipartForm:"name=special_notices"`
}

type UpdateCurrentUserRequest struct {
	Request *UpdateCurrentUserRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdateCurrentUserResponse struct {
	ContentType string
	CurrentUser *shared.CurrentUser
	StatusCode  int64
}
