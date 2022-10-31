package shared

import (
"time")

type CurrentUserEmail struct {
    Address *string `json:"address,omitempty"`
    Bouncing *bool `json:"bouncing,omitempty"`
    SpamStop *bool `json:"spam_stop,omitempty"`
    
}

type CurrentUserFeedback struct {
    PercentPositive *float64 `json:"percent_positive,omitempty"`
    Restriction *string `json:"restriction,omitempty"`
    Score *int64 `json:"score,omitempty"`
    
}

type CurrentUserLocation struct {
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    Name *string `json:"name,omitempty"`
    Radius *float64 `json:"radius,omitempty"`
    
}

type CurrentUserPostLocation struct {
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type CurrentUser struct {
    AboutMe *string `json:"about_me,omitempty"`
    Country *string `json:"country,omitempty"`
    Digest *string `json:"digest,omitempty"`
    DigestPhotos *bool `json:"digest_photos,omitempty"`
    Email *CurrentUserEmail `json:"email,omitempty"`
    Feedback *CurrentUserFeedback `json:"feedback,omitempty"`
    Firstname *string `json:"firstname,omitempty"`
    HasPassword *bool `json:"has_password,omitempty"`
    LastListingsView *time.Time `json:"last_listings_view,omitempty"`
    Lastname *string `json:"lastname,omitempty"`
    Location *CurrentUserLocation `json:"location,omitempty"`
    MemberSince *string `json:"member_since,omitempty"`
    PostLocation *CurrentUserPostLocation `json:"post_location,omitempty"`
    PostReminders *bool `json:"post_reminders,omitempty"`
    ProfileImage *string `json:"profile_image,omitempty"`
    ProfileImageSource *string `json:"profile_image_source,omitempty"`
    PublicName *bool `json:"public_name,omitempty"`
    PublicPostSources []string `json:"public_post_sources,omitempty"`
    ReplyTime *int64 `json:"reply_time,omitempty"`
    ShowAllGroupPosts *bool `json:"show_all_group_posts,omitempty"`
    Signup *time.Time `json:"signup,omitempty"`
    SpecialNotices *bool `json:"special_notices,omitempty"`
    UserID *string `json:"user_id,omitempty"`
    Username *string `json:"username,omitempty"`
    UsesFairOfferPolicy *bool `json:"uses_fair_offer_policy,omitempty"`
    Verified *bool `json:"verified,omitempty"`
    
}

