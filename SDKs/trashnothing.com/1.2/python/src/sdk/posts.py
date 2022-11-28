import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Posts:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def bookmark_post(self, request: operations.BookmarkPostRequest) -> operations.BookmarkPostResponse:
        r"""Bookmark a post
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/bookmark", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BookmarkPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_bookmark(self, request: operations.DeleteBookmarkRequest) -> operations.DeleteBookmarkResponse:
        r"""Delete a post bookmark
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/bookmark", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBookmarkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def flag_post(self, request: operations.FlagPostRequest) -> operations.FlagPostResponse:
        r"""Flag a post
        Flags a post to be reviewed by the moderators.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/flag", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FlagPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def geolocate_post(self, request: operations.GeolocatePostRequest) -> operations.GeolocatePostResponse:
        r"""Map a post
        Map a post to a specific location when the post is missing a location or has an incorrect location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/geolocate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GeolocatePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Post])
                res.post = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_all_posts(self, request: operations.GetAllPostsRequest) -> operations.GetAllPostsResponse:
        r"""List all posts
        This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts/all"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllPosts200ApplicationJSON])
                res.get_all_posts_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_all_posts_changes(self, request: operations.GetAllPostsChangesRequest) -> operations.GetAllPostsChangesResponse:
        r"""List all post changes
        This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts/all/changes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllPostsChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllPostsChanges200ApplicationJSON])
                res.get_all_posts_changes_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_post(self, request: operations.GetPostRequest) -> operations.GetPostResponse:
        r"""Retrieve a post
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Post])
                res.post = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_post_and_related_data(self, request: operations.GetPostAndRelatedDataRequest) -> operations.GetPostAndRelatedDataResponse:
        r"""Retrieve post display data
        Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/display", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostAndRelatedDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPostAndRelatedData200ApplicationJSON])
                res.get_post_and_related_data_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_post_client_javascript(self, request: operations.GetPostClientJavascriptRequest) -> operations.GetPostClientJavascriptResponse:
        r"""Retrieve client.js
        Defines javascript functions that can be used to validate and submit posts.
        
        The advantage of using these functions versus using the post submission endpoint directly is that
        some of the post validation checks can be done on the client side which will be faster.
        
        NOTE: If used, this javascript file MUST be loaded dynamically for each user because the contents
        of the file are generated dynamically based on the current user.  The file may be cached on a per
        user basis based on the HTTP cache headers that are returned when the file is requested (currently
        the cache headers specify that the file should expire after one day).
        
        
        The following functions are available:
        
        ---
        
        **window.TN.check_crossposting_restrictions(group_ids)**
        
        Checks for crossposting restrictions when the user selects more than one group to post to.
        
        Parameters:
        - **group_ids** is an array of group IDs
        
        Returns an object with three properties {allowed, restricted, restrictions}.
        
        - **allowed** is an array of the group IDs from group_ids that can be crossposted to
        
        - **restricted** is an array of the group IDs from group_ids that can't be crossposted to
        
        - **restrictions** is an object mapping group IDs that have crossposting restrictions to arrays of group IDs that are restricted.
          It is useful for pinpointing why a group ID shows up in the restricted array so that users can be provided feedback
          about the reason for the crossposting restriction (eg. a message like 'group A doesn't allow crossposting to group B').
        
        For example, given group_ids = [1, 2, 3, 4] and assuming group 1 doesn't allow posting to group 3 and group 2 doesn't allow
        posting to group 1, the returned object will be:
        
        {allowed: [4], restricted: [1, 2, 3], restrictions: {1: [3], 2: [1]}}
        
        
        ---
        
        **window.TN.submit_post(args, session, preferences, callback)**
        
        Submits a new post and performs validation checks on the post before it is accepted for submission.
        
        Parameters:
        
        - **args** is an object containing data about the post being submitted and must include
          the following properties:
        
          - type: The type of post.  One of: offer, wanted
          - title: A short description of the item(s).
          - location: A short location description.
        
          The following properties are optional:
        
          - content: A longer description of the item(s).
          - group_ids: An array of group IDs to submit the post to (if any).
          - fair_offer: If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
          - photo_ids: A comma separated list of the IDs of the photos that should be attached to this post.
          - latitude
          - longitude
        
        - **session** is a temporary object that is used by submit_post to store data about the submission
          process for a single post.  The first time submit_post is called with a post, session should
          be a new empty object (eg. {}).  The session object should be persisted until that post
          is successfully submitted and then it can be discarded so that the next post will start
          over with a new empty session object.  
        
        - **preferences** is a permanent object that the client persists and modifies based on warnings returned
          by the post submission process and user input.  Some post warnings passed to the callback object
          have a preference_key string property so that users can opt out of those warnings in the future.
          To save this opt-out preference, set the property indicated by the preference_key in the preferences
          object (eg. preferences[preference_key] = 1).  The preferences object is only read by submit_post and
          never modified - it is up to the client to initialize, modify and persist the preferences object.
        
        - **callback** is a function used to return the result of the post submission. It is called and passed
          one argument - an object with five properties {result, message, preference_key, identifier, session}.
          The result property is a string that is one of: success, error, warning.  The identifier property is
          set for errors and warnings and will contain a string that represents the type of error or warning that
          occurred.
        
          A success result indicates that the post was submitted successfully. Note that posts may not
          appear instantly after submission because the moderators of many groups may have additional
          automatic or manual review processes in place that can delay the publishing of a post.
          
          An error result indicates that there is an error with the post to show the user and the message property
          will contain text describing the error.
        
          A warning result indicates that there is a warning about the post to show the user and the
          message property will contain a string describing the warning.  A warning result doesn't prevent a post from
          being submitted, to continue the submission process after a warning result, just re-submit the post
          (with the updated session object) to temporarily override that specific warning.
        
          Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be 
          set in the preferences object by the client to opt out of that type of warning in the future (see the description
          of the preferences parameter for more details).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts/client.js"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostClientJavascriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_posts(self, request: operations.GetPostsRequest) -> operations.GetPostsResponse:
        r"""List posts
        NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
        NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPosts200ApplicationJSON])
                res.get_posts_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_posts_by_ids(self, request: operations.GetPostsByIdsRequest) -> operations.GetPostsByIdsResponse:
        r"""Retrieve multiple posts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts/multiple"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostsByIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Post]])
                res.posts = out

        return res

    
    def promise_post(self, request: operations.PromisePostRequest) -> operations.PromisePostResponse:
        r"""Promise an offer post
        Mark an offer by the current user as promised to someone. This helps people viewing the post know that the items being offered may soon be given away as long as the person who was promised the items picks them up.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/promise", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PromisePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Post])
                res.post = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def reply_to_post(self, request: operations.ReplyToPostRequest) -> operations.ReplyToPostResponse:
        r"""Reply to a post
        Send a reply to a post from the current user to the post author.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/reply", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplyToPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def satisfy_post(self, request: operations.SatisfyPostRequest) -> operations.SatisfyPostResponse:
        r"""Satisfy a post
        Mark an offer or wanted post by the current user as satisfied (eg. an offer has been taken or a wanted has been received).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/satisfy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SatisfyPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Post])
                res.post = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def search_posts(self, request: operations.SearchPostsRequest) -> operations.SearchPostsResponse:
        r"""Search posts
        Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
        NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchPosts200ApplicationJSON])
                res.search_posts_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def share_post(self, request: operations.SharePostRequest) -> operations.SharePostResponse:
        r"""Share a post
        Forwards a copy of the post to the current user so that they can forward it to friends.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/share", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SharePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def submit_post(self, request: operations.SubmitPostRequest) -> operations.SubmitPostResponse:
        r"""Submit a post
        Submits a new post. <br /><br /> NOTE: An alternate way to submit posts that does quicker client side validation is to use the script served by the API at the /posts/client.js endpoint (see the description of the /posts/client.js endpoint for usage instructions).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SubmitPost200ApplicationJSON])
                res.submit_post_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def unpromise_post(self, request: operations.UnpromisePostRequest) -> operations.UnpromisePostResponse:
        r"""Unpromise an offer post
        Mark an offer by the current user as unpromised.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/unpromise", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnpromisePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Post])
                res.post = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_post(self, request: operations.UpdatePostRequest) -> operations.UpdatePostResponse:
        r"""Update a post
        Users can update posts to fix mistakes with their post, add photos, or add more details about the items. Updates should not be used to say that items in a post have been taken or received since the post satisfy endpoint is designed to do that.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdatePost200ApplicationJSON])
                res.update_post_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def withdraw_post(self, request: operations.WithdrawPostRequest) -> operations.WithdrawPostResponse:
        r"""Withdraw a post
        Mark an offer or wanted post by the current user as withdrawn.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{post_id}/withdraw", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WithdrawPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Post])
                res.post = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    