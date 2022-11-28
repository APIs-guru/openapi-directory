import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def change_email(self, request: operations.ChangeEmailRequest) -> operations.ChangeEmailResponse:
        r"""Change email address
        Change the users' current email address.  A verification link will be emailed to the new email address to verify that the email account belongs to the user.  The email change will not take effect until the user clicks the link in the verification email.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/email"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def create_alert(self, request: operations.CreateAlertRequest) -> operations.CreateAlertResponse:
        r"""Create an email alert
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/alerts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Alert])
                res.alert = out
        elif r.status_code == 400:
            pass

        return res

    
    def delete_alert(self, request: operations.DeleteAlertRequest) -> operations.DeleteAlertResponse:
        r"""Delete an email alert
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/me/alerts/{alert_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_alerts(self) -> operations.GetAlertsResponse:
        r"""List current users' email alerts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/alerts"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Alert]])
                res.alerts = out

        return res

    
    def get_current_user(self) -> operations.GetCurrentUserResponse:
        r"""Retrieve current user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCurrentUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CurrentUser])
                res.current_user = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_current_user_groups(self, request: operations.GetCurrentUserGroupsRequest) -> operations.GetCurrentUserGroupsResponse:
        r"""List current users' groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCurrentUserGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Group]])
                res.groups = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_current_user_posts(self, request: operations.GetCurrentUserPostsRequest) -> operations.GetCurrentUserPostsResponse:
        r"""List current users' posts
        NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/posts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCurrentUserPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCurrentUserPosts200ApplicationJSON])
                res.get_current_user_posts_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_post_locations(self) -> operations.GetPostLocationsResponse:
        r"""List current users' post locations
        Only the most recent 3 post locations are returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/post-locations"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostLocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetPostLocations200ApplicationJSON]])
                res.get_post_locations_200_application_json_objects = out

        return res

    
    def get_profile_image_file(self, request: operations.GetProfileImageFileRequest) -> operations.GetProfileImageFileResponse:
        r"""Retrieve a users' profile image
        This is designed to be used as the src attribute of an HTML &lt;img&gt; tag to show the profile image of the given user.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/profile-image", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileImageFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_profile_images(self) -> operations.GetProfileImagesResponse:
        r"""List current users' profile images
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/profile-images"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetProfileImages200ApplicationJSON]])
                res.get_profile_images_200_application_json_objects = out

        return res

    
    def get_user(self, request: operations.GetUserRequest) -> operations.GetUserResponse:
        r"""Retrieve a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_and_related_data(self, request: operations.GetUserAndRelatedDataRequest) -> operations.GetUserAndRelatedDataResponse:
        r"""Retrieve user display info
        Retrieve a user and information related to the user (eg. recent posts) that is useful for displaying a more detailed view of the user.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/display", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserAndRelatedDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserAndRelatedData200ApplicationJSON])
                res.get_user_and_related_data_200_application_json_object = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_group_notices(self, request: operations.GetUserGroupNoticesRequest) -> operations.GetUserGroupNoticesResponse:
        r"""List current users' group notices
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/notices"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserGroupNoticesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GroupNotice]])
                res.group_notices = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_user_posts(self, request: operations.GetUserPostsRequest) -> operations.GetUserPostsResponse:
        r"""List posts by a user
        NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/posts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserPosts200ApplicationJSON])
                res.get_user_posts_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def report_user(self, request: operations.ReportUserRequest) -> operations.ReportUserResponse:
        r"""Report a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/report"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def resend_account_verification_email(self) -> operations.ResendAccountVerificationEmailResponse:
        r"""Resend account verification email
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/resend-verification"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResendAccountVerificationEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def save_post_location(self, request: operations.SavePostLocationRequest) -> operations.SavePostLocationResponse:
        r"""Save a post location for the current user
        Creates or updates a post location for the current user. Updates will happen when the name of the post location matches a previous post location.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/post-locations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SavePostLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.SavePostLocation200ApplicationJSON]])
                res.save_post_location_200_application_json_objects = out

        return res

    
    def search_current_user_posts(self, request: operations.SearchCurrentUserPostsRequest) -> operations.SearchCurrentUserPostsResponse:
        r"""Search current users' posts
        Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/posts/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCurrentUserPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchCurrentUserPosts200ApplicationJSON])
                res.search_current_user_posts_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def search_user_posts(self, request: operations.SearchUserPostsRequest) -> operations.SearchUserPostsResponse:
        r"""Search posts by a user
        Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/posts/search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchUserPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchUserPosts200ApplicationJSON])
                res.search_user_posts_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def send_password_reset_email(self) -> operations.SendPasswordResetEmailResponse:
        r"""Send password reset email
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/reset-password"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SendPasswordResetEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def set_email_not_bouncing(self) -> operations.SetEmailNotBouncingResponse:
        r"""Set users' email address as not bouncing
        Resets an email address bouncing state to false.  The users' email address may be automatically marked as bouncing again if further emails sent to it are bounced.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/email/not-bouncing"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetEmailNotBouncingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CurrentUser])
                res.current_user = out
        elif r.status_code == 400:
            pass

        return res

    
    def set_profile_image(self, request: operations.SetProfileImageRequest) -> operations.SetProfileImageResponse:
        r"""Set a profile image
        Profile images must be at least 90 pixels wide and tall.  And if the image used is not square it will be automatically cropped to be square.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/profile-image"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetProfileImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetProfileImage200ApplicationJSON])
                res.set_profile_image_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def submit_user_feedback(self, request: operations.SubmitUserFeedbackRequest) -> operations.SubmitUserFeedbackResponse:
        r"""Submit feedback on a user
        Allows the current user to submit feedback on a user.  The current user can only leave feedback on a user if the feedback allowed property on that user is set to true (see User definition for more details). And the system will only store the most recent feedback submission that the current user has submitted on a user. If the current user submits feedback multiple times, the newest feedback will overwrite the older feedback. This allows users to update their feedback as long as the feedback allowed property allows it.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/feedback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitUserFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SubmitUserFeedback200ApplicationJSON])
                res.submit_user_feedback_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_current_user(self, request: operations.UpdateCurrentUserRequest) -> operations.UpdateCurrentUserResponse:
        r"""Update current user
        Update the current user.  All fields are optional so requests can update just one or multiple user properties at a time.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCurrentUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CurrentUser])
                res.current_user = out
        elif r.status_code == 400:
            pass

        return res

    
    def update_location(self, request: operations.UpdateLocationRequest) -> operations.UpdateLocationResponse:
        r"""Update location
        Update the current users' location. The location is used to determine which posts are shown to the user (both public posts and group posts).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/location"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CurrentUser])
                res.current_user = out
        elif r.status_code == 400:
            pass

        return res

    