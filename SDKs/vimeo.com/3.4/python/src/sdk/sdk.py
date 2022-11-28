

import requests
from sdk.models import shared
from . import utils

from .api_information import APIInformation
from .albums_album_videos import AlbumsAlbumVideos
from .albums_custom_album_logos import AlbumsCustomAlbumLogos
from .albums_custom_album_thumbnails import AlbumsCustomAlbumThumbnails
from .albums_essentials import AlbumsEssentials
from .authentication_extras_essentials import AuthenticationExtrasEssentials
from .categories_channels import CategoriesChannels
from .categories_essentials import CategoriesEssentials
from .categories_groups import CategoriesGroups
from .categories_subscriptions import CategoriesSubscriptions
from .categories_videos import CategoriesVideos
from .channels_categories import ChannelsCategories
from .channels_essentials import ChannelsEssentials
from .channels_moderators import ChannelsModerators
from .channels_private_channel_members import ChannelsPrivateChannelMembers
from .channels_subscriptions_and_subscribers import ChannelsSubscriptionsAndSubscribers
from .channels_tags import ChannelsTags
from .channels_videos import ChannelsVideos
from .embed_presets_custom_logos import EmbedPresetsCustomLogos
from .embed_presets_essentials import EmbedPresetsEssentials
from .embed_presets_videos import EmbedPresetsVideos
from .groups_essentials import GroupsEssentials
from .groups_subscription import GroupsSubscription
from .groups_users import GroupsUsers
from .groups_videos import GroupsVideos
from .likes_essentials import LikesEssentials
from .on_demand_backgrounds import OnDemandBackgrounds
from .on_demand_essentials import OnDemandEssentials
from .on_demand_genres import OnDemandGenres
from .on_demand_posters import OnDemandPosters
from .on_demand_promotions import OnDemandPromotions
from .on_demand_purchases_and_rentals import OnDemandPurchasesAndRentals
from .on_demand_regions import OnDemandRegions
from .on_demand_seasons import OnDemandSeasons
from .on_demand_videos import OnDemandVideos
from .portfolios_essentials import PortfoliosEssentials
from .portfolios_videos import PortfoliosVideos
from .projects_essentials import ProjectsEssentials
from .projects_videos import ProjectsVideos
from .tags_essentials import TagsEssentials
from .users_essentials import UsersEssentials
from .users_feed import UsersFeed
from .users_follows import UsersFollows
from .users_internal import UsersInternal
from .users_pictures import UsersPictures
from .users_watch_history import UsersWatchHistory
from .videos_comments import VideosComments
from .videos_content_ratings import VideosContentRatings
from .videos_creative_commons import VideosCreativeCommons
from .videos_credits import VideosCredits
from .videos_embed_privacy import VideosEmbedPrivacy
from .videos_essentials import VideosEssentials
from .videos_languages import VideosLanguages
from .videos_recommendations import VideosRecommendations
from .videos_tags import VideosTags
from .videos_text_tracks import VideosTextTracks
from .videos_thumbnails import VideosThumbnails
from .videos_upload import VideosUpload
from .videos_versions import VideosVersions
from .videos_viewing_privacy import VideosViewingPrivacy
from .watch_later_queue_essentials import WatchLaterQueueEssentials


SERVERS = [
	"https://api.vimeo.com",
]


