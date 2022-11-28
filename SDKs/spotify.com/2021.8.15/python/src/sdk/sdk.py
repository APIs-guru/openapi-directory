
__doc__ = """ SDK Documentation: https://developer.spotify.com/documentation/web-api/reference - Find more info on the official Spotify Web API Reference"""
import requests

from . import utils

from .category_albums import CategoryAlbums
from .category_artists import CategoryArtists
from .category_browse import CategoryBrowse
from .category_episodes import CategoryEpisodes
from .category_follow import CategoryFollow
from .category_library import CategoryLibrary
from .category_markets import CategoryMarkets
from .category_personalization import CategoryPersonalization
from .category_player import CategoryPlayer
from .category_playlists import CategoryPlaylists
from .category_search import CategorySearch
from .category_shows import CategoryShows
from .category_tracks import CategoryTracks
from .category_users_profile import CategoryUsersProfile


SERVERS = [
	"https://api.spotify.com/v1",
]


class SDK:
    r"""SDK Documentation: https://developer.spotify.com/documentation/web-api/reference - Find more info on the official Spotify Web API Reference"""
    category_albums: CategoryAlbums
    category_artists: CategoryArtists
    category_browse: CategoryBrowse
    category_episodes: CategoryEpisodes
    category_follow: CategoryFollow
    category_library: CategoryLibrary
    category_markets: CategoryMarkets
    category_personalization: CategoryPersonalization
    category_player: CategoryPlayer
    category_playlists: CategoryPlaylists
    category_search: CategorySearch
    category_shows: CategoryShows
    category_tracks: CategoryTracks
    category_users_profile: CategoryUsersProfile

    _client: requests.Session
    _security_client: requests.Session
    
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
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.category_albums = CategoryAlbums(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_artists = CategoryArtists(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_browse = CategoryBrowse(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_episodes = CategoryEpisodes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_follow = CategoryFollow(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_library = CategoryLibrary(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_markets = CategoryMarkets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_personalization = CategoryPersonalization(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_player = CategoryPlayer(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_playlists = CategoryPlaylists(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_search = CategorySearch(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_shows = CategoryShows(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_tracks = CategoryTracks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.category_users_profile = CategoryUsersProfile(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    