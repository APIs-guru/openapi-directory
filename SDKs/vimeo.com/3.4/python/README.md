# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.GetEndpointsRequest(
    query_params=operations.GetEndpointsQueryParams(
        openapi=False,
    ),
)
    
res = s.api_information.get_endpoints(req)

if res.endpoint is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API Information

* `get_endpoints` - Get an API specification

### Albums\Album videos

* `add_video_to_album` - Add a specific video to an album
* `add_video_to_album_alt1` - Add a specific video to an album
* `get_album_video` - Get a specific video in an album
* `get_album_video_alt1` - Get a specific video in an album
* `get_album_videos` - Get all the videos in an album
* `get_album_videos_alt1` - Get all the videos in an album
* `remove_video_from_album` - Remove a video from an album
* `remove_video_from_album_alt1` - Remove a video from an album
* `replace_videos_in_album` - Replace all the videos in an album
* `replace_videos_in_album_alt1` - Replace all the videos in an album
* `set_video_as_album_thumbnail` - Set a video as the album thumbnail
* `set_video_as_album_thumbnail_alt1` - Set a video as the album thumbnail

### Albums\Custom album logos

* `create_album_logo` - Add a custom album logo
* `delete_album_logo` - Remove a custom album logo
* `get_album_logo` - Get a specific custom album logo
* `get_album_logos` - Get all the custom logos of an album
* `replace_album_logo` - Replace a custom album logo

### Albums\Custom album thumbnails

* `create_album_custom_thumb` - Add a custom uploaded thumbnail
* `delete_album_custom_thumbnail` - Remove a custom uploaded album thumbnail
* `get_album_custom_thumbnail` - Get a specific custom uploaded album thumbnail
* `get_album_custom_thumbs` - Get all the custom upload thumbnails of an album
* `replace_album_custom_thumb` - Replace a custom uploaded album thumbnail

### Albums\Essentials

* `create_album` - Create an album
* `create_album_alt1` - Create an album
* `delete_album` - Delete an album
* `delete_album_alt1` - Delete an album
* `edit_album` - Edit an album
* `edit_album_alt1` - Edit an album
* `get_album` - Get a specific album
* `get_album_alt1` - Get a specific album
* `get_albums` - Get all the albums that belong to a user
* `get_albums_alt1` - Get all the albums that belong to a user

### Authentication Extras\Essentials

* `client_auth` - Authorize a client with OAuth
* `convert_access_token` - Convert OAuth 1 access tokens to OAuth 2 access tokens
* `delete_token` - Revoke the current access token
* `exchange_auth_code` - Exchange an authorization code for an access token
* `verify_token` - Verify an OAuth 2 token

### Categories\Channels

* `get_category_channels` - Get all the channels in a category

### Categories\Essentials

* `get_categories` - Get all categories
* `get_category` - Get a specific category

### Categories\Groups

* `get_category_groups` - Get all the groups in a category

### Categories\Subscriptions

* `check_if_user_subscribed_to_category` - Check if a user follows a category
* `check_if_user_subscribed_to_category_alt1` - Check if a user follows a category
* `get_category_subscriptions` - Get all the categories that a user follows
* `get_category_subscriptions_alt1` - Get all the categories that a user follows
* `subscribe_to_category` - Subscribe a user to a single category
* `subscribe_to_category_alt1` - Subscribe a user to a single category
* `unsubscribe_from_category` - Unsubscribe a user from a category
* `unsubscribe_from_category_alt1` - Unsubscribe a user from a category

### Categories\Videos

* `check_category_for_video` - Check for a video in a category
* `get_category_videos` - Get all the videos in a category
* `get_video_categories` - Get all the categories to which a video belongs
* `suggest_video_category` - Suggest categories for a video

### Channels\Categories

* `add_channel_categories` - Add a list of categories to a channel
* `categorize_channel` - Categorize a channel
* `delete_channel_category` - Remove a category from a channel
* `get_channel_categories` - Get all the categories in a channel

### Channels\Essentials

* `create_channel` - Create a channel
* `delete_channel` - Delete a channel
* `edit_channel` - Edit a channel
* `get_channel` - Get a specific channel
* `get_channel_subscriptions` - Get all the channels to which a user subscribes
* `get_channel_subscriptions_alt1` - Get all the channels to which a user subscribes
* `get_channels` - Get all channels

