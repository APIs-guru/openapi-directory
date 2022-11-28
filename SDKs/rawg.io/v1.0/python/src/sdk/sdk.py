

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.rawg.io/api",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def creator_roles_list(self, request: operations.CreatorRolesListRequest) -> operations.CreatorRolesListResponse:
        r"""Get a list of creator positions (jobs).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/creator-roles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatorRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatorRolesList200ApplicationJSON])
                res.creator_roles_list_200_application_json_object = out

        return res

    
    def creators_list(self, request: operations.CreatorsListRequest) -> operations.CreatorsListResponse:
        r"""Get a list of game creators.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/creators"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatorsList200ApplicationJSON])
                res.creators_list_200_application_json_object = out

        return res

    
    def creators_read(self, request: operations.CreatorsReadRequest) -> operations.CreatorsReadResponse:
        r"""Get details of the creator.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/creators/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatorsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonSingle])
                res.person_single = out

        return res

    
    def developers_list(self, request: operations.DevelopersListRequest) -> operations.DevelopersListResponse:
        r"""Get a list of game developers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/developers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DevelopersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DevelopersList200ApplicationJSON])
                res.developers_list_200_application_json_object = out

        return res

    
    def developers_read(self, request: operations.DevelopersReadRequest) -> operations.DevelopersReadResponse:
        r"""Get details of the developer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developers/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DevelopersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeveloperSingle])
                res.developer_single = out

        return res

    
    def games_achievements_read(self, request: operations.GamesAchievementsReadRequest) -> operations.GamesAchievementsReadResponse:
        r"""Get a list of game achievements.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/achievements", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAchievementsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ParentAchievement])
                res.parent_achievement = out

        return res

    
    def games_additions_list(self, request: operations.GamesAdditionsListRequest) -> operations.GamesAdditionsListResponse:
        r"""Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/additions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAdditionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesAdditionsList200ApplicationJSON])
                res.games_additions_list_200_application_json_object = out

        return res

    
    def games_development_team_list(self, request: operations.GamesDevelopmentTeamListRequest) -> operations.GamesDevelopmentTeamListResponse:
        r"""Get a list of individual creators that were part of the development team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/development-team", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesDevelopmentTeamListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesDevelopmentTeamList200ApplicationJSON])
                res.games_development_team_list_200_application_json_object = out

        return res

    
    def games_game_series_list(self, request: operations.GamesGameSeriesListRequest) -> operations.GamesGameSeriesListResponse:
        r"""Get a list of games that are part of the same series.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/game-series", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesGameSeriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesGameSeriesList200ApplicationJSON])
                res.games_game_series_list_200_application_json_object = out

        return res

    
    def games_list(self, request: operations.GamesListRequest) -> operations.GamesListResponse:
        r"""Get a list of games.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesList200ApplicationJSON])
                res.games_list_200_application_json_object = out

        return res

    
    def games_movies_read(self, request: operations.GamesMoviesReadRequest) -> operations.GamesMoviesReadResponse:
        r"""Get a list of game trailers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/movies", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesMoviesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Movie])
                res.movie = out

        return res

    
    def games_parent_games_list(self, request: operations.GamesParentGamesListRequest) -> operations.GamesParentGamesListResponse:
        r"""Get a list of parent games for DLC's and editions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/parent-games", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesParentGamesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesParentGamesList200ApplicationJSON])
                res.games_parent_games_list_200_application_json_object = out

        return res

    
    def games_read(self, request: operations.GamesReadRequest) -> operations.GamesReadResponse:
        r"""Get details of the game.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GameSingle])
                res.game_single = out

        return res

    
    def games_reddit_read(self, request: operations.GamesRedditReadRequest) -> operations.GamesRedditReadResponse:
        r"""Get a list of most recent posts from the game's subreddit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/reddit", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesRedditReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reddit])
                res.reddit = out

        return res

    
    def games_screenshots_list(self, request: operations.GamesScreenshotsListRequest) -> operations.GamesScreenshotsListResponse:
        r"""Get screenshots for the game.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/screenshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesScreenshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesScreenshotsList200ApplicationJSON])
                res.games_screenshots_list_200_application_json_object = out

        return res

    
    def games_stores_list(self, request: operations.GamesStoresListRequest) -> operations.GamesStoresListResponse:
        r"""Get links to the stores that sell the game.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{game_pk}/stores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesStoresListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GamesStoresList200ApplicationJSON])
                res.games_stores_list_200_application_json_object = out

        return res

    
    def games_suggested_read(self, request: operations.GamesSuggestedReadRequest) -> operations.GamesSuggestedReadResponse:
        r"""Get a list of visually similar games, available only for business and enterprise API users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/suggested", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesSuggestedReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GameSingle])
                res.game_single = out

        return res

    
    def games_twitch_read(self, request: operations.GamesTwitchReadRequest) -> operations.GamesTwitchReadResponse:
        r"""Get streams on Twitch associated with the game, available only for business and enterprise API users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/twitch", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesTwitchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Twitch])
                res.twitch = out

        return res

    
    def games_youtube_read(self, request: operations.GamesYoutubeReadRequest) -> operations.GamesYoutubeReadResponse:
        r"""Get videos from YouTube associated with the game, available only for business and enterprise API users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/{id}/youtube", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesYoutubeReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Youtube])
                res.youtube = out

        return res

    
    def genres_list(self, request: operations.GenresListRequest) -> operations.GenresListResponse:
        r"""Get a list of video game genres.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/genres"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GenresListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GenresList200ApplicationJSON])
                res.genres_list_200_application_json_object = out

        return res

    
    def genres_read(self, request: operations.GenresReadRequest) -> operations.GenresReadResponse:
        r"""Get details of the genre.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genres/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenresReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenreSingle])
                res.genre_single = out

        return res

    
    def platforms_list(self, request: operations.PlatformsListRequest) -> operations.PlatformsListResponse:
        r"""Get a list of video game platforms.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platforms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlatformsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PlatformsList200ApplicationJSON])
                res.platforms_list_200_application_json_object = out

        return res

    
    def platforms_lists_parents_list(self, request: operations.PlatformsListsParentsListRequest) -> operations.PlatformsListsParentsListResponse:
        r"""Get a list of parent platforms.
        For instance, for PS2 and PS4 the “parent platform” is PlayStation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platforms/lists/parents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlatformsListsParentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PlatformsListsParentsList200ApplicationJSON])
                res.platforms_lists_parents_list_200_application_json_object = out

        return res

    
    def platforms_read(self, request: operations.PlatformsReadRequest) -> operations.PlatformsReadResponse:
        r"""Get details of the platform.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platforms/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PlatformsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlatformSingle])
                res.platform_single = out

        return res

    
    def publishers_list(self, request: operations.PublishersListRequest) -> operations.PublishersListResponse:
        r"""Get a list of video game publishers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/publishers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PublishersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PublishersList200ApplicationJSON])
                res.publishers_list_200_application_json_object = out

        return res

    
    def publishers_read(self, request: operations.PublishersReadRequest) -> operations.PublishersReadResponse:
        r"""Get details of the publisher.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/publishers/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PublishersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublisherSingle])
                res.publisher_single = out

        return res

    
    def stores_list(self, request: operations.StoresListRequest) -> operations.StoresListResponse:
        r"""Get a list of video game storefronts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stores"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StoresListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.StoresList200ApplicationJSON])
                res.stores_list_200_application_json_object = out

        return res

    
    def stores_read(self, request: operations.StoresReadRequest) -> operations.StoresReadResponse:
        r"""Get details of the store.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stores/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoresReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoreSingle])
                res.store_single = out

        return res

    
    def tags_list(self, request: operations.TagsListRequest) -> operations.TagsListResponse:
        r"""Get a list of tags.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TagsList200ApplicationJSON])
                res.tags_list_200_application_json_object = out

        return res

    
    def tags_read(self, request: operations.TagsReadRequest) -> operations.TagsReadResponse:
        r"""Get details of the tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TagsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagSingle])
                res.tag_single = out

        return res

    