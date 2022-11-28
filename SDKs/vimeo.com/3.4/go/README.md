# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetEndpointsRequest{
        QueryParams: operations.GetEndpointsQueryParams{
            Openapi: false,
        },
    }
    
    res, err := s.APIInformation.GetEndpoints(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Endpoint != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API Information

* `GetEndpoints` - Get an API specification

### Albums\Album videos

* `AddVideoToAlbum` - Add a specific video to an album
* `AddVideoToAlbumAlt1` - Add a specific video to an album
* `GetAlbumVideo` - Get a specific video in an album
* `GetAlbumVideoAlt1` - Get a specific video in an album
* `GetAlbumVideos` - Get all the videos in an album
* `GetAlbumVideosAlt1` - Get all the videos in an album
* `RemoveVideoFromAlbum` - Remove a video from an album
* `RemoveVideoFromAlbumAlt1` - Remove a video from an album
* `ReplaceVideosInAlbum` - Replace all the videos in an album
* `ReplaceVideosInAlbumAlt1` - Replace all the videos in an album
* `SetVideoAsAlbumThumbnail` - Set a video as the album thumbnail
* `SetVideoAsAlbumThumbnailAlt1` - Set a video as the album thumbnail

### Albums\Custom album logos

* `CreateAlbumLogo` - Add a custom album logo
* `DeleteAlbumLogo` - Remove a custom album logo
* `GetAlbumLogo` - Get a specific custom album logo
* `GetAlbumLogos` - Get all the custom logos of an album
* `ReplaceAlbumLogo` - Replace a custom album logo

### Albums\Custom album thumbnails

* `CreateAlbumCustomThumb` - Add a custom uploaded thumbnail
* `DeleteAlbumCustomThumbnail` - Remove a custom uploaded album thumbnail
* `GetAlbumCustomThumbnail` - Get a specific custom uploaded album thumbnail
* `GetAlbumCustomThumbs` - Get all the custom upload thumbnails of an album
* `ReplaceAlbumCustomThumb` - Replace a custom uploaded album thumbnail

### Albums\Essentials

* `CreateAlbum` - Create an album
* `CreateAlbumAlt1` - Create an album
* `DeleteAlbum` - Delete an album
* `DeleteAlbumAlt1` - Delete an album
* `EditAlbum` - Edit an album
* `EditAlbumAlt1` - Edit an album
* `GetAlbum` - Get a specific album
* `GetAlbumAlt1` - Get a specific album
* `GetAlbums` - Get all the albums that belong to a user
* `GetAlbumsAlt1` - Get all the albums that belong to a user

### Authentication Extras\Essentials

* `ClientAuth` - Authorize a client with OAuth
* `ConvertAccessToken` - Convert OAuth 1 access tokens to OAuth 2 access tokens
* `DeleteToken` - Revoke the current access token
* `ExchangeAuthCode` - Exchange an authorization code for an access token
* `VerifyToken` - Verify an OAuth 2 token

### Categories\Channels

* `GetCategoryChannels` - Get all the channels in a category

### Categories\Essentials

* `GetCategories` - Get all categories
* `GetCategory` - Get a specific category

### Categories\Groups

* `GetCategoryGroups` - Get all the groups in a category

### Categories\Subscriptions

* `CheckIfUserSubscribedToCategory` - Check if a user follows a category
* `CheckIfUserSubscribedToCategoryAlt1` - Check if a user follows a category
* `GetCategorySubscriptions` - Get all the categories that a user follows
* `GetCategorySubscriptionsAlt1` - Get all the categories that a user follows
* `SubscribeToCategory` - Subscribe a user to a single category
* `SubscribeToCategoryAlt1` - Subscribe a user to a single category
* `UnsubscribeFromCategory` - Unsubscribe a user from a category
* `UnsubscribeFromCategoryAlt1` - Unsubscribe a user from a category

### Categories\Videos

* `CheckCategoryForVideo` - Check for a video in a category
* `GetCategoryVideos` - Get all the videos in a category
* `GetVideoCategories` - Get all the categories to which a video belongs
* `SuggestVideoCategory` - Suggest categories for a video

### Channels\Categories

* `AddChannelCategories` - Add a list of categories to a channel
* `CategorizeChannel` - Categorize a channel
* `DeleteChannelCategory` - Remove a category from a channel
* `GetChannelCategories` - Get all the categories in a channel

### Channels\Essentials

* `CreateChannel` - Create a channel
* `DeleteChannel` - Delete a channel
* `EditChannel` - Edit a channel
* `GetChannel` - Get a specific channel
* `GetChannelSubscriptions` - Get all the channels to which a user subscribes
* `GetChannelSubscriptionsAlt1` - Get all the channels to which a user subscribes
* `GetChannels` - Get all channels

### Channels\Moderators

* `AddChannelModerator` - Add a specific channel moderator
* `AddChannelModerators` - Add a list of channel moderators
* `GetChannelModerator` - Get a specific channel moderator
* `GetChannelModerators` - Get all the moderators in a channel
* `RemoveChannelModerator` - Remove a specific channel moderator
* `RemoveChannelModerators` - Remove a list of channel moderators
* `ReplaceChannelModerators` - Replace the moderators of a channel

### Channels\Private channel members

* `DeleteChannelPrivacyUser` - Restrict a user from viewing a private channel
* `GetChannelPrivacyUsers` - Get all the users who can view a private channel
* `SetChannelPrivacyUser` - Permit a specific user to view a private channel
* `SetChannelPrivacyUsers` - Permit a list of users to view a private channel

### Channels\Subscriptions and subscribers

* `CheckIfUserSubscribedToChannel` - Check if a user follows a channel
* `CheckIfUserSubscribedToChannelAlt1` - Check if a user follows a channel
* `GetChannelSubscribers` - Get all the followers of a channel
* `SubscribeToChannel` - Subscribe a user to a specific channel
* `SubscribeToChannelAlt1` - Subscribe a user to a specific channel
* `UnsubscribeFromChannel` - Unsubscribe a user from a specific channel
* `UnsubscribeFromChannelAlt1` - Unsubscribe a user from a specific channel

### Channels\Tags

* `AddChannelTag` - Add a specific tag to a channel
* `AddTagsToChannel` - Add a list of tags to a channel
* `CheckIfChannelHasTag` - Check if a tag has been added to a channel
* `DeleteTagFromChannel` - Remove a tag from a channel
* `GetChannelTags` - Get all the tags that have been added to a channel

### Channels\Videos

* `AddVideoToChannel` - Add a specific video to a channel
* `AddVideosToChannel` - Add a list of videos to a channel
* `DeleteVideoFromChannel` - Remove a specific video from a channel
* `GetAvailableVideoChannels` - Get all the channels to which a user can add or remove a specific video
* `GetChannelVideo` - Get a specific video in a channel
* `GetChannelVideos` - Get all the videos in a channel
* `RemoveVideosFromChannel` - Remove a list of videos from a channel

### Embed Presets\Custom Logos

* `CreateCustomLogo` - Add a custom logo
* `CreateCustomLogoAlt1` - Add a custom logo
* `GetCustomLogo` - Get a specific custom logo
* `GetCustomLogoAlt1` - Get a specific custom logo
* `GetCustomLogos` - Get all the custom logos that belong to a user
* `GetCustomLogosAlt1` - Get all the custom logos that belong to a user

### Embed Presets\Essentials

* `EditEmbedPreset` - Edit an embed preset
* `EditEmbedPresetAlt1` - Edit an embed preset
* `GetEmbedPreset` - Get a specific embed preset
* `GetEmbedPresetAlt1` - Get a specific embed preset
* `GetEmbedPresets` - Get all the embed presets that a user has created
* `GetEmbedPresetsAlt1` - Get all the embed presets that a user has created

### Embed Presets\Videos

* `AddVideoEmbedPreset` - Add an embed preset to a video
* `CreateVideoCustomLogo` - Add a new custom logo to a video
* `DeleteVideoEmbedPreset` - Remove an embed preset from a video
* `GetEmbedPresetVideos` - Get all the videos that have been added to an embed preset
* `GetEmbedPresetVideosAlt1` - Get all the videos that have been added to an embed preset
* `GetVideoCustomLogo` - Get a custom video logo
* `GetVideoEmbedPreset` - Check if an embed preset has been added to a video

### Groups\Essentials

* `CreateGroup` - Create a group
* `DeleteGroup` - Delete a group
* `GetGroup` - Get a specific group
* `GetGroups` - Get all groups

### Groups\Subscription

* `JoinGroup` - Add a user to a group
* `JoinGroupAlt1` - Add a user to a group
* `LeaveGroup` - Remove a user from a group
* `LeaveGroupAlt1` - Remove a user from a group

### Groups\Users

* `CheckIfUserJoinedGroup` - Check if a user has joined a group
* `CheckIfUserJoinedGroupAlt1` - Check if a user has joined a group
* `GetGroupMembers` - Get all the members of a group
* `GetUserGroups` - Get all the groups that a user has joined
* `GetUserGroupsAlt1` - Get all the groups that a user has joined

### Groups\Videos

* `AddVideoToGroup` - Add a video to a group
* `DeleteVideoFromGroup` - Remove a video from a group
* `GetGroupVideo` - Get a specific video in a group
* `GetGroupVideos` - Get all the videos in a group

### Likes\Essentials

* `CheckIfUserLikedVideo` - Check if a user has liked a video
* `CheckIfUserLikedVideoAlt1` - Check if a user has liked a video
* `GetLikes` - Get all the videos that a user has liked
* `GetLikesAlt1` - Get all the videos that a user has liked
* `GetVideoLikes` - Get all the users who have liked a video
* `GetVideoLikesAlt1` - Get all the users who have liked a video
* `GetVodLikes` - Get all the users who have liked a video on an On Demand page
* `LikeVideo` - Cause a user to like a video
* `LikeVideoAlt1` - Cause a user to like a video
* `UnlikeVideo` - Cause a user to unlike a video
* `UnlikeVideoAlt1` - Cause a user to unlike a video

### On Demand\Backgrounds

* `CreateVodBackground` - Add a background to an On Demand page
* `DeleteVodBackground` - Remove a background from an On Demand page
* `EditVodBackground` - Edit a background of an On Demand page
* `GetVodBackground` - Get a specific background of an On Demand page
* `GetVodBackgrounds` - Get all the backgrounds of an On Demand page

### On Demand\Essentials

* `CreateVod` - Create an On Demand page
* `CreateVodAlt1` - Create an On Demand page
* `DeleteVodDraft` - Delete a draft of an On Demand page
* `EditVod` - Edit an On Demand page
* `GetUserVods` - Get all the On Demand pages of a user
* `GetUserVodsAlt1` - Get all the On Demand pages of a user
* `GetVod` - Get a specific On Demand page

### On Demand\Genres

* `AddVodGenre` - Add a genre to an On Demand page
* `DeleteVodGenre` - Remove a genre from an On Demand page
* `GetGenreVod` - Get a specific On Demand page in a genre
* `GetGenreVods` - Get all the On Demand pages in a genre
* `GetVodGenre` - Get a specific On Demand genre
* `GetVodGenreByOndemandID` - Check whether an On Demand page belongs to a genre
* `GetVodGenres` - Get all On Demand genres
* `GetVodGenresByOndemandID` - Get all the genres of an On Demand page

### On Demand\Posters

* `AddVodPoster` - Add a poster to an On Demand page
* `EditVodPoster` - Edit a poster of an On Demand page
* `GetVodPoster` - Get a specific poster of an On Demand page
* `GetVodPosters` - Get all the posters of an On Demand page

### On Demand\Promotions

* `CreateVodPromotion` - Add a promotion to an On Demand page
* `DeleteVodPromotion` - Remove a promotion from an On Demand page
* `GetVodPromotion` - Get a specific promotion on an On Demand page
* `GetVodPromotionCodes` - Get all the codes of a promotion on an On Demand page
* `GetVodPromotions` - Get all the promotions on an On Demand page

### On Demand\Purchases and Rentals

* `CheckIfVodWasPurchased` - Check if a user has made a purchase or rental from an On Demand page
* `CheckIfVodWasPurchasedAlt1` - Check if a user has made a purchase or rental from an On Demand page
* `GetVodPurchases` - Get all the On Demand purchases and rentals that a user has made

### On Demand\Regions

* `AddVodRegion` - Add a specific region to an On Demand page
* `DeleteVodRegion` - Remove a specific region from an On Demand page
* `DeleteVodRegions` - Remove a list of regions from an On Demand page
* `GetRegion` - Get a specific On Demand region
* `GetRegions` - Get all the On Demand regions
* `GetVodRegion` - Get a specific region of an On Demand page
* `GetVodRegions` - Get all the regions of an On Demand page
* `SetVodRegions` - Add a list of regions to an On Demand page

### On Demand\Seasons

* `GetVodSeason` - Get a specific season on an On Demand page
* `GetVodSeasonVideos` - Get all the videos in a season on an On Demand page
* `GetVodSeasons` - Get all the seasons on an On Demand page

### On Demand\Videos

* `AddVideoToVod` - Add a video to an On Demand page
* `DeleteVideoFromVod` - Remove a video from an On Demand page
* `GetVodVideo` - Get a specific video on an On Demand page
* `GetVodVideos` - Get all the videos on an On Demand page

### Portfolios\Essentials

* `GetPortfolio` - Get a specific portfolio
* `GetPortfolioAlt1` - Get a specific portfolio
* `GetPortfolios` - Get all the portfolios that belong to a user
* `GetPortfoliosAlt1` - Get all the portfolios that belong to a user

### Portfolios\Videos

* `AddVideoToPortfolio` - Add a video to a portfolio
* `AddVideoToPortfolioAlt1` - Add a video to a portfolio
* `DeleteVideoFromPortfolio` - Remove a video from a portfolio
* `DeleteVideoFromPortfolioAlt1` - Remove a video from a portfolio
* `GetPortfolioVideo` - Get a specific video in a portfolio
* `GetPortfolioVideoAlt1` - Get a specific video in a portfolio
* `GetPortfolioVideos` - Get all the videos in a portfolio
* `GetPortfolioVideosAlt1` - Get all the videos in a portfolio

### Projects\Essentials

* `CreateProject` - Create a project
* `CreateProjectAlt1` - Create a project
* `DeleteProject` - Delete a project
* `DeleteProjectAlt1` - Delete a project
* `EditProject` - Edit a project
* `EditProjectAlt1` - Edit a project
* `GetProject` - Get a specific project
* `GetProjectAlt1` - Get a specific project
* `GetProjects` - Get all the projects that belong to a user
* `GetProjectsAlt1` - Get all the projects that belong to a user

### Projects\Videos

* `AddVideoToProject` - Add a specific video to a project
* `AddVideoToProjectAlt1` - Add a specific video to a project
* `AddVideosToProject` - Add a list of videos to a project
* `AddVideosToProjectAlt1` - Add a list of videos to a project
* `GetProjectVideos` - Get all the videos in a project
* `GetProjectVideosAlt1` - Get all the videos in a project
* `RemoveVideoFromProject` - Remove a specific video from a project
* `RemoveVideoFromProjectAlt1` - Remove a specific video from a project
* `RemoveVideosFromProject` - Remove a list of videos from a project
* `RemoveVideosFromProjectAlt1` - Remove a list of videos from a project

### Tags\Essentials

* `GetTag` - Get a specific tag

### Users\Essentials

* `EditUser` - Edit a user
* `EditUserAlt1` - Edit a user
* `GetUser` - Get a user
* `GetUserAlt1` - Get a user

### Users\Feed

* `GetFeed` - Get all videos in a user's feed
* `GetFeedAlt1` - Get all videos in a user's feed

### Users\Follows

* `CheckIfUserIsFollowing` - Check if a user is following another user
* `CheckIfUserIsFollowingAlt1` - Check if a user is following another user
* `FollowUser` - Follow a specific user
* `FollowUserAlt1` - Follow a specific user
* `FollowUsers` - Follow a list of users
* `FollowUsersAlt1` - Follow a list of users
* `GetFollowers` - Get all the followers of a user
* `GetFollowersAlt1` - Get all the followers of a user
* `GetUserFollowing` - Get all the users that a user is following
* `GetUserFollowingAlt1` - Get all the users that a user is following
* `UnfollowUser` - Unfollow a user
* `UnfollowUserAlt1` - Unfollow a user

### Users\Internal

* `SearchUsers` - Search for users

### Users\Pictures

* `CreatePicture` - Add a user picture
* `CreatePictureAlt1` - Add a user picture
* `DeletePicture` - Delete a user picture
* `DeletePictureAlt1` - Delete a user picture
* `EditPicture` - Edit a user picture
* `EditPictureAlt1` - Edit a user picture
* `GetPicture` - Get a specific user picture
* `GetPictureAlt1` - Get a specific user picture
* `GetPictures` - Get all the pictures that belong to a user
* `GetPicturesAlt1` - Get all the pictures that belong to a user

### Users\Watch History

* `DeleteFromWatchHistory` - Delete a specific video from a user's watch history
* `DeleteWatchHistory` - Delete a user's watch history
* `GetWatchHistory` - Get all the videos that a user has watched

### Videos\Comments

* `CreateComment` - Add a comment to a video
* `CreateCommentAlt1` - Add a comment to a video
* `CreateCommentReply` - Add a reply to a video comment
* `DeleteComment` - Delete a video comment
* `EditComment` - Edit a video comment
* `GetComment` - Get a specific video comment
* `GetCommentReplies` - Get all the replies to a video comment
* `GetComments` - Get all the comments on a video
* `GetCommentsAlt1` - Get all the comments on a video

### Videos\Content Ratings

* `GetContentRatings` - Get all content ratings

### Videos\Creative Commons

* `GetCcLicenses` - Get all Creative Commons licenses

### Videos\Credits

* `AddVideoCredit` - Credit a user in a video
* `AddVideoCreditAlt1` - Credit a user in a video
* `DeleteVideoCredit` - Delete a credit for a user in a video
* `EditVideoCredit` - Edit a credit for a user in a video
* `GetVideoCredit` - Get a specific credited user in a video
* `GetVideoCredits` - Get all the credited users in a video
* `GetVideoCreditsAlt1` - Get all the credited users in a video

### Videos\Embed Privacy

* `AddVideoPrivacyDomain` - Permit a video to be embedded on a domain
* `DeleteVideoPrivacyDomain` - Restrict a video from being embedded on a domain
* `GetVideoPrivacyDomains` - Get all the domains on which a video can be embedded

### Videos\Essentials

* `CheckIfUserOwnsVideo` - Check if a user owns a video
* `CheckIfUserOwnsVideoAlt1` - Check if a user owns a video
* `DeleteVideo` - Delete a video
* `EditVideo` - Edit a video
* `GetAppearances` - Get all the videos in which a user appears
* `GetAppearancesAlt1` - Get all the videos in which a user appears
* `GetVideo` - Get a specific video
* `GetVideos` - Get all the videos that a user has uploaded
* `GetVideosAlt1` - Get all the videos that a user has uploaded
* `SearchVideos` - Search for videos

### Videos\Languages

* `GetLanguages` - Get all languages

### Videos\Recommendations

* `GetRelatedVideos` - Get all the related videos of a video

### Videos\Tags

* `AddVideoTag` - Add a specific tag to a video
* `AddVideoTags` - Add a list of tags to a video
* `CheckVideoForTag` - Check if a tag has been added to a video
* `DeleteVideoTag` - Remove a tag from a video
* `GetVideoTags` - Get all the tags of a video
* `GetVideosWithTag` - Get all the videos with a specific tag

### Videos\Text Tracks

* `CreateTextTrack` - Add a text track to a video
* `CreateTextTrackAlt1` - Add a text track to a video
* `DeleteTextTrack` - Delete a text track
* `EditTextTrack` - Edit a text track
* `GetTextTrack` - Get a specific text track
* `GetTextTracks` - Get all the text tracks of a video
* `GetTextTracksAlt1` - Get all the text tracks of a video

### Videos\Thumbnails

* `CreateVideoThumbnail` - Add a video thumbnail
* `CreateVideoThumbnailAlt1` - Add a video thumbnail
* `DeleteVideoThumbnail` - Delete a video thumbnail
* `EditVideoThumbnail` - Edit a video thumbnail
* `GetVideoThumbnail` - Get a video thumbnail
* `GetVideoThumbnails` - Get all the thumbnails of a video
* `GetVideoThumbnailsAlt1` - Get all the thumbnails of a video

### Videos\Upload

* `CompleteStreamingUpload` - Complete a user's streaming upload
* `GetUploadAttempt` - Get a user's upload attempt
* `UploadVideo` - Upload a video
* `UploadVideoAlt1` - Upload a video

### Videos\Versions

* `CreateVideoVersion` - Add a version to a video

### Videos\Viewing Privacy

* `AddVideoPrivacyUser` - Permit a specific user to view a private video
* `AddVideoPrivacyUsers` - Permit a list of users to view a private video
* `AddVideoPrivacyUsersAlt1` - Permit a list of users to view a private video
* `DeleteVideoPrivacyUser` - Restrict a user from viewing a private video
* `GetVideoPrivacyUsers` - Get all the users who can view a user's private videos by default
* `GetVideoPrivacyUsersAlt1` - Get all the users who can view a user's private videos by default

### Watch Later Queue\Essentials

* `AddVideoToWatchLater` - Add a video to a user's Watch Later queue
* `AddVideoToWatchLaterAlt1` - Add a video to a user's Watch Later queue
* `CheckWatchLaterQueue` - Check if a user has added a specific video to their Watch Later queue
* `CheckWatchLaterQueueAlt1` - Check if a user has added a specific video to their Watch Later queue
* `DeleteVideoFromWatchLater` - Remove a video from a user's Watch Later queue
* `DeleteVideoFromWatchLaterAlt1` - Remove a video from a user's Watch Later queue
* `GetWatchLaterQueue` - Get all the videos in a user's Watch Later queue
* `GetWatchLaterQueueAlt1` - Get all the videos in a user's Watch Later queue

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
