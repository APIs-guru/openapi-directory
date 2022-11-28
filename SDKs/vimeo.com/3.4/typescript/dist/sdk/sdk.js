import axios from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";
import { ApiInformation } from "./apiinformation";
import { AlbumsAlbumVideos } from "./albumsalbumvideos";
import { AlbumsCustomAlbumLogos } from "./albumscustomalbumlogos";
import { AlbumsCustomAlbumThumbnails } from "./albumscustomalbumthumbnails";
import { AlbumsEssentials } from "./albumsessentials";
import { AuthenticationExtrasEssentials } from "./authenticationextrasessentials";
import { CategoriesChannels } from "./categorieschannels";
import { CategoriesEssentials } from "./categoriesessentials";
import { CategoriesGroups } from "./categoriesgroups";
import { CategoriesSubscriptions } from "./categoriessubscriptions";
import { CategoriesVideos } from "./categoriesvideos";
import { ChannelsCategories } from "./channelscategories";
import { ChannelsEssentials } from "./channelsessentials";
import { ChannelsModerators } from "./channelsmoderators";
import { ChannelsPrivateChannelMembers } from "./channelsprivatechannelmembers";
import { ChannelsSubscriptionsAndSubscribers } from "./channelssubscriptionsandsubscribers";
import { ChannelsTags } from "./channelstags";
import { ChannelsVideos } from "./channelsvideos";
import { EmbedPresetsCustomLogos } from "./embedpresetscustomlogos";
import { EmbedPresetsEssentials } from "./embedpresetsessentials";
import { EmbedPresetsVideos } from "./embedpresetsvideos";
import { GroupsEssentials } from "./groupsessentials";
import { GroupsSubscription } from "./groupssubscription";
import { GroupsUsers } from "./groupsusers";
import { GroupsVideos } from "./groupsvideos";
import { LikesEssentials } from "./likesessentials";
import { OnDemandBackgrounds } from "./ondemandbackgrounds";
import { OnDemandEssentials } from "./ondemandessentials";
import { OnDemandGenres } from "./ondemandgenres";
import { OnDemandPosters } from "./ondemandposters";
import { OnDemandPromotions } from "./ondemandpromotions";
import { OnDemandPurchasesAndRentals } from "./ondemandpurchasesandrentals";
import { OnDemandRegions } from "./ondemandregions";
import { OnDemandSeasons } from "./ondemandseasons";
import { OnDemandVideos } from "./ondemandvideos";
import { PortfoliosEssentials } from "./portfoliosessentials";
import { PortfoliosVideos } from "./portfoliosvideos";
import { ProjectsEssentials } from "./projectsessentials";
import { ProjectsVideos } from "./projectsvideos";
import { TagsEssentials } from "./tagsessentials";
import { UsersEssentials } from "./usersessentials";
import { UsersFeed } from "./usersfeed";
import { UsersFollows } from "./usersfollows";
import { UsersInternal } from "./usersinternal";
import { UsersPictures } from "./userspictures";
import { UsersWatchHistory } from "./userswatchhistory";
import { VideosComments } from "./videoscomments";
import { VideosContentRatings } from "./videoscontentratings";
import { VideosCreativeCommons } from "./videoscreativecommons";
import { VideosCredits } from "./videoscredits";
import { VideosEmbedPrivacy } from "./videosembedprivacy";
import { VideosEssentials } from "./videosessentials";
import { VideosLanguages } from "./videoslanguages";
import { VideosRecommendations } from "./videosrecommendations";
import { VideosTags } from "./videostags";
import { VideosTextTracks } from "./videostexttracks";
import { VideosThumbnails } from "./videosthumbnails";
import { VideosUpload } from "./videosupload";
import { VideosVersions } from "./videosversions";
import { VideosViewingPrivacy } from "./videosviewingprivacy";
import { WatchLaterQueueEssentials } from "./watchlaterqueueessentials";
export var ServerList = [
    "https://api.vimeo.com",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk._security = security;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
        if (this._serverURL == "") {
            this._serverURL = ServerList[0];
        }
        if (!this._defaultClient) {
            this._defaultClient = axios.create({ baseURL: this._serverURL });
        }
        if (!this._securityClient) {
            if (this._security) {
                this._securityClient = utils.CreateSecurityClient(this._defaultClient, this._security);
            }
            else {
                this._securityClient = this._defaultClient;
            }
        }
        this.apiInformation = new ApiInformation(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.albumsAlbumVideos = new AlbumsAlbumVideos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.albumsCustomAlbumLogos = new AlbumsCustomAlbumLogos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.albumsCustomAlbumThumbnails = new AlbumsCustomAlbumThumbnails(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.albumsEssentials = new AlbumsEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.authenticationExtrasEssentials = new AuthenticationExtrasEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoriesChannels = new CategoriesChannels(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoriesEssentials = new CategoriesEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoriesGroups = new CategoriesGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoriesSubscriptions = new CategoriesSubscriptions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categoriesVideos = new CategoriesVideos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.channelsCategories = new ChannelsCategories(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.channelsEssentials = new ChannelsEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.channelsModerators = new ChannelsModerators(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.channelsPrivateChannelMembers = new ChannelsPrivateChannelMembers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.channelsSubscriptionsAndSubscribers = new ChannelsSubscriptionsAndSubscribers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.channelsTags = new ChannelsTags(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.channelsVideos = new ChannelsVideos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.embedPresetsCustomLogos = new EmbedPresetsCustomLogos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.embedPresetsEssentials = new EmbedPresetsEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.embedPresetsVideos = new EmbedPresetsVideos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groupsEssentials = new GroupsEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groupsSubscription = new GroupsSubscription(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groupsUsers = new GroupsUsers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groupsVideos = new GroupsVideos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.likesEssentials = new LikesEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onDemandBackgrounds = new OnDemandBackgrounds(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onDemandEssentials = new OnDemandEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onDemandGenres = new OnDemandGenres(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onDemandPosters = new OnDemandPosters(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onDemandPromotions = new OnDemandPromotions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onDemandPurchasesAndRentals = new OnDemandPurchasesAndRentals(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onDemandRegions = new OnDemandRegions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onDemandSeasons = new OnDemandSeasons(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onDemandVideos = new OnDemandVideos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.portfoliosEssentials = new PortfoliosEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.portfoliosVideos = new PortfoliosVideos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.projectsEssentials = new ProjectsEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.projectsVideos = new ProjectsVideos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.tagsEssentials = new TagsEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.usersEssentials = new UsersEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.usersFeed = new UsersFeed(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.usersFollows = new UsersFollows(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.usersInternal = new UsersInternal(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.usersPictures = new UsersPictures(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.usersWatchHistory = new UsersWatchHistory(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosComments = new VideosComments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosContentRatings = new VideosContentRatings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosCreativeCommons = new VideosCreativeCommons(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosCredits = new VideosCredits(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosEmbedPrivacy = new VideosEmbedPrivacy(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosEssentials = new VideosEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosLanguages = new VideosLanguages(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosRecommendations = new VideosRecommendations(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosTags = new VideosTags(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosTextTracks = new VideosTextTracks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosThumbnails = new VideosThumbnails(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosUpload = new VideosUpload(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosVersions = new VideosVersions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videosViewingPrivacy = new VideosViewingPrivacy(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.watchLaterQueueEssentials = new WatchLaterQueueEssentials(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
