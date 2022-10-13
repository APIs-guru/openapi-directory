package shared

import (
	"time"
)

type CurrentUserEmail struct {
	Address  *string `json:"address"`
	Bouncing *bool   `json:"bouncing"`
	SpamStop *bool   `json:"spam_stop"`
}

type CurrentUserFeedback struct {
	PercentPositive *float64 `json:"percent_positive"`
	Restriction     *string  `json:"restriction"`
	Score           *int64   `json:"score"`
}

type CurrentUserLocation struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
	Name      *string  `json:"name"`
	Radius    *float64 `json:"radius"`
}

type CurrentUserPostLocation struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
	Name      *string  `json:"name"`
}

type CurrentUser struct {
	AboutMe             *string                  `json:"about_me"`
	Country             *string                  `json:"country"`
	Digest              *string                  `json:"digest"`
	DigestPhotos        *bool                    `json:"digest_photos"`
	Email               *CurrentUserEmail        `json:"email"`
	Feedback            *CurrentUserFeedback     `json:"feedback"`
	Firstname           *string                  `json:"firstname"`
	HasPassword         *bool                    `json:"has_password"`
	LastListingsView    *time.Time               `json:"last_listings_view"`
	Lastname            *string                  `json:"lastname"`
	Location            *CurrentUserLocation     `json:"location"`
	MemberSince         *string                  `json:"member_since"`
	PostLocation        *CurrentUserPostLocation `json:"post_location"`
	PostReminders       *bool                    `json:"post_reminders"`
	ProfileImage        *string                  `json:"profile_image"`
	ProfileImageSource  *string                  `json:"profile_image_source"`
	PublicName          *bool                    `json:"public_name"`
	PublicPostSources   []string                 `json:"public_post_sources"`
	ReplyTime           *int64                   `json:"reply_time"`
	ShowAllGroupPosts   *bool                    `json:"show_all_group_posts"`
	Signup              *time.Time               `json:"signup"`
	SpecialNotices      *bool                    `json:"special_notices"`
	UserID              *string                  `json:"user_id"`
	Username            *string                  `json:"username"`
	UsesFairOfferPolicy *bool                    `json:"uses_fair_offer_policy"`
	Verified            *bool                    `json:"verified"`
}