class SDK:
    
    api_information: APIInformation
    albums_album_videos: AlbumsAlbumVideos
    albums_custom_album_logos: AlbumsCustomAlbumLogos
    albums_custom_album_thumbnails: AlbumsCustomAlbumThumbnails
    albums_essentials: AlbumsEssentials
    authentication_extras_essentials: AuthenticationExtrasEssentials
    categories_channels: CategoriesChannels
    categories_essentials: CategoriesEssentials
    categories_groups: CategoriesGroups
    categories_subscriptions: CategoriesSubscriptions
    categories_videos: CategoriesVideos
    channels_categories: ChannelsCategories
    channels_essentials: ChannelsEssentials
    channels_moderators: ChannelsModerators
    channels_private_channel_members: ChannelsPrivateChannelMembers
    channels_subscriptions_and_subscribers: ChannelsSubscriptionsAndSubscribers
    channels_tags: ChannelsTags
    channels_videos: ChannelsVideos
    embed_presets_custom_logos: EmbedPresetsCustomLogos
    embed_presets_essentials: EmbedPresetsEssentials
    embed_presets_videos: EmbedPresetsVideos
    groups_essentials: GroupsEssentials
    groups_subscription: GroupsSubscription
    groups_users: GroupsUsers
    groups_videos: GroupsVideos
    likes_essentials: LikesEssentials
    on_demand_backgrounds: OnDemandBackgrounds
    on_demand_essentials: OnDemandEssentials
    on_demand_genres: OnDemandGenres
    on_demand_posters: OnDemandPosters
    on_demand_promotions: OnDemandPromotions
    on_demand_purchases_and_rentals: OnDemandPurchasesAndRentals
    on_demand_regions: OnDemandRegions
    on_demand_seasons: OnDemandSeasons
    on_demand_videos: OnDemandVideos
    portfolios_essentials: PortfoliosEssentials
    portfolios_videos: PortfoliosVideos
    projects_essentials: ProjectsEssentials
    projects_videos: ProjectsVideos
    tags_essentials: TagsEssentials
    users_essentials: UsersEssentials
    users_feed: UsersFeed
    users_follows: UsersFollows
    users_internal: UsersInternal
    users_pictures: UsersPictures
    users_watch_history: UsersWatchHistory
    videos_comments: VideosComments
    videos_content_ratings: VideosContentRatings
    videos_creative_commons: VideosCreativeCommons
    videos_credits: VideosCredits
    videos_embed_privacy: VideosEmbedPrivacy
    videos_essentials: VideosEssentials
    videos_languages: VideosLanguages
    videos_recommendations: VideosRecommendations
    videos_tags: VideosTags
    videos_text_tracks: VideosTextTracks
    videos_thumbnails: VideosThumbnails
    videos_upload: VideosUpload
    videos_versions: VideosVersions
    videos_viewing_privacy: VideosViewingPrivacy
    watch_later_queue_essentials: WatchLaterQueueEssentials

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.api_information = APIInformation(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.albums_album_videos = AlbumsAlbumVideos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.albums_custom_album_logos = AlbumsCustomAlbumLogos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.albums_custom_album_thumbnails = AlbumsCustomAlbumThumbnails(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.albums_essentials = AlbumsEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.authentication_extras_essentials = AuthenticationExtrasEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.categories_channels = CategoriesChannels(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.categories_essentials = CategoriesEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.categories_groups = CategoriesGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.categories_subscriptions = CategoriesSubscriptions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.categories_videos = CategoriesVideos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels_categories = ChannelsCategories(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels_essentials = ChannelsEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels_moderators = ChannelsModerators(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels_private_channel_members = ChannelsPrivateChannelMembers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels_subscriptions_and_subscribers = ChannelsSubscriptionsAndSubscribers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels_tags = ChannelsTags(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels_videos = ChannelsVideos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.embed_presets_custom_logos = EmbedPresetsCustomLogos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.embed_presets_essentials = EmbedPresetsEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.embed_presets_videos = EmbedPresetsVideos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.groups_essentials = GroupsEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.groups_subscription = GroupsSubscription(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.groups_users = GroupsUsers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.groups_videos = GroupsVideos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.likes_essentials = LikesEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.on_demand_backgrounds = OnDemandBackgrounds(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.on_demand_essentials = OnDemandEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.on_demand_genres = OnDemandGenres(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.on_demand_posters = OnDemandPosters(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.on_demand_promotions = OnDemandPromotions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.on_demand_purchases_and_rentals = OnDemandPurchasesAndRentals(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.on_demand_regions = OnDemandRegions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.on_demand_seasons = OnDemandSeasons(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.on_demand_videos = OnDemandVideos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.portfolios_essentials = PortfoliosEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.portfolios_videos = PortfoliosVideos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.projects_essentials = ProjectsEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.projects_videos = ProjectsVideos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.tags_essentials = TagsEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users_essentials = UsersEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users_feed = UsersFeed(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users_follows = UsersFollows(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users_internal = UsersInternal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users_pictures = UsersPictures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users_watch_history = UsersWatchHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_comments = VideosComments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_content_ratings = VideosContentRatings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_creative_commons = VideosCreativeCommons(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_credits = VideosCredits(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_embed_privacy = VideosEmbedPrivacy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_essentials = VideosEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_languages = VideosLanguages(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_recommendations = VideosRecommendations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_tags = VideosTags(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_text_tracks = VideosTextTracks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_thumbnails = VideosThumbnails(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_upload = VideosUpload(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_versions = VideosVersions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos_viewing_privacy = VideosViewingPrivacy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.watch_later_queue_essentials = WatchLaterQueueEssentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    