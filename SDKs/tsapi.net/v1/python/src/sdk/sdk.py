import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://tsapi.net",
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
    
    def get_surveys(self) -> operations.GetSurveysResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Surveys"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Surveys/{surveyId}/Interviews", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Surveys/{surveyId}/Metadata", request.path_params)
        
        client = self.client

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

    