### Channels\Moderators

* `add_channel_moderator` - Add a specific channel moderator
* `add_channel_moderators` - Add a list of channel moderators
* `get_channel_moderator` - Get a specific channel moderator
* `get_channel_moderators` - Get all the moderators in a channel
* `remove_channel_moderator` - Remove a specific channel moderator
* `remove_channel_moderators` - Remove a list of channel moderators
* `replace_channel_moderators` - Replace the moderators of a channel

### Channels\Private channel members

* `delete_channel_privacy_user` - Restrict a user from viewing a private channel
* `get_channel_privacy_users` - Get all the users who can view a private channel
* `set_channel_privacy_user` - Permit a specific user to view a private channel
* `set_channel_privacy_users` - Permit a list of users to view a private channel

### Channels\Subscriptions and subscribers

* `check_if_user_subscribed_to_channel` - Check if a user follows a channel
* `check_if_user_subscribed_to_channel_alt1` - Check if a user follows a channel
* `get_channel_subscribers` - Get all the followers of a channel
* `subscribe_to_channel` - Subscribe a user to a specific channel
* `subscribe_to_channel_alt1` - Subscribe a user to a specific channel
* `unsubscribe_from_channel` - Unsubscribe a user from a specific channel
* `unsubscribe_from_channel_alt1` - Unsubscribe a user from a specific channel

### Channels\Tags

* `add_channel_tag` - Add a specific tag to a channel
* `add_tags_to_channel` - Add a list of tags to a channel
* `check_if_channel_has_tag` - Check if a tag has been added to a channel
* `delete_tag_from_channel` - Remove a tag from a channel
* `get_channel_tags` - Get all the tags that have been added to a channel

### Channels\Videos

* `add_video_to_channel` - Add a specific video to a channel
* `add_videos_to_channel` - Add a list of videos to a channel
* `delete_video_from_channel` - Remove a specific video from a channel
* `get_available_video_channels` - Get all the channels to which a user can add or remove a specific video
* `get_channel_video` - Get a specific video in a channel
* `get_channel_videos` - Get all the videos in a channel
* `remove_videos_from_channel` - Remove a list of videos from a channel

### Embed Presets\Custom Logos

* `create_custom_logo` - Add a custom logo
* `create_custom_logo_alt1` - Add a custom logo
* `get_custom_logo` - Get a specific custom logo
* `get_custom_logo_alt1` - Get a specific custom logo
* `get_custom_logos` - Get all the custom logos that belong to a user
* `get_custom_logos_alt1` - Get all the custom logos that belong to a user

### Embed Presets\Essentials

* `edit_embed_preset` - Edit an embed preset
* `edit_embed_preset_alt1` - Edit an embed preset
* `get_embed_preset` - Get a specific embed preset
* `get_embed_preset_alt1` - Get a specific embed preset
* `get_embed_presets` - Get all the embed presets that a user has created
* `get_embed_presets_alt1` - Get all the embed presets that a user has created

### Embed Presets\Videos

* `add_video_embed_preset` - Add an embed preset to a video
* `create_video_custom_logo` - Add a new custom logo to a video
* `delete_video_embed_preset` - Remove an embed preset from a video
* `get_embed_preset_videos` - Get all the videos that have been added to an embed preset
* `get_embed_preset_videos_alt1` - Get all the videos that have been added to an embed preset
* `get_video_custom_logo` - Get a custom video logo
* `get_video_embed_preset` - Check if an embed preset has been added to a video

### Groups\Essentials

* `create_group` - Create a group
* `delete_group` - Delete a group
* `get_group` - Get a specific group
* `get_groups` - Get all groups

### Groups\Subscription

* `join_group` - Add a user to a group
* `join_group_alt1` - Add a user to a group
* `leave_group` - Remove a user from a group
* `leave_group_alt1` - Remove a user from a group

### Groups\Users

* `check_if_user_joined_group` - Check if a user has joined a group
* `check_if_user_joined_group_alt1` - Check if a user has joined a group
* `get_group_members` - Get all the members of a group
* `get_user_groups` - Get all the groups that a user has joined
* `get_user_groups_alt1` - Get all the groups that a user has joined

