

import requests
from typing import List,Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://vocadb.net",
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
        
    
    
    
    def activity_entry_api_get_list(self, request: operations.ActivityEntryAPIGetListRequest) -> operations.ActivityEntryAPIGetListResponse:
        r"""Gets a list of recent activity entries.
        Entries are always returned sorted from newest to oldest.
                    Activity for deleted entries is not returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/activityEntries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityEntryAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultActivityEntryForAPIContract])
                res.partial_find_result_activity_entry_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultActivityEntryForAPIContract])
                res.partial_find_result_activity_entry_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultActivityEntryForAPIContract])
                res.partial_find_result_activity_entry_for_api_contract_ = out

        return res

    
    def album_api_delete(self, request: operations.AlbumAPIDeleteRequest) -> operations.AlbumAPIDeleteResponse:
        r"""Deletes an album.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def album_api_delete_comment(self, request: operations.AlbumAPIDeleteCommentRequest) -> operations.AlbumAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def album_api_delete_review(self, request: operations.AlbumAPIDeleteReviewRequest) -> operations.AlbumAPIDeleteReviewResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/reviews/{reviewId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIDeleteReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def album_api_get_comments(self, request: operations.AlbumAPIGetCommentsRequest) -> operations.AlbumAPIGetCommentsResponse:
        r"""Gets a list of comments for an album.
        Pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out

        return res

    
    def album_api_get_list(self, request: operations.AlbumAPIGetListRequest) -> operations.AlbumAPIGetListResponse:
        r"""Gets a page of albums.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/albums"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForAPIContract])
                res.partial_find_result_album_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForAPIContract])
                res.partial_find_result_album_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForAPIContract])
                res.partial_find_result_album_for_api_contract_ = out

        return res

    
    def album_api_get_names(self, request: operations.AlbumAPIGetNamesRequest) -> operations.AlbumAPIGetNamesResponse:
        r"""Gets a list of album names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/albums/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.album_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.album_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.album_api_get_names_200_text_json_strings = out

        return res

    
    def album_api_get_new_albums(self, request: operations.AlbumAPIGetNewAlbumsRequest) -> operations.AlbumAPIGetNewAlbumsResponse:
        r"""Gets list of upcoming or recent albums, same as front page.
        Output is cached for 1 hour.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/albums/new"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetNewAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out

        return res

    
    def album_api_get_one(self, request: operations.AlbumAPIGetOneRequest) -> operations.AlbumAPIGetOneResponse:
        r"""Gets an album by Id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForAPIContract])
                res.album_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForAPIContract])
                res.album_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForAPIContract])
                res.album_for_api_contract = out

        return res

    
    def album_api_get_reviews(self, request: operations.AlbumAPIGetReviewsRequest) -> operations.AlbumAPIGetReviewsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/reviews", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumReviewContract]])
                res.album_review_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumReviewContract]])
                res.album_review_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumReviewContract]])
                res.album_review_contracts = out

        return res

    
    def album_api_get_top_albums(self, request: operations.AlbumAPIGetTopAlbumsRequest) -> operations.AlbumAPIGetTopAlbumsResponse:
        r"""Gets list of top rated albums, same as front page.
        Output is cached for 1 hour.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/albums/top"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetTopAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out

        return res

    
    def album_api_get_tracks(self, request: operations.AlbumAPIGetTracksRequest) -> operations.AlbumAPIGetTracksResponse:
        r"""Gets tracks for an album.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/tracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongInAlbumForAPIContract]])
                res.song_in_album_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongInAlbumForAPIContract]])
                res.song_in_album_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongInAlbumForAPIContract]])
                res.song_in_album_for_api_contracts = out

        return res

    
    def album_api_get_tracks_fields(self, request: operations.AlbumAPIGetTracksFieldsRequest) -> operations.AlbumAPIGetTracksFieldsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/tracks/fields", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetTracksFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, str]]])
                res.album_api_get_tracks_fields_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, str]]])
                res.album_api_get_tracks_fields_200_application_jsonp_objects = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, str]]])
                res.album_api_get_tracks_fields_200_text_json_objects = out

        return res

    
    def album_api_get_user_collections(self, request: operations.AlbumAPIGetUserCollectionsRequest) -> operations.AlbumAPIGetUserCollectionsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/user-collections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetUserCollectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForUserForAPIContract]])
                res.album_for_user_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForUserForAPIContract]])
                res.album_for_user_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForUserForAPIContract]])
                res.album_for_user_for_api_contracts = out

        return res

    
    def artist_api_delete(self, request: operations.ArtistAPIDeleteRequest) -> operations.ArtistAPIDeleteResponse:
        r"""Deletes an artist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/artists/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def artist_api_delete_comment(self, request: operations.ArtistAPIDeleteCommentRequest) -> operations.ArtistAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/artists/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def artist_api_get_comments(self, request: operations.ArtistAPIGetCommentsRequest) -> operations.ArtistAPIGetCommentsResponse:
        r"""Gets a list of comments for an artist.
        Pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/artists/{id}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out

        return res

    
    def artist_api_get_list(self, request: operations.ArtistAPIGetListRequest) -> operations.ArtistAPIGetListResponse:
        r"""Find artists.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/artists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForAPIContract])
                res.partial_find_result_artist_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForAPIContract])
                res.partial_find_result_artist_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForAPIContract])
                res.partial_find_result_artist_for_api_contract_ = out

        return res

    
    def artist_api_get_names(self, request: operations.ArtistAPIGetNamesRequest) -> operations.ArtistAPIGetNamesResponse:
        r"""Gets a list of artist names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/artists/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.artist_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.artist_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.artist_api_get_names_200_text_json_strings = out

        return res

    
    def artist_api_get_one(self, request: operations.ArtistAPIGetOneRequest) -> operations.ArtistAPIGetOneResponse:
        r"""Gets an artist by Id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/artists/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForAPIContract])
                res.artist_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForAPIContract])
                res.artist_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForAPIContract])
                res.artist_for_api_contract = out

        return res

    
    def comment_api_delete_comment(self, request: operations.CommentAPIDeleteCommentRequest) -> operations.CommentAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/comments/{entryType}-comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CommentAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def comment_api_get_comments(self, request: operations.CommentAPIGetCommentsRequest) -> operations.CommentAPIGetCommentsResponse:
        r"""Gets a list of comments for an entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/comments/{entryType}-comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CommentAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out

        return res

    
    def discussion_api_delete_comment(self, request: operations.DiscussionAPIDeleteCommentRequest) -> operations.DiscussionAPIDeleteCommentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/discussions/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def discussion_api_delete_topic(self, request: operations.DiscussionAPIDeleteTopicRequest) -> operations.DiscussionAPIDeleteTopicResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/discussions/topics/{topicId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIDeleteTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def discussion_api_get_folders(self, request: operations.DiscussionAPIGetFoldersRequest) -> operations.DiscussionAPIGetFoldersResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/discussions/folders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIGetFoldersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DiscussionFolderContract]])
                res.discussion_folder_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DiscussionFolderContract]])
                res.discussion_folder_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DiscussionFolderContract]])
                res.discussion_folder_contracts = out

        return res

    
    def discussion_api_get_topic(self, request: operations.DiscussionAPIGetTopicRequest) -> operations.DiscussionAPIGetTopicResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/discussions/topics/{topicId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIGetTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DiscussionTopicContract])
                res.discussion_topic_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.DiscussionTopicContract])
                res.discussion_topic_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DiscussionTopicContract])
                res.discussion_topic_contract = out

        return res

    
    def discussion_api_get_topics(self, request: operations.DiscussionAPIGetTopicsRequest) -> operations.DiscussionAPIGetTopicsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/discussions/topics"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIGetTopicsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultDiscussionTopicContract])
                res.partial_find_result_discussion_topic_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultDiscussionTopicContract])
                res.partial_find_result_discussion_topic_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultDiscussionTopicContract])
                res.partial_find_result_discussion_topic_contract_ = out

        return res

    
    def discussion_api_get_topics_for_folder(self, request: operations.DiscussionAPIGetTopicsForFolderRequest) -> operations.DiscussionAPIGetTopicsForFolderResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/discussions/folders/{folderId}/topics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIGetTopicsForFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DiscussionTopicContract]])
                res.discussion_topic_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DiscussionTopicContract]])
                res.discussion_topic_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DiscussionTopicContract]])
                res.discussion_topic_contracts = out

        return res

    
    def entry_api_get_list(self, request: operations.EntryAPIGetListRequest) -> operations.EntryAPIGetListResponse:
        r"""Find entries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/entries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EntryAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultEntryForAPIContract])
                res.partial_find_result_entry_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultEntryForAPIContract])
                res.partial_find_result_entry_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultEntryForAPIContract])
                res.partial_find_result_entry_for_api_contract_ = out

        return res

    
    def entry_api_get_names(self, request: operations.EntryAPIGetNamesRequest) -> operations.EntryAPIGetNamesResponse:
        r"""Gets a list of entry names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/entries/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EntryAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.entry_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.entry_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.entry_api_get_names_200_text_json_strings = out

        return res

    
    def entry_types_api_get_mapped_tag(self, request: operations.EntryTypesAPIGetMappedTagRequest) -> operations.EntryTypesAPIGetMappedTagResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/entry-types/{entryType}/{subType}/tag", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EntryTypesAPIGetMappedTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out

        return res

    
    def get_api_users_current_album_collection_statuses_album_id_(self, request: operations.GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDRequest) -> operations.GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/album-collection-statuses/{albumId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out

        return res

    
    def get_api_users_current_followed_artists_artist_id_(self, request: operations.GetAPIUsersCurrentFollowedArtistsArtistIDRequest) -> operations.GetAPIUsersCurrentFollowedArtistsArtistIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/followedArtists/{artistId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIUsersCurrentFollowedArtistsArtistIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out

        return res

    
    def pv_api_get_list(self, request: operations.PvAPIGetListRequest) -> operations.PvAPIGetListResponse:
        r"""Gets a list of PVs for songs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/pvs/for-songs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PvAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultPvForSongContract])
                res.partial_find_result_pv_for_song_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultPvForSongContract])
                res.partial_find_result_pv_for_song_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultPvForSongContract])
                res.partial_find_result_pv_for_song_contract_ = out

        return res

    
    def release_event_api_delete(self, request: operations.ReleaseEventAPIDeleteRequest) -> operations.ReleaseEventAPIDeleteResponse:
        r"""Deletes an event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def release_event_api_get_albums(self, request: operations.ReleaseEventAPIGetAlbumsRequest) -> operations.ReleaseEventAPIGetAlbumsResponse:
        r"""Gets a list of albums for a specific event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{eventId}/albums", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out

        return res

    
    def release_event_api_get_list(self, request: operations.ReleaseEventAPIGetListRequest) -> operations.ReleaseEventAPIGetListResponse:
        r"""Gets a page of events.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/releaseEvents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventForAPIContract])
                res.partial_find_result_release_event_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventForAPIContract])
                res.partial_find_result_release_event_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventForAPIContract])
                res.partial_find_result_release_event_for_api_contract_ = out

        return res

    
    def release_event_api_get_names(self, request: operations.ReleaseEventAPIGetNamesRequest) -> operations.ReleaseEventAPIGetNamesResponse:
        r"""Find event names by a part of name.
                    
                    Matching is done anywhere from the name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/releaseEvents/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.release_event_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.release_event_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.release_event_api_get_names_200_text_json_strings = out

        return res

    
    def release_event_api_get_one(self, request: operations.ReleaseEventAPIGetOneRequest) -> operations.ReleaseEventAPIGetOneResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventForAPIContract])
                res.release_event_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventForAPIContract])
                res.release_event_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventForAPIContract])
                res.release_event_for_api_contract = out

        return res

    
    def release_event_api_get_published_songs(self, request: operations.ReleaseEventAPIGetPublishedSongsRequest) -> operations.ReleaseEventAPIGetPublishedSongsResponse:
        r"""Gets a list of songs for a specific event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{eventId}/published-songs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetPublishedSongsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out

        return res

    
    def release_event_api_post_report(self, request: operations.ReleaseEventAPIPostReportRequest) -> operations.ReleaseEventAPIPostReportResponse:
        r"""Creates a new report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{eventId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIPostReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def release_event_series_api_delete(self, request: operations.ReleaseEventSeriesAPIDeleteRequest) -> operations.ReleaseEventSeriesAPIDeleteResponse:
        r"""Deletes an event series.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEventSeries/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventSeriesAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def release_event_series_api_get_list(self, request: operations.ReleaseEventSeriesAPIGetListRequest) -> operations.ReleaseEventSeriesAPIGetListResponse:
        r"""Gets a page of event series.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/releaseEventSeries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventSeriesAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventSeriesForAPIContract])
                res.partial_find_result_release_event_series_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventSeriesForAPIContract])
                res.partial_find_result_release_event_series_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventSeriesForAPIContract])
                res.partial_find_result_release_event_series_for_api_contract_ = out

        return res

    
    def release_event_series_api_get_one(self, request: operations.ReleaseEventSeriesAPIGetOneRequest) -> operations.ReleaseEventSeriesAPIGetOneResponse:
        r"""Gets single event series by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEventSeries/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventSeriesAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventSeriesForAPIContract])
                res.release_event_series_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventSeriesForAPIContract])
                res.release_event_series_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventSeriesForAPIContract])
                res.release_event_series_for_api_contract = out

        return res

    
    def resources_api_get_list(self, request: operations.ResourcesAPIGetListRequest) -> operations.ResourcesAPIGetListResponse:
        r"""Gets a number of resource sets for a specific culture.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/resources/{cultureCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ResourcesAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, str]]])
                res.resources_api_get_list_200_application_json_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, str]]])
                res.resources_api_get_list_200_text_json_object = out

        return res

    
    def song_api_delete(self, request: operations.SongAPIDeleteRequest) -> operations.SongAPIDeleteResponse:
        r"""Deletes a song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def song_api_delete_comment(self, request: operations.SongAPIDeleteCommentRequest) -> operations.SongAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def song_api_get_by_id(self, request: operations.SongAPIGetByIDRequest) -> operations.SongAPIGetByIDResponse:
        r"""Gets a song by Id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out

        return res

    
    def song_api_get_by_pv(self, request: operations.SongAPIGetByPvRequest) -> operations.SongAPIGetByPvResponse:
        r"""Gets a song by PV.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs/byPv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetByPvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out

        return res

    
    def song_api_get_comments(self, request: operations.SongAPIGetCommentsRequest) -> operations.SongAPIGetCommentsResponse:
        r"""Gets a list of comments for a song.
        Pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out

        return res

    
    def song_api_get_derived(self, request: operations.SongAPIGetDerivedRequest) -> operations.SongAPIGetDerivedResponse:
        r"""Gets derived (alternate versions) of a song.
        Pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/derived", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetDerivedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out

        return res

    
    def song_api_get_highlighted_songs(self, request: operations.SongAPIGetHighlightedSongsRequest) -> operations.SongAPIGetHighlightedSongsResponse:
        r"""Gets list of highlighted songs, same as front page.
        Output is cached for 1 hour.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs/highlighted"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetHighlightedSongsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out

        return res

    
    def song_api_get_list(self, request: operations.SongAPIGetListRequest) -> operations.SongAPIGetListResponse:
        r"""Find songs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongForAPIContract])
                res.partial_find_result_song_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongForAPIContract])
                res.partial_find_result_song_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongForAPIContract])
                res.partial_find_result_song_for_api_contract_ = out

        return res

    
    def song_api_get_lyrics(self, request: operations.SongAPIGetLyricsRequest) -> operations.SongAPIGetLyricsResponse:
        r"""Gets lyrics by ID.
        Output is cached. Specify song version as parameter to refresh.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/lyrics/{lyricsId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetLyricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LyricsForSongContract])
                res.lyrics_for_song_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.LyricsForSongContract])
                res.lyrics_for_song_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LyricsForSongContract])
                res.lyrics_for_song_contract = out

        return res

    
    def song_api_get_names(self, request: operations.SongAPIGetNamesRequest) -> operations.SongAPIGetNamesResponse:
        r"""Gets a list of song names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.song_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.song_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.song_api_get_names_200_text_json_strings = out

        return res

    
    def song_api_get_ratings(self, request: operations.SongAPIGetRatingsRequest) -> operations.SongAPIGetRatingsResponse:
        r"""Get ratings for a song.
        The result includes ratings and user information.
                    For users who have requested not to make their ratings public, the user will be empty.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/ratings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetRatingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RatedSongForUserForAPIContract]])
                res.rated_song_for_user_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RatedSongForUserForAPIContract]])
                res.rated_song_for_user_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RatedSongForUserForAPIContract]])
                res.rated_song_for_user_for_api_contracts = out

        return res

    
    def song_api_get_related(self, request: operations.SongAPIGetRelatedRequest) -> operations.SongAPIGetRelatedResponse:
        r"""Gets related songs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/related", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetRelatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedSongsContract])
                res.related_songs_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedSongsContract])
                res.related_songs_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedSongsContract])
                res.related_songs_contract = out

        return res

    
    def song_api_get_top_songs(self, request: operations.SongAPIGetTopSongsRequest) -> operations.SongAPIGetTopSongsResponse:
        r"""Gets top rated songs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs/top-rated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetTopSongsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SongForAPIContract]])
                res.song_for_api_contracts = out

        return res

    
    def song_api_post_rating(self, request: operations.SongAPIPostRatingRequest) -> operations.SongAPIPostRatingResponse:
        r"""Add or update rating for a specific song, for the currently logged in user.
        If the user has already rated the song, any previous rating is replaced.
                    Authorization cookie must be included.
                    This API supports CORS.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/ratings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIPostRatingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def song_list_api_delete(self, request: operations.SongListAPIDeleteRequest) -> operations.SongListAPIDeleteResponse:
        r"""Deletes a song list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songLists/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def song_list_api_delete_comment(self, request: operations.SongListAPIDeleteCommentRequest) -> operations.SongListAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songLists/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def song_list_api_get_comments(self, request: operations.SongListAPIGetCommentsRequest) -> operations.SongListAPIGetCommentsResponse:
        r"""Gets a list of comments for a song list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songLists/{listId}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out

        return res

    
    def song_list_api_get_featured_list_names(self, request: operations.SongListAPIGetFeaturedListNamesRequest) -> operations.SongListAPIGetFeaturedListNamesResponse:
        r"""Gets a list of featuedd list names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songLists/featured/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIGetFeaturedListNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.song_list_api_get_featured_list_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.song_list_api_get_featured_list_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.song_list_api_get_featured_list_names_200_text_json_strings = out

        return res

    
    def song_list_api_get_featured_lists(self, request: operations.SongListAPIGetFeaturedListsRequest) -> operations.SongListAPIGetFeaturedListsResponse:
        r"""Gets a list of featured song lists.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songLists/featured"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIGetFeaturedListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongListForAPIContract])
                res.partial_find_result_song_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongListForAPIContract])
                res.partial_find_result_song_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongListForAPIContract])
                res.partial_find_result_song_list_for_api_contract_ = out

        return res

    
    def song_list_api_get_songs(self, request: operations.SongListAPIGetSongsRequest) -> operations.SongListAPIGetSongsResponse:
        r"""Gets a list of songs in a song list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songLists/{listId}/songs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIGetSongsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongInListForAPIContract])
                res.partial_find_result_song_in_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongInListForAPIContract])
                res.partial_find_result_song_in_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongInListForAPIContract])
                res.partial_find_result_song_in_list_for_api_contract_ = out

        return res

    
    def tag_api_delete(self, request: operations.TagAPIDeleteRequest) -> operations.TagAPIDeleteResponse:
        r"""Deletes a tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def tag_api_delete_comment(self, request: operations.TagAPIDeleteCommentRequest) -> operations.TagAPIDeleteCommentResponse:
        r"""Deletes a comment.
                    Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def tag_api_get_by_id(self, request: operations.TagAPIGetByIDRequest) -> operations.TagAPIGetByIDResponse:
        r"""Gets a tag by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out

        return res

    
    def tag_api_get_by_name(self, request: operations.TagAPIGetByNameRequest) -> operations.TagAPIGetByNameResponse:
        r"""DEPRECATED. Gets a tag by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/byName/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out

        return res

    
    def tag_api_get_category_names_list(self, request: operations.TagAPIGetCategoryNamesListRequest) -> operations.TagAPIGetCategoryNamesListResponse:
        r"""Gets a list of tag category names.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags/categoryNames"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetCategoryNamesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.tag_api_get_category_names_list_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.tag_api_get_category_names_list_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.tag_api_get_category_names_list_200_text_json_strings = out

        return res

    
    def tag_api_get_child_tags(self, request: operations.TagAPIGetChildTagsRequest) -> operations.TagAPIGetChildTagsResponse:
        r"""Gets a list of child tags for a tag.
                    Only direct children will be included.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{tagId}/children", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetChildTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagForAPIContract]])
                res.tag_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagForAPIContract]])
                res.tag_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagForAPIContract]])
                res.tag_for_api_contracts = out

        return res

    
    def tag_api_get_comments(self, request: operations.TagAPIGetCommentsRequest) -> operations.TagAPIGetCommentsResponse:
        r"""Gets a list of comments for a tag.
                    Note: pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{tagId}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out

        return res

    
    def tag_api_get_list(self, request: operations.TagAPIGetListRequest) -> operations.TagAPIGetListResponse:
        r"""Find tags.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultTagForAPIContract])
                res.partial_find_result_tag_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultTagForAPIContract])
                res.partial_find_result_tag_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultTagForAPIContract])
                res.partial_find_result_tag_for_api_contract_ = out

        return res

    
    def tag_api_get_names(self, request: operations.TagAPIGetNamesRequest) -> operations.TagAPIGetNamesResponse:
        r"""Find tag names by a part of name.
                    
                    Matching is done anywhere from the name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.tag_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.tag_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.tag_api_get_names_200_text_json_strings = out

        return res

    
    def tag_api_get_top_tags(self, request: operations.TagAPIGetTopTagsRequest) -> operations.TagAPIGetTopTagsResponse:
        r"""Gets the most common tags in a category.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags/top"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetTopTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagBaseContract]])
                res.tag_base_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagBaseContract]])
                res.tag_base_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagBaseContract]])
                res.tag_base_contracts = out

        return res

    
    def tag_api_post_new_tag(self, request: operations.TagAPIPostNewTagRequest) -> operations.TagAPIPostNewTagResponse:
        r"""Creates a new tag.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIPostNewTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagBaseContract])
                res.tag_base_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagBaseContract])
                res.tag_base_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagBaseContract])
                res.tag_base_contract = out
        elif r.status_code == 400:
            pass

        return res

    
    def tag_api_post_report(self, request: operations.TagAPIPostReportRequest) -> operations.TagAPIPostReportResponse:
        r"""Creates a new report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{tagId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIPostReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_delete_followed_tag(self, request: operations.UserAPIDeleteFollowedTagRequest) -> operations.UserAPIDeleteFollowedTagResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/followedTags/{tagId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIDeleteFollowedTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_delete_messages(self, request: operations.UserAPIDeleteMessagesRequest) -> operations.UserAPIDeleteMessagesResponse:
        r"""Deletes a list of user messages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIDeleteMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_delete_profile_comment(self, request: operations.UserAPIDeleteProfileCommentRequest) -> operations.UserAPIDeleteProfileCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/profileComments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIDeleteProfileCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_get_album_collection(self, request: operations.UserAPIGetAlbumCollectionRequest) -> operations.UserAPIGetAlbumCollectionResponse:
        r"""Gets a list of albums in a user's collection.
        This includes albums that have been rated by the user as well as albums that the user has bought or wishlisted.
                    Note that the user might have set his album ownership status and media type as private, in which case those properties are not included.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/albums", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetAlbumCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForUserForAPIContract])
                res.partial_find_result_album_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForUserForAPIContract])
                res.partial_find_result_album_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForUserForAPIContract])
                res.partial_find_result_album_for_user_for_api_contract_ = out

        return res

    
    def user_api_get_album_for_user(self, request: operations.UserAPIGetAlbumForUserRequest) -> operations.UserAPIGetAlbumForUserResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/album-collection-statuses/{albumId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetAlbumForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out

        return res

    
    def user_api_get_artist_for_user(self, request: operations.UserAPIGetArtistForUserRequest) -> operations.UserAPIGetArtistForUserResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/followedArtists/{artistId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetArtistForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out

        return res

    
    def user_api_get_current(self, request: operations.UserAPIGetCurrentRequest) -> operations.UserAPIGetCurrentResponse:
        r"""Gets information about the currently logged in user.
        Requires login information.
                    This API supports CORS, and is restricted to specific origins.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/users/current"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetCurrentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out

        return res

    
    def user_api_get_events(self, request: operations.UserAPIGetEventsRequest) -> operations.UserAPIGetEventsResponse:
        r"""Gets a list of events a user has subscribed to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ReleaseEventForAPIContract]])
                res.release_event_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ReleaseEventForAPIContract]])
                res.release_event_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ReleaseEventForAPIContract]])
                res.release_event_for_api_contracts = out

        return res

    
    def user_api_get_followed_artists(self, request: operations.UserAPIGetFollowedArtistsRequest) -> operations.UserAPIGetFollowedArtistsResponse:
        r"""Gets a list of artists followed by a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/followedArtists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetFollowedArtistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForUserForAPIContract])
                res.partial_find_result_artist_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForUserForAPIContract])
                res.partial_find_result_artist_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForUserForAPIContract])
                res.partial_find_result_artist_for_user_for_api_contract_ = out

        return res

    
    def user_api_get_list(self, request: operations.UserAPIGetListRequest) -> operations.UserAPIGetListResponse:
        r"""Gets a list of users.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserForAPIContract])
                res.partial_find_result_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserForAPIContract])
                res.partial_find_result_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserForAPIContract])
                res.partial_find_result_user_for_api_contract_ = out

        return res

    
    def user_api_get_message(self, request: operations.UserAPIGetMessageRequest) -> operations.UserAPIGetMessageResponse:
        r"""Gets a user message.
        The message will be marked as read.
                    User can only load messages from their own inbox.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/messages/{messageId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserMessageContract])
                res.user_message_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserMessageContract])
                res.user_message_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserMessageContract])
                res.user_message_contract = out

        return res

    
    def user_api_get_messages(self, request: operations.UserAPIGetMessagesRequest) -> operations.UserAPIGetMessagesResponse:
        r"""Gets a list of messages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserMessageContract])
                res.partial_find_result_user_message_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserMessageContract])
                res.partial_find_result_user_message_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserMessageContract])
                res.partial_find_result_user_message_contract_ = out

        return res

    
    def user_api_get_names(self, request: operations.UserAPIGetNamesRequest) -> operations.UserAPIGetNamesResponse:
        r"""Gets a list of user names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/users/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.user_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.user_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.user_api_get_names_200_text_json_strings = out

        return res

    
    def user_api_get_one(self, request: operations.UserAPIGetOneRequest) -> operations.UserAPIGetOneResponse:
        r"""Gets user by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out

        return res

    
    def user_api_get_profile_comments(self, request: operations.UserAPIGetProfileCommentsRequest) -> operations.UserAPIGetProfileCommentsResponse:
        r"""Gets a list of comments posted on user's profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/profileComments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetProfileCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out

        return res

    
    def user_api_get_rated_songs(self, request: operations.UserAPIGetRatedSongsRequest) -> operations.UserAPIGetRatedSongsResponse:
        r"""Gets a list of songs rated by a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/ratedSongs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetRatedSongsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultRatedSongForUserForAPIContract])
                res.partial_find_result_rated_song_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultRatedSongForUserForAPIContract])
                res.partial_find_result_rated_song_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultRatedSongForUserForAPIContract])
                res.partial_find_result_rated_song_for_user_for_api_contract_ = out

        return res

    
    def user_api_get_song_lists(self, request: operations.UserAPIGetSongListsRequest) -> operations.UserAPIGetSongListsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/songLists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetSongListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongListForAPIContract])
                res.partial_find_result_song_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongListForAPIContract])
                res.partial_find_result_song_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongListForAPIContract])
                res.partial_find_result_song_list_for_api_contract_ = out

        return res

    
    def user_api_get_song_rating(self, request: operations.UserAPIGetSongRatingRequest) -> operations.UserAPIGetSongRatingResponse:
        r"""Gets a specific user's rating for a song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/ratedSongs/{songId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetSongRatingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRating200ApplicationJSONEnum])
                res.user_api_get_song_rating_200_application_json_string_enum = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRating200ApplicationJsonpEnum])
                res.user_api_get_song_rating_200_application_jsonp_string_enum = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRating200TextJSONEnum])
                res.user_api_get_song_rating_200_text_json_string_enum = out

        return res

    
    def user_api_get_song_rating_for_current(self, request: operations.UserAPIGetSongRatingForCurrentRequest) -> operations.UserAPIGetSongRatingForCurrentResponse:
        r"""Gets currently logged in user's rating for a song.
        Requires authentication.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/ratedSongs/{songId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetSongRatingForCurrentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRatingForCurrent200ApplicationJSONEnum])
                res.user_api_get_song_rating_for_current_200_application_json_string_enum = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum])
                res.user_api_get_song_rating_for_current_200_application_jsonp_string_enum = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRatingForCurrent200TextJSONEnum])
                res.user_api_get_song_rating_for_current_200_text_json_string_enum = out

        return res

    
    def user_api_post_album_status(self, request: operations.UserAPIPostAlbumStatusRequest) -> operations.UserAPIPostAlbumStatusResponse:
        r"""Add or update collection status, media type and rating for a specific album, for the currently logged in user.
        If the user has already rated the album, any previous rating is replaced.
                    Authorization cookie must be included.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/albums/{albumId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostAlbumStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.user_api_post_album_status_200_application_javascript_string = r.content
            if utils.match_content_type(content_type, "application/json"):
                res.user_api_post_album_status_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json-p"):
                res.user_api_post_album_status_200_application_jsonp_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.user_api_post_album_status_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.user_api_post_album_status_200_text_javascript_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.user_api_post_album_status_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.user_api_post_album_status_200_text_xml_string = r.content

        return res

    
    def user_api_post_followed_tag(self, request: operations.UserAPIPostFollowedTagRequest) -> operations.UserAPIPostFollowedTagResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/followedTags/{tagId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostFollowedTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_post_refresh_entry_edit(self, request: operations.UserAPIPostRefreshEntryEditRequest) -> operations.UserAPIPostRefreshEntryEditResponse:
        r"""Refresh entry edit status, indicating that the current user is still editing that entry.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/users/current/refreshEntryEdit"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostRefreshEntryEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_post_report(self, request: operations.UserAPIPostReportRequest) -> operations.UserAPIPostReportResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/reports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.user_api_post_report_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.user_api_post_report_200_application_jsonp_boolean = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.user_api_post_report_200_text_json_boolean = out

        return res

    
    def user_api_post_setting(self, request: operations.UserAPIPostSettingRequest) -> operations.UserAPIPostSettingResponse:
        r"""Updates user setting.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/settings/{settingName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def venue_api_delete(self, request: operations.VenueAPIDeleteRequest) -> operations.VenueAPIDeleteResponse:
        r"""Deletes a venue.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/venues/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VenueAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def venue_api_get_list(self, request: operations.VenueAPIGetListRequest) -> operations.VenueAPIGetListResponse:
        r"""Gets a page of event venue.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/venues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VenueAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultVenueForAPIContract])
                res.partial_find_result_venue_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultVenueForAPIContract])
                res.partial_find_result_venue_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultVenueForAPIContract])
                res.partial_find_result_venue_for_api_contract_ = out

        return res

    
    def venue_api_post_report(self, request: operations.VenueAPIPostReportRequest) -> operations.VenueAPIPostReportResponse:
        r"""Creates a new report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/venues/{id}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VenueAPIPostReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    