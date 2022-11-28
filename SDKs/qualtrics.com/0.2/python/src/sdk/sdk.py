

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://fra1.qualtrics.com/API/v3",
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
        
    
    
    
    def create_contact_in_mailinglist(self, request: operations.CreateContactInMailinglistRequest) -> operations.CreateContactInMailinglistResponse:
        r"""Create contact in mailing list
        Creates a contact in a given mailing list
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directories/{DirectoryId}/mailinglists/{MailingListId}/contacts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateContactInMailinglistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def generate_distribution_links(self, request: operations.GenerateDistributionLinksRequest) -> operations.GenerateDistributionLinksResponse:
        r"""Generate distribution links
        Geneates links for individual distribution
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/distributions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenerateDistributionLinksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_distributions(self, request: operations.GetDistributionsRequest) -> operations.GetDistributionsResponse:
        r"""Get distributions for survey
        Gets all distributions for a given survey
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/distributions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistributionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistributionsResponse])
                res.distributions_response = out

        return res

    
    def get_event_subscriptions(self, request: operations.GetEventSubscriptionsRequest) -> operations.GetEventSubscriptionsResponse:
        r"""Get event subscriptions
        Get event subscriptions
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/eventsubscriptions/{SubscriptionId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventSubscriptionsResponse])
                res.event_subscriptions_response = out

        return res

    
    def get_survey(self, request: operations.GetSurveyRequest) -> operations.GetSurveyResponse:
        r"""Get survey
        Gets a single Qualtrics survey speficied by its ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/survey-definitions/{SurveyId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSurveyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.survey_response = out
        else:
            pass

        return res

    
    def retrievedistributionlinks(self, request: operations.RetrievedistributionlinksRequest) -> operations.RetrievedistributionlinksResponse:
        r"""Retrieve distribution links
        Retrieves all the individual links for a given distribution
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/distributions/{DistributionId}/links", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrievedistributionlinksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RetrieveDistributionLinksResponse])
                res.retrieve_distribution_links_response = out

        return res

    
    def webhook_delete(self, request: operations.WebhookDeleteRequest) -> operations.WebhookDeleteResponse:
        r"""Remove subscription to response event
        Remove event subscription
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/eventsubscriptions/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebhookDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventSubscriptionsResponse])
                res.event_subscriptions_response = out

        return res

    
    def when_a_response_is_received(self, request: operations.WhenAResponseIsReceivedRequest) -> operations.WhenAResponseIsReceivedResponse:
        r"""Triggers when a response is submitted to a qualtrics survey
        Subscribe to response event
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/eventsubscriptions/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WhenAResponseIsReceivedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventSubscriptionsResponse])
                res.event_subscriptions_response = out

        return res

    