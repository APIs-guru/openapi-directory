

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://tsapi.net",
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
        
    
    
    
    def get_surveys(self) -> operations.GetSurveysResponse:
        r"""Returns a list of available Surveys
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Surveys"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSurveysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SurveyDetail]])
                res.survey_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SurveyDetail]])
                res.survey_details = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_surveys_survey_id_interviews(self, request: operations.GetSurveysSurveyIDInterviewsRequest) -> operations.GetSurveysSurveyIDInterviewsResponse:
        r"""Fetches some interview records for a specific survey
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Surveys/{surveyId}/Interviews", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSurveysSurveyIDInterviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Interview]])
                res.interviews = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Interview]])
                res.interviews = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_surveys_survey_id_metadata(self, request: operations.GetSurveysSurveyIDMetadataRequest) -> operations.GetSurveysSurveyIDMetadataResponse:
        r"""Fetches the metadata for a specific survey
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Surveys/{surveyId}/Metadata", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSurveysSurveyIDMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SurveyMetadata])
                res.survey_metadata = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SurveyMetadata])
                res.survey_metadata = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    