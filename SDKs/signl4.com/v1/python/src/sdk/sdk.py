

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://connect.signl4.com/api",
]


class SDK:
    

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
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def delete_categories_team_id_category_id_(self, request: operations.DeleteCategoriesTeamIDCategoryIDRequest) -> operations.DeleteCategoriesTeamIDCategoryIDResponse:
        r"""Delete an existing category
        Sample Request:
                    
            DELETE /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{teamId}/{categoryId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCategoriesTeamIDCategoryIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def delete_scripts_instances_instance_id_(self, request: operations.DeleteScriptsInstancesInstanceIDRequest) -> operations.DeleteScriptsInstancesInstanceIDResponse:
        r"""Deletes a script instance.
        Gets the script instance specified by the passed instance id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scripts/instances/{instanceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteScriptsInstancesInstanceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def delete_teams_team_id_memberships_user_id_(self, request: operations.DeleteTeamsTeamIDMembershipsUserIDRequest) -> operations.DeleteTeamsTeamIDMembershipsUserIDResponse:
        r"""Removes a user or invitation from a team, and may delete the user if he is not in any team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTeamsTeamIDMembershipsUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_teams_team_id_memberships_user_id_200_application_json_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.delete_teams_team_id_memberships_user_id_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.delete_teams_team_id_memberships_user_id_200_text_plain_string = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def delete_teams_team_id_schedules_duty_id_(self, request: operations.DeleteTeamsTeamIDSchedulesDutyIDRequest) -> operations.DeleteTeamsTeamIDSchedulesDutyIDResponse:
        r"""Delete a specific duty.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/schedules/{dutyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTeamsTeamIDSchedulesDutyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def delete_webhooks_webhook_id_(self, request: operations.DeleteWebhooksWebhookIDRequest) -> operations.DeleteWebhooksWebhookIDResponse:
        r"""Delete Webhook by Id
        Deletes the specified webhook so that it will no longer be notified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhookId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhooksWebhookIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_alerts_alert_id_(self, request: operations.GetAlertsAlertIDRequest) -> operations.GetAlertsAlertIDResponse:
        r"""Get Alert
        Gets an alert by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlertsAlertIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertInfo])
                res.alert_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertInfo])
                res.alert_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_alerts_alert_id_annotations(self, request: operations.GetAlertsAlertIDAnnotationsRequest) -> operations.GetAlertsAlertIDAnnotationsResponse:
        r"""Get annotations of an alert
        Get annotations of an alert by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/annotations", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlertsAlertIDAnnotationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlertAnnotationInfo]])
                res.alert_annotation_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlertAnnotationInfo]])
                res.alert_annotation_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_alerts_alert_id_attachments(self, request: operations.GetAlertsAlertIDAttachmentsRequest) -> operations.GetAlertsAlertIDAttachmentsResponse:
        r"""Get attachments of an alert
        Get attachments of an alert by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/attachments", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlertsAlertIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlertAttachmentInfo]])
                res.alert_attachment_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlertAttachmentInfo]])
                res.alert_attachment_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_alerts_alert_id_attachments_attachment_id_(self, request: operations.GetAlertsAlertIDAttachmentsAttachmentIDRequest) -> operations.GetAlertsAlertIDAttachmentsAttachmentIDResponse:
        r"""Gets a specified attachment of a specified alert.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/attachments/{attachmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlertsAlertIDAttachmentsAttachmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_alerts_alert_id_attachments_attachment_id_200_application_json_binary_string = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_alerts_alert_id_attachments_attachment_id_200_text_json_binary_string = out
            if utils.match_content_type(content_type, "text/plain"):
                res.get_alerts_alert_id_attachments_attachment_id_200_text_plain_binary_string = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_alerts_alert_id_notifications(self, request: operations.GetAlertsAlertIDNotificationsRequest) -> operations.GetAlertsAlertIDNotificationsResponse:
        r"""Get alert notifications
        Get notifications of all users by alert id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/notifications", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlertsAlertIDNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlertNotificationInfo]])
                res.alert_notification_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AlertNotificationInfo]])
                res.alert_notification_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_alerts_alert_id_overview(self, request: operations.GetAlertsAlertIDOverviewRequest) -> operations.GetAlertsAlertIDOverviewResponse:
        r"""Get an overview alert.
        Get overview alert by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/overview", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlertsAlertIDOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewAlert])
                res.overview_alert = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewAlert])
                res.overview_alert = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_alerts_report(self, request: operations.GetAlertsReportRequest) -> operations.GetAlertsReportResponse:
        r"""Get Alert Report
        Returns information about the occurred alert volume in different time periods as well as information about the
        response behaviour (amount of confirmed and unhandled alerts) of your team members.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts/report"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlertsReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertReport])
                res.alert_report = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertReport])
                res.alert_report = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_categories_images(self) -> operations.GetCategoriesImagesResponse:
        r"""Gets the names of all alert category images.
        You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories/images"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_categories_images_200_application_json_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_categories_images_200_text_json_strings = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_categories_team_id_(self, request: operations.GetCategoriesTeamIDRequest) -> operations.GetCategoriesTeamIDResponse:
        r"""Get all categories
        Sample Request:
                    
            GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{teamId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesTeamIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CategoryInfo]])
                res.category_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CategoryInfo]])
                res.category_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_categories_team_id_category_id_(self, request: operations.GetCategoriesTeamIDCategoryIDRequest) -> operations.GetCategoriesTeamIDCategoryIDResponse:
        r"""Get a specific category
        Sample Request:
                    
            GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{teamId}/{categoryId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesTeamIDCategoryIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryInfo])
                res.category_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryInfo])
                res.category_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_categories_team_id_category_id_metrics(self, request: operations.GetCategoriesTeamIDCategoryIDMetricsRequest) -> operations.GetCategoriesTeamIDCategoryIDMetricsResponse:
        r"""Get metrics for a specific category
        Sample Request:
                    
            GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/metrics
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{teamId}/{categoryId}/metrics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesTeamIDCategoryIDMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryMetrics])
                res.category_metrics = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryMetrics])
                res.category_metrics = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_categories_team_id_category_id_subscriptions(self, request: operations.GetCategoriesTeamIDCategoryIDSubscriptionsRequest) -> operations.GetCategoriesTeamIDCategoryIDSubscriptionsResponse:
        r"""Get category subscriptions
        Sample Request:
                    
            GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
            {
            }
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{teamId}/{categoryId}/subscriptions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesTeamIDCategoryIDSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CategorySubscriptionInfo]])
                res.category_subscription_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CategorySubscriptionInfo]])
                res.category_subscription_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_categories_team_id_metrics(self, request: operations.GetCategoriesTeamIDMetricsRequest) -> operations.GetCategoriesTeamIDMetricsResponse:
        r"""Get metrics for all categories
        Sample Request:
                    
            GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/metrics
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{teamId}/metrics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesTeamIDMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CategoryMetrics]])
                res.category_metrics = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CategoryMetrics]])
                res.category_metrics = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_events_event_id_overview(self, request: operations.GetEventsEventIDOverviewRequest) -> operations.GetEventsEventIDOverviewResponse:
        r"""Get overview event
        Get overview event by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/{eventId}/overview", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsEventIDOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewEvent])
                res.overview_event = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewEvent])
                res.overview_event = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_events_event_id_parameters(self, request: operations.GetEventsEventIDParametersRequest) -> operations.GetEventsEventIDParametersResponse:
        r"""Get event parameters
        Get parameters of an event by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/{eventId}/parameters", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsEventIDParametersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EventParameterInfo]])
                res.event_parameter_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EventParameterInfo]])
                res.event_parameter_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_prepaid_balance(self) -> operations.GetPrepaidBalanceResponse:
        r"""Get your subscription's current prepaid balance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/prepaid/balance"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPrepaidBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidBalanceInfo])
                res.prepaid_balance_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidBalanceInfo])
                res.prepaid_balance_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_prepaid_settings(self) -> operations.GetPrepaidSettingsResponse:
        r"""Get your subscription's current prepaid settings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/prepaid/settings"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPrepaidSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidSettingsInfo])
                res.prepaid_settings_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidSettingsInfo])
                res.prepaid_settings_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_prepaid_transactions(self) -> operations.GetPrepaidTransactionsResponse:
        r"""Get your subscription's prepaid transactions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/prepaid/transactions"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPrepaidTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PrepaidTransactionInfo]])
                res.prepaid_transaction_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PrepaidTransactionInfo]])
                res.prepaid_transaction_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_scripts_instances(self, request: operations.GetScriptsInstancesRequest) -> operations.GetScriptsInstancesResponse:
        r"""Returns all script instances of the SIGNL4 team
        Returns all script instances in the subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scripts/instances"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScriptsInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScriptInstanceDetails]])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScriptInstanceDetails]])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_scripts_instances_instance_id_(self, request: operations.GetScriptsInstancesInstanceIDRequest) -> operations.GetScriptsInstancesInstanceIDResponse:
        r"""Returns all information about a given script instance which includes its runtime status.
        Gets the script instance specified by the passed instance id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scripts/instances/{instanceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScriptsInstancesInstanceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_scripts_inventory(self) -> operations.GetScriptsInventoryResponse:
        r"""Returns all available inventory scripts which can be added to a SIGNL4 subscription.
        Returns all available inventory scripts which can be added to a SIGNL4 subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scripts/inventory"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScriptsInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.InventoryScriptInfo]])
                res.inventory_script_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.InventoryScriptInfo]])
                res.inventory_script_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_scripts_inventory_parsed(self, request: operations.GetScriptsInventoryParsedRequest) -> operations.GetScriptsInventoryParsedResponse:
        r"""Returns all inventory scripts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scripts/inventory/parsed"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScriptsInventoryParsedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.InventoryScriptInfo]])
                res.inventory_script_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.InventoryScriptInfo]])
                res.inventory_script_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_scripts_inventory_parsed_script_id_(self, request: operations.GetScriptsInventoryParsedScriptIDRequest) -> operations.GetScriptsInventoryParsedScriptIDResponse:
        r"""Returns an inventory script by its id.
        Gets the script specified by the passed script id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scripts/inventory/parsed/{scriptId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScriptsInventoryParsedScriptIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_subscriptions(self) -> operations.GetSubscriptionsResponse:
        r"""Get infos of all available/managed subscriptions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subscriptions"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SubscriptionInfo]])
                res.subscription_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SubscriptionInfo]])
                res.subscription_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_subscriptions_subscription_id_(self, request: operations.GetSubscriptionsSubscriptionIDRequest) -> operations.GetSubscriptionsSubscriptionIDResponse:
        r"""Get infos of a specific subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsSubscriptionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionInfo])
                res.subscription_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionInfo])
                res.subscription_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_subscriptions_subscription_id_channel_prices(self, request: operations.GetSubscriptionsSubscriptionIDChannelPricesRequest) -> operations.GetSubscriptionsSubscriptionIDChannelPricesResponse:
        r"""Returns the subscription's channel price information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}/channelPrices", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsSubscriptionIDChannelPricesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelPriceInfo])
                res.channel_price_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelPriceInfo])
                res.channel_price_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_subscriptions_subscription_id_features(self, request: operations.GetSubscriptionsSubscriptionIDFeaturesRequest) -> operations.GetSubscriptionsSubscriptionIDFeaturesResponse:
        r"""Returns the features of a specified subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}/features", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsSubscriptionIDFeaturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SubscriptionFeature]])
                res.subscription_features = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SubscriptionFeature]])
                res.subscription_features = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_subscriptions_subscription_id_prepaid_balance(self, request: operations.GetSubscriptionsSubscriptionIDPrepaidBalanceRequest) -> operations.GetSubscriptionsSubscriptionIDPrepaidBalanceResponse:
        r"""Get a subscription's current prepaid balance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}/prepaidBalance", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsSubscriptionIDPrepaidBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidBalanceInfo])
                res.prepaid_balance_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidBalanceInfo])
                res.prepaid_balance_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_subscriptions_subscription_id_prepaid_settings(self, request: operations.GetSubscriptionsSubscriptionIDPrepaidSettingsRequest) -> operations.GetSubscriptionsSubscriptionIDPrepaidSettingsResponse:
        r"""Get a subscription's current prepaid settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}/prepaidSettings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsSubscriptionIDPrepaidSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidSettingsInfo])
                res.prepaid_settings_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidSettingsInfo])
                res.prepaid_settings_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_subscriptions_subscription_id_prepaid_transactions(self, request: operations.GetSubscriptionsSubscriptionIDPrepaidTransactionsRequest) -> operations.GetSubscriptionsSubscriptionIDPrepaidTransactionsResponse:
        r"""Get a subscription's prepaid transactions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}/prepaidTransactions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsSubscriptionIDPrepaidTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PrepaidTransactionInfo]])
                res.prepaid_transaction_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PrepaidTransactionInfo]])
                res.prepaid_transaction_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_subscriptions_subscription_id_teams(self, request: operations.GetSubscriptionsSubscriptionIDTeamsRequest) -> operations.GetSubscriptionsSubscriptionIDTeamsResponse:
        r"""Get infos for all teams of the subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}/teams", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsSubscriptionIDTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamInfo]])
                res.team_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamInfo]])
                res.team_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_subscriptions_subscription_id_user_licenses(self, request: operations.GetSubscriptionsSubscriptionIDUserLicensesRequest) -> operations.GetSubscriptionsSubscriptionIDUserLicensesResponse:
        r"""Gets a subscription's user licenses.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}/userLicenses", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsSubscriptionIDUserLicensesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserLicenseInfo])
                res.user_license_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserLicenseInfo])
                res.user_license_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams(self) -> operations.GetTeamsResponse:
        r"""Get infos of all teams.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teams"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamInfo]])
                res.team_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamInfo]])
                res.team_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_(self, request: operations.GetTeamsTeamIDRequest) -> operations.GetTeamsTeamIDResponse:
        r"""Gets infos of a specific team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamInfo])
                res.team_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamInfo])
                res.team_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_alert_reports(self, request: operations.GetTeamsTeamIDAlertReportsRequest) -> operations.GetTeamsTeamIDAlertReportsResponse:
        r"""Get information about downloadable alert reports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/alertReports", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDAlertReportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.alert_audit_report_file_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.alert_audit_report_file_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_alert_reports_file_name_(self, request: operations.GetTeamsTeamIDAlertReportsFileNameRequest) -> operations.GetTeamsTeamIDAlertReportsFileNameResponse:
        r"""Returns Alert Report
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/alertReports/{fileName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDAlertReportsFileNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_teams_team_id_alert_reports_file_name_200_application_json_binary_string = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_teams_team_id_alert_reports_file_name_200_text_json_binary_string = out
            if utils.match_content_type(content_type, "text/plain"):
                res.get_teams_team_id_alert_reports_file_name_200_text_plain_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_teams_team_id_alert_settings(self, request: operations.GetTeamsTeamIDAlertSettingsRequest) -> operations.GetTeamsTeamIDAlertSettingsResponse:
        r"""Gets alert settings of a specific team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/alertSettings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDAlertSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertSettings])
                res.alert_settings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertSettings])
                res.alert_settings = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_duty_reports(self, request: operations.GetTeamsTeamIDDutyReportsRequest) -> operations.GetTeamsTeamIDDutyReportsResponse:
        r"""Get Information about downloadable reports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/dutyReports", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDDutyReportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.duty_audit_report_file_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.duty_audit_report_file_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_duty_reports_file_name_(self, request: operations.GetTeamsTeamIDDutyReportsFileNameRequest) -> operations.GetTeamsTeamIDDutyReportsFileNameResponse:
        r"""Download duty report with a specific fileName
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/dutyReports/{fileName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDDutyReportsFileNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_teams_team_id_duty_reports_file_name_200_application_json_binary_string = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_teams_team_id_duty_reports_file_name_200_text_json_binary_string = out
            if utils.match_content_type(content_type, "text/plain"):
                res.get_teams_team_id_duty_reports_file_name_200_text_plain_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_teams_team_id_dutysummary(self, request: operations.GetTeamsTeamIDDutysummaryRequest) -> operations.GetTeamsTeamIDDutysummaryResponse:
        r"""Get duty assistant info for a team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/dutysummary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDDutysummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDutySummaryInfo])
                res.team_duty_summary_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDutySummaryInfo])
                res.team_duty_summary_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_event_sources(self, request: operations.GetTeamsTeamIDEventSourcesRequest) -> operations.GetTeamsTeamIDEventSourcesResponse:
        r"""Gets event sources of a specific team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/eventSources", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDEventSourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EventSourceEndpointInfo]])
                res.event_source_endpoint_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EventSourceEndpointInfo]])
                res.event_source_endpoint_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_memberships(self, request: operations.GetTeamsTeamIDMembershipsRequest) -> operations.GetTeamsTeamIDMembershipsResponse:
        r"""Get all invites of a team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDMembershipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.InvitedUserInfo]])
                res.invited_user_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.InvitedUserInfo]])
                res.invited_user_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_schedules(self, request: operations.GetTeamsTeamIDSchedulesRequest) -> operations.GetTeamsTeamIDSchedulesResponse:
        r"""Returns information about all duties that belong to the team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/schedules", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScheduleInfo]])
                res.schedule_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScheduleInfo]])
                res.schedule_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_schedules_schedule_id_(self, request: operations.GetTeamsTeamIDSchedulesScheduleIDRequest) -> operations.GetTeamsTeamIDSchedulesScheduleIDResponse:
        r"""Returns information of the duty schedule with the specified Id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/schedules/{scheduleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDSchedulesScheduleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleInfo])
                res.schedule_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleInfo])
                res.schedule_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_teams_team_id_setup_progress(self, request: operations.GetTeamsTeamIDSetupProgressRequest) -> operations.GetTeamsTeamIDSetupProgressResponse:
        r"""Gets setup progress of a specific team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/setupProgress", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsTeamIDSetupProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamSetupProgress])
                res.team_setup_progress = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamSetupProgress])
                res.team_setup_progress = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_users(self) -> operations.GetUsersResponse:
        r"""Get all Users
        Returns a list of user objects with details such as their email address and duty information. Only users who
        are part of your team will be returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserInfo]])
                res.user_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserInfo]])
                res.user_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_users_user_id_(self, request: operations.GetUsersUserIDRequest) -> operations.GetUsersUserIDResponse:
        r"""Get User by Id
        Returns a user object with details such as his email address and duty information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserInfo])
                res.user_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserInfo])
                res.user_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_users_user_id_duty_status(self, request: operations.GetUsersUserIDDutyStatusRequest) -> operations.GetUsersUserIDDutyStatusResponse:
        r"""Get duty status by user Id
        Returns a object with duty information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/dutyStatus", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDDutyStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDutyInfo])
                res.user_duty_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDutyInfo])
                res.user_duty_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_users_user_id_image(self, request: operations.GetUsersUserIDImageRequest) -> operations.GetUsersUserIDImageResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/image", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserImage])
                res.user_image = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserImage])
                res.user_image = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_users_user_id_setup_progress(self, request: operations.GetUsersUserIDSetupProgressRequest) -> operations.GetUsersUserIDSetupProgressResponse:
        r"""Gets setup progress of a specific user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/setupProgress", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDSetupProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserSetupProgress])
                res.user_setup_progress = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserSetupProgress])
                res.user_setup_progress = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_webhooks(self, request: operations.GetWebhooksRequest) -> operations.GetWebhooksResponse:
        r"""Get Webhooks
        Returns a collection of defined outbound webhooks in the system.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WebhookInfo]])
                res.webhook_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WebhookInfo]])
                res.webhook_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def get_webhook_by_id(self, request: operations.GetWebhookByIDRequest) -> operations.GetWebhookByIDResponse:
        r"""Get Webhook by Id
        Returns information of the webhook specified by the passed id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhookId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhookByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_webhook_by_id_200_application_json_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.get_webhook_by_id_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.get_webhook_by_id_200_text_plain_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_alerts(self, request: operations.PostAlertsRequest) -> operations.PostAlertsResponse:
        r"""Trigger Alert
        Triggers a new alert for your team. All team members on duty will receive alert notifications.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertInfo])
                res.alert_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertInfo])
                res.alert_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_alerts_acknowledge_all(self, request: operations.PostAlertsAcknowledgeAllRequest) -> operations.PostAlertsAcknowledgeAllResponse:
        r"""Confirms all visible alerts
        This method confirms all unhandled alerts your team currently has by a specific user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts/acknowledgeAll"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsAcknowledgeAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            pass

        return res

    
    def post_alerts_acknowledge_multiple(self, request: operations.PostAlertsAcknowledgeMultipleRequest) -> operations.PostAlertsAcknowledgeMultipleResponse:
        r"""Acknowlegde multiple alerts
        This method confirms all alerts provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts/acknowledgeMultiple"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsAcknowledgeMultipleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_alerts_alert_id_acknowledge(self, request: operations.PostAlertsAlertIDAcknowledgeRequest) -> operations.PostAlertsAlertIDAcknowledgeResponse:
        r"""Acknowledge an alert
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/acknowledge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsAlertIDAcknowledgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertInfo])
                res.alert_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertInfo])
                res.alert_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_alerts_alert_id_annotate(self, request: operations.PostAlertsAlertIDAnnotateRequest) -> operations.PostAlertsAlertIDAnnotateResponse:
        r"""Annotate Alert
        Annotates an alert by given Annotation Info.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/annotate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsAlertIDAnnotateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertAnnotationInfo])
                res.alert_annotation_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertAnnotationInfo])
                res.alert_annotation_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_alerts_alert_id_close(self, request: operations.PostAlertsAlertIDCloseRequest) -> operations.PostAlertsAlertIDCloseResponse:
        r"""Close an alert
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/close", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsAlertIDCloseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertInfo])
                res.alert_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertInfo])
                res.alert_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_alerts_alert_id_undo_acknowledge(self, request: operations.PostAlertsAlertIDUndoAcknowledgeRequest) -> operations.PostAlertsAlertIDUndoAcknowledgeResponse:
        r"""Undo the acknowledgement of an alert.
        This method tries to undo an alert acknowledgement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/undoAcknowledge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsAlertIDUndoAcknowledgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewAlert])
                res.overview_alert = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewAlert])
                res.overview_alert = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_alerts_alert_id_undo_close(self, request: operations.PostAlertsAlertIDUndoCloseRequest) -> operations.PostAlertsAlertIDUndoCloseResponse:
        r"""Undo the closure of an alert.
        This method tries to undo an alert close.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}/undoClose", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsAlertIDUndoCloseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewAlert])
                res.overview_alert = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewAlert])
                res.overview_alert = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_alerts_close_all(self, request: operations.PostAlertsCloseAllRequest) -> operations.PostAlertsCloseAllResponse:
        r"""Close all acknowledged alerts.
        This method closes all acknowledged alerts your team currently has.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts/closeAll"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsCloseAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_alerts_close_multiple(self, request: operations.PostAlertsCloseMultipleRequest) -> operations.PostAlertsCloseMultipleResponse:
        r"""Close multiple alerts
        This method closes all alerts provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts/closeMultiple"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsCloseMultipleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_alerts_paged(self, request: operations.PostAlertsPagedRequest) -> operations.PostAlertsPagedResponse:
        r"""Gets alerts paged
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts/paged"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsPagedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewAlertPagedResultsPublic])
                res.overview_alert_paged_results_public = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewAlertPagedResultsPublic])
                res.overview_alert_paged_results_public = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_alerts_undo_acknowledge_multiple(self, request: operations.PostAlertsUndoAcknowledgeMultipleRequest) -> operations.PostAlertsUndoAcknowledgeMultipleResponse:
        r"""Queue undo of multiple acknowledgments.
        This method tries to undo the acknowledgement of multiple alerts via a queue. The operation is handled in the background.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts/undoAcknowledgeMultiple"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsUndoAcknowledgeMultipleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_alerts_undo_close_multiple(self, request: operations.PostAlertsUndoCloseMultipleRequest) -> operations.PostAlertsUndoCloseMultipleResponse:
        r"""Withdraw closure of multiple alerts
        This method tries to undo multiple alert closes. The operation is handled in the background.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts/undoCloseMultiple"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlertsUndoCloseMultipleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_categories_team_id_(self, request: operations.PostCategoriesTeamIDRequest) -> operations.PostCategoriesTeamIDResponse:
        r"""Create a new category
        Sample Request:
                    
            POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7
            {
                \"name\": \"Water\",
                \"imageName\": \"water.svg\",
                \"color\": \"#0000cc\",
                \"keywordMatching\": \"Any\",
                \"keywords\": [
                    {
                        \"value\": \"H2O\"
                    },
                    {
                        \"value\": \"Water\"
                    }
                ]
            }
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{teamId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCategoriesTeamIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryInfo])
                res.category_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryInfo])
                res.category_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_categories_team_id_category_id_subscriptions(self, request: operations.PostCategoriesTeamIDCategoryIDSubscriptionsRequest) -> operations.PostCategoriesTeamIDCategoryIDSubscriptionsResponse:
        r"""Set category subscriptions
        Sample Request:
                    
            POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions
            {
            }
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{teamId}/{categoryId}/subscriptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCategoriesTeamIDCategoryIDSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CategorySubscriptionInfo]])
                res.category_subscription_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CategorySubscriptionInfo]])
                res.category_subscription_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_events_paged(self, request: operations.PostEventsPagedRequest) -> operations.PostEventsPagedResponse:
        r"""Get overview event paged.
        Get overview event paged. If there are more results, you also get a continuation token which you can add to the event filter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/events/paged"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEventsPagedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewEventPagedResultsPublic])
                res.overview_event_paged_results_public = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverviewEventPagedResultsPublic])
                res.overview_event_paged_results_public = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_scripts_instances(self, request: operations.PostScriptsInstancesRequest) -> operations.PostScriptsInstancesResponse:
        r"""Creates a new script instance in the in the SIGNL4 team.
        Creates a new script instance of the script specified in the request body.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scripts/instances"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostScriptsInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_scripts_instances_instance_id_disable(self, request: operations.PostScriptsInstancesInstanceIDDisableRequest) -> operations.PostScriptsInstancesInstanceIDDisableResponse:
        r"""Disables a given script instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scripts/instances/{instanceId}/disable", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostScriptsInstancesInstanceIDDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_scripts_instances_instance_id_enable(self, request: operations.PostScriptsInstancesInstanceIDEnableRequest) -> operations.PostScriptsInstancesInstanceIDEnableResponse:
        r"""Enables a script instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scripts/instances/{instanceId}/enable", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostScriptsInstancesInstanceIDEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_teams_team_id_alert_settings(self, request: operations.PostTeamsTeamIDAlertSettingsRequest) -> operations.PostTeamsTeamIDAlertSettingsResponse:
        r"""Sets alert settings of a specific team.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/alertSettings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTeamsTeamIDAlertSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertSettings])
                res.alert_settings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertSettings])
                res.alert_settings = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_teams_team_id_memberships(self, request: operations.PostTeamsTeamIDMembershipsRequest) -> operations.PostTeamsTeamIDMembershipsResponse:
        r"""Invite users to a team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTeamsTeamIDMembershipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserInvitationResult]])
                res.user_invitation_results = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserInvitationResult]])
                res.user_invitation_results = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_teams_team_id_memberships_resend_invite_mail(self, request: operations.PostTeamsTeamIDMembershipsResendInviteMailRequest) -> operations.PostTeamsTeamIDMembershipsResendInviteMailResponse:
        r"""Sends invite email again if an invite exists
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships/resendInviteMail", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTeamsTeamIDMembershipsResendInviteMailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.post_teams_team_id_memberships_resend_invite_mail_200_application_json_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.post_teams_team_id_memberships_resend_invite_mail_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.post_teams_team_id_memberships_resend_invite_mail_200_text_plain_string = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_teams_team_id_schedules(self, request: operations.PostTeamsTeamIDSchedulesRequest) -> operations.PostTeamsTeamIDSchedulesResponse:
        r"""Create/Update given duty schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/schedules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTeamsTeamIDSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleInfo])
                res.schedule_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleInfo])
                res.schedule_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_teams_team_id_schedules_delete_range(self, request: operations.PostTeamsTeamIDSchedulesDeleteRangeRequest) -> operations.PostTeamsTeamIDSchedulesDeleteRangeResponse:
        r"""Delete duty schedules in range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/schedules/deleteRange", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTeamsTeamIDSchedulesDeleteRangeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScheduleInfo]])
                res.schedule_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScheduleInfo]])
                res.schedule_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_teams_team_id_schedules_multiple(self, request: operations.PostTeamsTeamIDSchedulesMultipleRequest) -> operations.PostTeamsTeamIDSchedulesMultipleResponse:
        r"""Save multiple schedules. It is possible to override existing schedules if you wish
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/schedules/multiple", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTeamsTeamIDSchedulesMultipleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScheduleInfo]])
                res.schedule_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ScheduleInfo]])
                res.schedule_infos = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_users_user_id_check_permissions(self, request: operations.PostUsersUserIDCheckPermissionsRequest) -> operations.PostUsersUserIDCheckPermissionsResponse:
        r"""Checks if a user has the provided permission.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/checkPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersUserIDCheckPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserImage])
                res.user_image = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserImage])
                res.user_image = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_users_user_id_image(self, request: operations.PostUsersUserIDImageRequest) -> operations.PostUsersUserIDImageResponse:
        r"""Uploaded a profile image for a specified user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/image", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersUserIDImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_users_user_id_punch_in(self, request: operations.PostUsersUserIDPunchInRequest) -> operations.PostUsersUserIDPunchInResponse:
        r"""Punch User in
        The specified user will be punched in to duty.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/punchIn", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersUserIDPunchInResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDutyInfo])
                res.user_duty_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDutyInfo])
                res.user_duty_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_users_user_id_punch_in_as_manager(self, request: operations.PostUsersUserIDPunchInAsManagerRequest) -> operations.PostUsersUserIDPunchInAsManagerResponse:
        r"""Punch User in as Manager
        The specified user will be punched in to duty as a manager.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/punchInAsManager", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersUserIDPunchInAsManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDutyInfo])
                res.user_duty_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDutyInfo])
                res.user_duty_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_users_user_id_punch_out(self, request: operations.PostUsersUserIDPunchOutRequest) -> operations.PostUsersUserIDPunchOutResponse:
        r"""Punch User out
        The specified user will be punched out from duty.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/punchOut", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersUserIDPunchOutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDutyInfo])
                res.user_duty_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDutyInfo])
                res.user_duty_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_webhooks(self, request: operations.PostWebhooksRequest) -> operations.PostWebhooksResponse:
        r"""Create Webhook
        Creates a new outbound webhook that will be notified when certain events occur.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                res.post_webhooks_201_application_json_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.post_webhooks_201_text_json_string = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.post_webhooks_201_text_plain_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_webhooks_webhook_id_disable(self, request: operations.PostWebhooksWebhookIDDisableRequest) -> operations.PostWebhooksWebhookIDDisableResponse:
        r"""Ability to enable a webHook.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhookId}/disable", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksWebhookIDDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookInfo])
                res.webhook_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookInfo])
                res.webhook_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def post_webhooks_webhook_id_enable(self, request: operations.PostWebhooksWebhookIDEnableRequest) -> operations.PostWebhooksWebhookIDEnableResponse:
        r"""Ability to disable a webHook.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhookId}/enable", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksWebhookIDEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookInfo])
                res.webhook_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookInfo])
                res.webhook_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_categories_team_id_category_id_(self, request: operations.PutCategoriesTeamIDCategoryIDRequest) -> operations.PutCategoriesTeamIDCategoryIDResponse:
        r"""Update an existing category
        Sample Request:
                    
            PUT /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e
            {
                \"name\": \"Water-Updated\",
                \"imageName\": \"water.svg\",
                \"color\": \"#0000cc\",
                \"keywordMatching\": \"All\",
                \"keywords\": [
                    {
                        \"value\": \"H2O\"
                    },
                    {
                        \"value\": \"Water\"
                    },
                    {
                        \"value\": \"Wet\"
                    }
                ]
            }
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{teamId}/{categoryId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCategoriesTeamIDCategoryIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryInfo])
                res.category_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryInfo])
                res.category_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_prepaid_settings(self, request: operations.PutPrepaidSettingsRequest) -> operations.PutPrepaidSettingsResponse:
        r"""Update your subscription's current prepaid settings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/prepaid/settings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPrepaidSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidSettingsInfo])
                res.prepaid_settings_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidSettingsInfo])
                res.prepaid_settings_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_scripts_instances_instance_id_(self, request: operations.PutScriptsInstancesInstanceIDRequest) -> operations.PutScriptsInstancesInstanceIDResponse:
        r"""Updates a given script instance, typically used for updating the configuration of a script.
        Updates the specified script instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scripts/instances/{instanceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutScriptsInstancesInstanceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_scripts_instances_instance_id_data(self, request: operations.PutScriptsInstancesInstanceIDDataRequest) -> operations.PutScriptsInstancesInstanceIDDataResponse:
        r"""Updates custom data of a given script instance which includes its display name.
        Updates the specified script instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scripts/instances/{instanceId}/data", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutScriptsInstancesInstanceIDDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScriptInstanceDetails])
                res.script_instance_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_subscriptions_subscription_id_prepaid_settings(self, request: operations.PutSubscriptionsSubscriptionIDPrepaidSettingsRequest) -> operations.PutSubscriptionsSubscriptionIDPrepaidSettingsResponse:
        r"""Update a subscription's current prepaid settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}/prepaidSettings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSubscriptionsSubscriptionIDPrepaidSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidSettingsInfo])
                res.prepaid_settings_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrepaidSettingsInfo])
                res.prepaid_settings_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_subscriptions_subscription_id_profile(self, request: operations.PutSubscriptionsSubscriptionIDProfileRequest) -> operations.PutSubscriptionsSubscriptionIDProfileResponse:
        r"""Updates a subscriptions profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{subscriptionId}/profile", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSubscriptionsSubscriptionIDProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionInfo])
                res.subscription_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionInfo])
                res.subscription_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_teams_team_id_memberships_user_id_(self, request: operations.PutTeamsTeamIDMembershipsUserIDRequest) -> operations.PutTeamsTeamIDMembershipsUserIDResponse:
        r"""Update user's team membership.
        Updates the user's team membership. You can move the user to another team within the subscription
        and/or change the user's role.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships/{userId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTeamsTeamIDMembershipsUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserInfo])
                res.user_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserInfo])
                res.user_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 204:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_teams_team_id_profile(self, request: operations.PutTeamsTeamIDProfileRequest) -> operations.PutTeamsTeamIDProfileResponse:
        r"""Updates team profile of a team
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/profile", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTeamsTeamIDProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamInfo])
                res.team_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamInfo])
                res.team_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_users_user_id_change_password(self, request: operations.PutUsersUserIDChangePasswordRequest) -> operations.PutUsersUserIDChangePasswordResponse:
        r"""Updates the password of a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/changePassword", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUsersUserIDChangePasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def put_users_user_id_profile(self, request: operations.PutUsersUserIDProfileRequest) -> operations.PutUsersUserIDProfileResponse:
        r"""Updates user profile of an user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/profile", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUsersUserIDProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserInfo])
                res.user_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserInfo])
                res.user_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    
    def put_webhooks_webhook_id_(self, request: operations.PutWebhooksWebhookIDRequest) -> operations.PutWebhooksWebhookIDResponse:
        r"""Update Webhook by Id
        Updates the specified webhook.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhookId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWebhooksWebhookIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookInfo])
                res.webhook_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookInfo])
                res.webhook_info = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseContent])
                res.error_response_content = out

        return res

    