

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://oralquestionsandmotions-api.parliament.uk",
	"https://oralquestionsandmotions-api.parliament.uk",
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
        
    
    
    
    def get_early_day_motions_list(self, request: operations.GetEarlyDayMotionsListRequest) -> operations.GetEarlyDayMotionsListResponse:
        r"""Returns a list of Early Day Motions
        Get a list of Early Day Motions which meet the specified criteria. Only supports Published and Withdrawn status.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/EarlyDayMotions/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEarlyDayMotionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseListPublishedWrittenQuestion])
                res.api_response_list_published_written_question_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseListPublishedWrittenQuestion])
                res.api_response_list_published_written_question_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out

        return res

    
    def published_early_day_motion_get(self, request: operations.PublishedEarlyDayMotionGetRequest) -> operations.PublishedEarlyDayMotionGetResponse:
        r"""Returns a single Early Day Motion by ID
        Get a single Early Day Motion which has the ID specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/EarlyDayMotion/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PublishedEarlyDayMotionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseListPublishedWrittenQuestion])
                res.api_response_list_published_written_question_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseListPublishedWrittenQuestion])
                res.api_response_list_published_written_question_ = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out

        return res

    
    def published_oral_question_time_get(self, request: operations.PublishedOralQuestionTimeGetRequest) -> operations.PublishedOralQuestionTimeGetResponse:
        r"""Returns a list of oral question times
        A list of oral question times meeting the specified criteria.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oralquestiontimes/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PublishedOralQuestionTimeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseListPublishedWrittenQuestion])
                res.api_response_list_published_written_question_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseListPublishedWrittenQuestion])
                res.api_response_list_published_written_question_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out

        return res

    
    def published_oral_question_get(self, request: operations.PublishedOralQuestionGetRequest) -> operations.PublishedOralQuestionGetResponse:
        r"""Returns a list of oral questions
        A list of oral questions meeting the specified criteria.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oralquestions/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PublishedOralQuestionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseListPublishedWrittenQuestion])
                res.api_response_list_published_written_question_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseListPublishedWrittenQuestion])
                res.api_response_list_published_written_question_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseObject])
                res.api_response_object_ = out

        return res

    