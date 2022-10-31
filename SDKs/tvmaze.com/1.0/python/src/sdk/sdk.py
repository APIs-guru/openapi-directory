import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.tvmaze.com/v1",
	"http://api.tvmaze.com/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def delete_user_episodes_episode_id_(self, request: operations.DeleteUserEpisodesEpisodeIDRequest) -> operations.DeleteUserEpisodesEpisodeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/episodes/{episode_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_follows_networks_network_id_(self, request: operations.DeleteUserFollowsNetworksNetworkIDRequest) -> operations.DeleteUserFollowsNetworksNetworkIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/networks/{network_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserFollowsNetworksNetworkIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_follows_people_person_id_(self, request: operations.DeleteUserFollowsPeoplePersonIDRequest) -> operations.DeleteUserFollowsPeoplePersonIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/people/{person_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserFollowsPeoplePersonIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_follows_shows_show_id_(self, request: operations.DeleteUserFollowsShowsShowIDRequest) -> operations.DeleteUserFollowsShowsShowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/shows/{show_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserFollowsShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_follows_webchannels_webchannel_id_(self, request: operations.DeleteUserFollowsWebchannelsWebchannelIDRequest) -> operations.DeleteUserFollowsWebchannelsWebchannelIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/webchannels/{webchannel_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserFollowsWebchannelsWebchannelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_tags_tag_id_(self, request: operations.DeleteUserTagsTagIDRequest) -> operations.DeleteUserTagsTagIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/tags/{tag_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserTagsTagIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_tags_tag_id_shows_show_id_(self, request: operations.DeleteUserTagsTagIDShowsShowIDRequest) -> operations.DeleteUserTagsTagIDShowsShowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/tags/{tag_id}/shows/{show_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserTagsTagIDShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_votes_episodes_episode_id_(self, request: operations.DeleteUserVotesEpisodesEpisodeIDRequest) -> operations.DeleteUserVotesEpisodesEpisodeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/votes/episodes/{episode_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserVotesEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_votes_shows_show_id_(self, request: operations.DeleteUserVotesShowsShowIDRequest) -> operations.DeleteUserVotesShowsShowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/votes/shows/{show_id}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserVotesShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_auth_validate(self) -> operations.GetAuthValidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/auth/validate"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthValidate200ApplicationJSON])
                res.get_auth_validate_200_application_json_object = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_scrobble_shows_show_id_(self, request: operations.GetScrobbleShowsShowIDRequest) -> operations.GetScrobbleShowsShowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/scrobble/shows/{show_id}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScrobbleShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MarkedEpisode]])
                res.marked_episodes = out

        return res

    
    def get_user_episodes(self, request: operations.GetUserEpisodesRequest) -> operations.GetUserEpisodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/episodes"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MarkedEpisode]])
                res.marked_episodes = out

        return res

    
    def get_user_episodes_episode_id_(self, request: operations.GetUserEpisodesEpisodeIDRequest) -> operations.GetUserEpisodesEpisodeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/episodes/{episode_id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarkedEpisode])
                res.marked_episode = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_follows_networks(self, request: operations.GetUserFollowsNetworksRequest) -> operations.GetUserFollowsNetworksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/follows/networks"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NetworkFollow]])
                res.network_follows = out

        return res

    
    def get_user_follows_networks_network_id_(self, request: operations.GetUserFollowsNetworksNetworkIDRequest) -> operations.GetUserFollowsNetworksNetworkIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/networks/{network_id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsNetworksNetworkIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NetworkFollow])
                res.network_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_follows_people(self, request: operations.GetUserFollowsPeopleRequest) -> operations.GetUserFollowsPeopleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/follows/people"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsPeopleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PersonFollow]])
                res.person_follows = out

        return res

    
    def get_user_follows_people_person_id_(self, request: operations.GetUserFollowsPeoplePersonIDRequest) -> operations.GetUserFollowsPeoplePersonIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/people/{person_id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsPeoplePersonIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonFollow])
                res.person_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_follows_shows(self, request: operations.GetUserFollowsShowsRequest) -> operations.GetUserFollowsShowsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/follows/shows"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ShowFollow]])
                res.show_follows = out

        return res

    
    def get_user_follows_shows_show_id_(self, request: operations.GetUserFollowsShowsShowIDRequest) -> operations.GetUserFollowsShowsShowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/shows/{show_id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShowFollow])
                res.show_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_follows_webchannels(self, request: operations.GetUserFollowsWebchannelsRequest) -> operations.GetUserFollowsWebchannelsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/follows/webchannels"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsWebchannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WebchannelFollow]])
                res.webchannel_follows = out

        return res

    
    def get_user_follows_webchannels_webchannel_id_(self, request: operations.GetUserFollowsWebchannelsWebchannelIDRequest) -> operations.GetUserFollowsWebchannelsWebchannelIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/webchannels/{webchannel_id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsWebchannelsWebchannelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebchannelFollow])
                res.webchannel_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_tags(self) -> operations.GetUserTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/tags"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Tag]])
                res.tags = out

        return res

    
    def get_user_tags_tag_id_shows(self, request: operations.GetUserTagsTagIDShowsRequest) -> operations.GetUserTagsTagIDShowsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/tags/{tag_id}/shows", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserTagsTagIDShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagInstance]])
                res.tag_instances = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_votes_episodes(self) -> operations.GetUserVotesEpisodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/votes/episodes"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVotesEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EpisodeVote]])
                res.episode_votes = out

        return res

    
    def get_user_votes_episodes_episode_id_(self, request: operations.GetUserVotesEpisodesEpisodeIDRequest) -> operations.GetUserVotesEpisodesEpisodeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/votes/episodes/{episode_id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVotesEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EpisodeVote])
                res.episode_vote = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_votes_shows(self, request: operations.GetUserVotesShowsRequest) -> operations.GetUserVotesShowsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/votes/shows"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVotesShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ShowVote]])
                res.show_votes = out

        return res

    
    def get_user_votes_shows_show_id_(self, request: operations.GetUserVotesShowsShowIDRequest) -> operations.GetUserVotesShowsShowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/votes/shows/{show_id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVotesShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShowVote])
                res.show_vote = out
        elif r.status_code == 404:
            pass

        return res

    
    def patch_user_tags_tag_id_(self, request: operations.PatchUserTagsTagIDRequest) -> operations.PatchUserTagsTagIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/tags/{tag_id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchUserTagsTagIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def post_auth_poll(self, request: operations.PostAuthPollRequest) -> operations.PostAuthPollResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/auth/poll"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthPollResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthPoll200ApplicationJSON])
                res.post_auth_poll_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def post_auth_start(self, request: operations.PostAuthStartRequest) -> operations.PostAuthStartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/auth/start"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthStart200ApplicationJSON])
                res.post_auth_start_200_application_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def post_scrobble_episodes(self, request: operations.PostScrobbleEpisodesRequest) -> operations.PostScrobbleEpisodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/scrobble/episodes"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostScrobbleEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.bulk_response = out
        elif r.status_code == 207:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.bulk_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.bulk_response = out

        return res

    
    def post_scrobble_shows(self, request: operations.PostScrobbleShowsRequest) -> operations.PostScrobbleShowsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/scrobble/shows"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostScrobbleShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.bulk_response = out
        elif r.status_code == 207:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.bulk_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.bulk_response = out

        return res

    
    def post_user_tags(self, request: operations.PostUserTagsRequest) -> operations.PostUserTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user/tags"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
        elif r.status_code == 422:
            pass

        return res

    
    def put_scrobble_episodes_episode_id_(self, request: operations.PutScrobbleEpisodesEpisodeIDRequest) -> operations.PutScrobbleEpisodesEpisodeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/scrobble/episodes/{episode_id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutScrobbleEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarkedEpisode])
                res.marked_episode = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def put_user_episodes_episode_id_(self, request: operations.PutUserEpisodesEpisodeIDRequest) -> operations.PutUserEpisodesEpisodeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/episodes/{episode_id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarkedEpisode])
                res.marked_episode = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def put_user_follows_networks_network_id_(self, request: operations.PutUserFollowsNetworksNetworkIDRequest) -> operations.PutUserFollowsNetworksNetworkIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/networks/{network_id}", request.path_params)

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserFollowsNetworksNetworkIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NetworkFollow])
                res.network_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_follows_people_person_id_(self, request: operations.PutUserFollowsPeoplePersonIDRequest) -> operations.PutUserFollowsPeoplePersonIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/people/{person_id}", request.path_params)

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserFollowsPeoplePersonIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonFollow])
                res.person_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_follows_shows_show_id_(self, request: operations.PutUserFollowsShowsShowIDRequest) -> operations.PutUserFollowsShowsShowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/shows/{show_id}", request.path_params)

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserFollowsShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShowFollow])
                res.show_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_follows_webchannels_webchannel_id_(self, request: operations.PutUserFollowsWebchannelsWebchannelIDRequest) -> operations.PutUserFollowsWebchannelsWebchannelIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/follows/webchannels/{webchannel_id}", request.path_params)

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserFollowsWebchannelsWebchannelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebchannelFollow])
                res.webchannel_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_tags_tag_id_shows_show_id_(self, request: operations.PutUserTagsTagIDShowsShowIDRequest) -> operations.PutUserTagsTagIDShowsShowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/tags/{tag_id}/shows/{show_id}", request.path_params)

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserTagsTagIDShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagInstance])
                res.tag_instance = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_votes_episodes_episode_id_(self, request: operations.PutUserVotesEpisodesEpisodeIDRequest) -> operations.PutUserVotesEpisodesEpisodeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/votes/episodes/{episode_id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserVotesEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EpisodeVote])
                res.episode_vote = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_votes_shows_show_id_(self, request: operations.PutUserVotesShowsShowIDRequest) -> operations.PutUserVotesShowsShowIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/user/votes/shows/{show_id}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserVotesShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShowVote])
                res.show_vote = out
        elif r.status_code == 404:
            pass

        return res

    