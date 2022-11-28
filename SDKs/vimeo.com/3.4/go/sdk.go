package sdk

import (
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/shared"
)

var ServerList = []string{
	"https://api.vimeo.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	APIInformation                      *APIInformation
	AlbumsAlbumVideos                   *AlbumsAlbumVideos
	AlbumsCustomAlbumLogos              *AlbumsCustomAlbumLogos
	AlbumsCustomAlbumThumbnails         *AlbumsCustomAlbumThumbnails
	AlbumsEssentials                    *AlbumsEssentials
	AuthenticationExtrasEssentials      *AuthenticationExtrasEssentials
	CategoriesChannels                  *CategoriesChannels
	CategoriesEssentials                *CategoriesEssentials
	CategoriesGroups                    *CategoriesGroups
	CategoriesSubscriptions             *CategoriesSubscriptions
	CategoriesVideos                    *CategoriesVideos
	ChannelsCategories                  *ChannelsCategories
	ChannelsEssentials                  *ChannelsEssentials
	ChannelsModerators                  *ChannelsModerators
	ChannelsPrivateChannelMembers       *ChannelsPrivateChannelMembers
	ChannelsSubscriptionsAndSubscribers *ChannelsSubscriptionsAndSubscribers
	ChannelsTags                        *ChannelsTags
	ChannelsVideos                      *ChannelsVideos
	EmbedPresetsCustomLogos             *EmbedPresetsCustomLogos
	EmbedPresetsEssentials              *EmbedPresetsEssentials
	EmbedPresetsVideos                  *EmbedPresetsVideos
	GroupsEssentials                    *GroupsEssentials
	GroupsSubscription                  *GroupsSubscription
	GroupsUsers                         *GroupsUsers
	GroupsVideos                        *GroupsVideos
	LikesEssentials                     *LikesEssentials
	OnDemandBackgrounds                 *OnDemandBackgrounds
	OnDemandEssentials                  *OnDemandEssentials
	OnDemandGenres                      *OnDemandGenres
	OnDemandPosters                     *OnDemandPosters
	OnDemandPromotions                  *OnDemandPromotions
	OnDemandPurchasesAndRentals         *OnDemandPurchasesAndRentals
	OnDemandRegions                     *OnDemandRegions
	OnDemandSeasons                     *OnDemandSeasons
	OnDemandVideos                      *OnDemandVideos
	PortfoliosEssentials                *PortfoliosEssentials
	PortfoliosVideos                    *PortfoliosVideos
	ProjectsEssentials                  *ProjectsEssentials
	ProjectsVideos                      *ProjectsVideos
	TagsEssentials                      *TagsEssentials
	UsersEssentials                     *UsersEssentials
	UsersFeed                           *UsersFeed
	UsersFollows                        *UsersFollows
	UsersInternal                       *UsersInternal
	UsersPictures                       *UsersPictures
	UsersWatchHistory                   *UsersWatchHistory
	VideosComments                      *VideosComments
	VideosContentRatings                *VideosContentRatings
	VideosCreativeCommons               *VideosCreativeCommons
	VideosCredits                       *VideosCredits
	VideosEmbedPrivacy                  *VideosEmbedPrivacy
	VideosEssentials                    *VideosEssentials
	VideosLanguages                     *VideosLanguages
	VideosRecommendations               *VideosRecommendations
	VideosTags                          *VideosTags
	VideosTextTracks                    *VideosTextTracks
	VideosThumbnails                    *VideosThumbnails
	VideosUpload                        *VideosUpload
	VideosVersions                      *VideosVersions
	VideosViewingPrivacy                *VideosViewingPrivacy
	WatchLaterQueueEssentials           *WatchLaterQueueEssentials

	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	sdk.APIInformation = NewAPIInformation(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AlbumsAlbumVideos = NewAlbumsAlbumVideos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AlbumsCustomAlbumLogos = NewAlbumsCustomAlbumLogos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AlbumsCustomAlbumThumbnails = NewAlbumsCustomAlbumThumbnails(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AlbumsEssentials = NewAlbumsEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AuthenticationExtrasEssentials = NewAuthenticationExtrasEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CategoriesChannels = NewCategoriesChannels(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CategoriesEssentials = NewCategoriesEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CategoriesGroups = NewCategoriesGroups(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CategoriesSubscriptions = NewCategoriesSubscriptions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CategoriesVideos = NewCategoriesVideos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelsCategories = NewChannelsCategories(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelsEssentials = NewChannelsEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelsModerators = NewChannelsModerators(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelsPrivateChannelMembers = NewChannelsPrivateChannelMembers(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelsSubscriptionsAndSubscribers = NewChannelsSubscriptionsAndSubscribers(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelsTags = NewChannelsTags(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelsVideos = NewChannelsVideos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.EmbedPresetsCustomLogos = NewEmbedPresetsCustomLogos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.EmbedPresetsEssentials = NewEmbedPresetsEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.EmbedPresetsVideos = NewEmbedPresetsVideos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.GroupsEssentials = NewGroupsEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.GroupsSubscription = NewGroupsSubscription(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.GroupsUsers = NewGroupsUsers(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.GroupsVideos = NewGroupsVideos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.LikesEssentials = NewLikesEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OnDemandBackgrounds = NewOnDemandBackgrounds(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OnDemandEssentials = NewOnDemandEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OnDemandGenres = NewOnDemandGenres(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OnDemandPosters = NewOnDemandPosters(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OnDemandPromotions = NewOnDemandPromotions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OnDemandPurchasesAndRentals = NewOnDemandPurchasesAndRentals(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OnDemandRegions = NewOnDemandRegions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OnDemandSeasons = NewOnDemandSeasons(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OnDemandVideos = NewOnDemandVideos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PortfoliosEssentials = NewPortfoliosEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PortfoliosVideos = NewPortfoliosVideos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ProjectsEssentials = NewProjectsEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ProjectsVideos = NewProjectsVideos(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.TagsEssentials = NewTagsEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UsersEssentials = NewUsersEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UsersFeed = NewUsersFeed(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UsersFollows = NewUsersFollows(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UsersInternal = NewUsersInternal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UsersPictures = NewUsersPictures(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UsersWatchHistory = NewUsersWatchHistory(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosComments = NewVideosComments(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosContentRatings = NewVideosContentRatings(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosCreativeCommons = NewVideosCreativeCommons(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosCredits = NewVideosCredits(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosEmbedPrivacy = NewVideosEmbedPrivacy(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosEssentials = NewVideosEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosLanguages = NewVideosLanguages(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosRecommendations = NewVideosRecommendations(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosTags = NewVideosTags(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosTextTracks = NewVideosTextTracks(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosThumbnails = NewVideosThumbnails(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosUpload = NewVideosUpload(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosVersions = NewVideosVersions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VideosViewingPrivacy = NewVideosViewingPrivacy(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.WatchLaterQueueEssentials = NewWatchLaterQueueEssentials(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	return sdk
}