### Groups\Videos

* `add_video_to_group` - Add a video to a group
* `delete_video_from_group` - Remove a video from a group
* `get_group_video` - Get a specific video in a group
* `get_group_videos` - Get all the videos in a group

### Likes\Essentials

* `check_if_user_liked_video` - Check if a user has liked a video
* `check_if_user_liked_video_alt1` - Check if a user has liked a video
* `get_likes` - Get all the videos that a user has liked
* `get_likes_alt1` - Get all the videos that a user has liked
* `get_video_likes` - Get all the users who have liked a video
* `get_video_likes_alt1` - Get all the users who have liked a video
* `get_vod_likes` - Get all the users who have liked a video on an On Demand page
* `like_video` - Cause a user to like a video
* `like_video_alt1` - Cause a user to like a video
* `unlike_video` - Cause a user to unlike a video
* `unlike_video_alt1` - Cause a user to unlike a video

### On Demand\Backgrounds

* `create_vod_background` - Add a background to an On Demand page
* `delete_vod_background` - Remove a background from an On Demand page
* `edit_vod_background` - Edit a background of an On Demand page
* `get_vod_background` - Get a specific background of an On Demand page
* `get_vod_backgrounds` - Get all the backgrounds of an On Demand page

### On Demand\Essentials

* `create_vod` - Create an On Demand page
* `create_vod_alt1` - Create an On Demand page
* `delete_vod_draft` - Delete a draft of an On Demand page
* `edit_vod` - Edit an On Demand page
* `get_user_vods` - Get all the On Demand pages of a user
* `get_user_vods_alt1` - Get all the On Demand pages of a user
* `get_vod` - Get a specific On Demand page

### On Demand\Genres

* `add_vod_genre` - Add a genre to an On Demand page
* `delete_vod_genre` - Remove a genre from an On Demand page
* `get_genre_vod` - Get a specific On Demand page in a genre
* `get_genre_vods` - Get all the On Demand pages in a genre
* `get_vod_genre` - Get a specific On Demand genre
* `get_vod_genre_by_ondemand_id` - Check whether an On Demand page belongs to a genre
* `get_vod_genres` - Get all On Demand genres
* `get_vod_genres_by_ondemand_id` - Get all the genres of an On Demand page

### On Demand\Posters

* `add_vod_poster` - Add a poster to an On Demand page
* `edit_vod_poster` - Edit a poster of an On Demand page
* `get_vod_poster` - Get a specific poster of an On Demand page
* `get_vod_posters` - Get all the posters of an On Demand page

### On Demand\Promotions

* `create_vod_promotion` - Add a promotion to an On Demand page
* `delete_vod_promotion` - Remove a promotion from an On Demand page
* `get_vod_promotion` - Get a specific promotion on an On Demand page
* `get_vod_promotion_codes` - Get all the codes of a promotion on an On Demand page
* `get_vod_promotions` - Get all the promotions on an On Demand page

### On Demand\Purchases and Rentals

* `check_if_vod_was_purchased` - Check if a user has made a purchase or rental from an On Demand page
* `check_if_vod_was_purchased_alt1` - Check if a user has made a purchase or rental from an On Demand page
* `get_vod_purchases` - Get all the On Demand purchases and rentals that a user has made

### On Demand\Regions

* `add_vod_region` - Add a specific region to an On Demand page
* `delete_vod_region` - Remove a specific region from an On Demand page
* `delete_vod_regions` - Remove a list of regions from an On Demand page
* `get_region` - Get a specific On Demand region
* `get_regions` - Get all the On Demand regions
* `get_vod_region` - Get a specific region of an On Demand page
* `get_vod_regions` - Get all the regions of an On Demand page
* `set_vod_regions` - Add a list of regions to an On Demand page

### On Demand\Seasons

* `get_vod_season` - Get a specific season on an On Demand page
* `get_vod_season_videos` - Get all the videos in a season on an On Demand page
* `get_vod_seasons` - Get all the seasons on an On Demand page

### On Demand\Videos

* `add_video_to_vod` - Add a video to an On Demand page
* `delete_video_from_vod` - Remove a video from an On Demand page
* `get_vod_video` - Get a specific video on an On Demand page
* `get_vod_videos` - Get all the videos on an On Demand page

### Portfolios\Essentials

* `get_portfolio` - Get a specific portfolio
* `get_portfolio_alt1` - Get a specific portfolio
* `get_portfolios` - Get all the portfolios that belong to a user
* `get_portfolios_alt1` - Get all the portfolios that belong to a user

### Portfolios\Videos

* `add_video_to_portfolio` - Add a video to a portfolio
* `add_video_to_portfolio_alt1` - Add a video to a portfolio
* `delete_video_from_portfolio` - Remove a video from a portfolio
* `delete_video_from_portfolio_alt1` - Remove a video from a portfolio
* `get_portfolio_video` - Get a specific video in a portfolio
* `get_portfolio_video_alt1` - Get a specific video in a portfolio
* `get_portfolio_videos` - Get all the videos in a portfolio
* `get_portfolio_videos_alt1` - Get all the videos in a portfolio

### Projects\Essentials

* `create_project` - Create a project
* `create_project_alt1` - Create a project
* `delete_project` - Delete a project
* `delete_project_alt1` - Delete a project
* `edit_project` - Edit a project
* `edit_project_alt1` - Edit a project
* `get_project` - Get a specific project
* `get_project_alt1` - Get a specific project
* `get_projects` - Get all the projects that belong to a user
* `get_projects_alt1` - Get all the projects that belong to a user

### Projects\Videos

* `add_video_to_project` - Add a specific video to a project
* `add_video_to_project_alt1` - Add a specific video to a project
* `add_videos_to_project` - Add a list of videos to a project
* `add_videos_to_project_alt1` - Add a list of videos to a project
* `get_project_videos` - Get all the videos in a project
* `get_project_videos_alt1` - Get all the videos in a project
* `remove_video_from_project` - Remove a specific video from a project
* `remove_video_from_project_alt1` - Remove a specific video from a project
* `remove_videos_from_project` - Remove a list of videos from a project
* `remove_videos_from_project_alt1` - Remove a list of videos from a project

### Tags\Essentials

* `get_tag` - Get a specific tag

### Users\Essentials

* `edit_user` - Edit a user
* `edit_user_alt1` - Edit a user
* `get_user` - Get a user
* `get_user_alt1` - Get a user

### Users\Feed

* `get_feed` - Get all videos in a user's feed
* `get_feed_alt1` - Get all videos in a user's feed

### Users\Follows

* `check_if_user_is_following` - Check if a user is following another user
* `check_if_user_is_following_alt1` - Check if a user is following another user
* `follow_user` - Follow a specific user
* `follow_user_alt1` - Follow a specific user
* `follow_users` - Follow a list of users
* `follow_users_alt1` - Follow a list of users
* `get_followers` - Get all the followers of a user
* `get_followers_alt1` - Get all the followers of a user
* `get_user_following` - Get all the users that a user is following
* `get_user_following_alt1` - Get all the users that a user is following
* `unfollow_user` - Unfollow a user
* `unfollow_user_alt1` - Unfollow a user

### Users\Internal

* `search_users` - Search for users

### Users\Pictures

* `create_picture` - Add a user picture
* `create_picture_alt1` - Add a user picture
* `delete_picture` - Delete a user picture
* `delete_picture_alt1` - Delete a user picture
* `edit_picture` - Edit a user picture
* `edit_picture_alt1` - Edit a user picture
* `get_picture` - Get a specific user picture
* `get_picture_alt1` - Get a specific user picture
* `get_pictures` - Get all the pictures that belong to a user
* `get_pictures_alt1` - Get all the pictures that belong to a user

### Users\Watch History

* `delete_from_watch_history` - Delete a specific video from a user's watch history
* `delete_watch_history` - Delete a user's watch history
* `get_watch_history` - Get all the videos that a user has watched

### Videos\Comments

* `create_comment` - Add a comment to a video
* `create_comment_alt1` - Add a comment to a video
* `create_comment_reply` - Add a reply to a video comment
* `delete_comment` - Delete a video comment
* `edit_comment` - Edit a video comment
* `get_comment` - Get a specific video comment
* `get_comment_replies` - Get all the replies to a video comment
* `get_comments` - Get all the comments on a video
* `get_comments_alt1` - Get all the comments on a video

### Videos\Content Ratings

* `get_content_ratings` - Get all content ratings

### Videos\Creative Commons

* `get_cc_licenses` - Get all Creative Commons licenses

### Videos\Credits

* `add_video_credit` - Credit a user in a video
* `add_video_credit_alt1` - Credit a user in a video
* `delete_video_credit` - Delete a credit for a user in a video
* `edit_video_credit` - Edit a credit for a user in a video
* `get_video_credit` - Get a specific credited user in a video
* `get_video_credits` - Get all the credited users in a video
* `get_video_credits_alt1` - Get all the credited users in a video

### Videos\Embed Privacy

* `add_video_privacy_domain` - Permit a video to be embedded on a domain
* `delete_video_privacy_domain` - Restrict a video from being embedded on a domain
* `get_video_privacy_domains` - Get all the domains on which a video can be embedded

### Videos\Essentials

* `check_if_user_owns_video` - Check if a user owns a video
* `check_if_user_owns_video_alt1` - Check if a user owns a video
* `delete_video` - Delete a video
* `edit_video` - Edit a video
* `get_appearances` - Get all the videos in which a user appears
* `get_appearances_alt1` - Get all the videos in which a user appears
* `get_video` - Get a specific video
* `get_videos` - Get all the videos that a user has uploaded
* `get_videos_alt1` - Get all the videos that a user has uploaded
* `search_videos` - Search for videos

### Videos\Languages

* `get_languages` - Get all languages

### Videos\Recommendations

* `get_related_videos` - Get all the related videos of a video

### Videos\Tags

* `add_video_tag` - Add a specific tag to a video
* `add_video_tags` - Add a list of tags to a video
* `check_video_for_tag` - Check if a tag has been added to a video
* `delete_video_tag` - Remove a tag from a video
* `get_video_tags` - Get all the tags of a video
* `get_videos_with_tag` - Get all the videos with a specific tag

### Videos\Text Tracks

* `create_text_track` - Add a text track to a video
* `create_text_track_alt1` - Add a text track to a video
* `delete_text_track` - Delete a text track
* `edit_text_track` - Edit a text track
* `get_text_track` - Get a specific text track
* `get_text_tracks` - Get all the text tracks of a video
* `get_text_tracks_alt1` - Get all the text tracks of a video

### Videos\Thumbnails

* `create_video_thumbnail` - Add a video thumbnail
* `create_video_thumbnail_alt1` - Add a video thumbnail
* `delete_video_thumbnail` - Delete a video thumbnail
* `edit_video_thumbnail` - Edit a video thumbnail
* `get_video_thumbnail` - Get a video thumbnail
* `get_video_thumbnails` - Get all the thumbnails of a video
* `get_video_thumbnails_alt1` - Get all the thumbnails of a video

### Videos\Upload

* `complete_streaming_upload` - Complete a user's streaming upload
* `get_upload_attempt` - Get a user's upload attempt
* `upload_video` - Upload a video
* `upload_video_alt1` - Upload a video

### Videos\Versions

* `create_video_version` - Add a version to a video

### Videos\Viewing Privacy

* `add_video_privacy_user` - Permit a specific user to view a private video
* `add_video_privacy_users` - Permit a list of users to view a private video
* `add_video_privacy_users_alt1` - Permit a list of users to view a private video
* `delete_video_privacy_user` - Restrict a user from viewing a private video
* `get_video_privacy_users` - Get all the users who can view a user's private videos by default
* `get_video_privacy_users_alt1` - Get all the users who can view a user's private videos by default

### Watch Later Queue\Essentials

* `add_video_to_watch_later` - Add a video to a user's Watch Later queue
* `add_video_to_watch_later_alt1` - Add a video to a user's Watch Later queue
* `check_watch_later_queue` - Check if a user has added a specific video to their Watch Later queue
* `check_watch_later_queue_alt1` - Check if a user has added a specific video to their Watch Later queue
* `delete_video_from_watch_later` - Remove a video from a user's Watch Later queue
* `delete_video_from_watch_later_alt1` - Remove a video from a user's Watch Later queue
* `get_watch_later_queue` - Get all the videos in a user's Watch Later queue
* `get_watch_later_queue_alt1` - Get all the videos in a user's Watch Later queue

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
