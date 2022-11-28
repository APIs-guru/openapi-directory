

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://parliament.uk",
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
        
    
    
    
    def get_api_dailyreports_dailyreports(self, request: operations.GetAPIDailyreportsDailyreportsRequest) -> operations.GetAPIDailyreportsDailyreportsResponse:
        r"""Returns a list of daily reports
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/dailyreports/dailyreports"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIDailyreportsDailyreportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DailyReportViewModelSearchResult])
                res.daily_report_view_model_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DailyReportViewModelSearchResult])
                res.daily_report_view_model_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out

        return res

    
    def get_api_writtenquestions_questions(self, request: operations.GetAPIWrittenquestionsQuestionsRequest) -> operations.GetAPIWrittenquestionsQuestionsResponse:
        r"""Returns a list of written questions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/writtenquestions/questions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIWrittenquestionsQuestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuestionsViewModelSearchResult])
                res.questions_view_model_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuestionsViewModelSearchResult])
                res.questions_view_model_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out

        return res

    
    def get_api_writtenquestions_questions_date_uin_(self, request: operations.GetAPIWrittenquestionsQuestionsDateUinRequest) -> operations.GetAPIWrittenquestionsQuestionsDateUinResponse:
        r"""Returns a written question
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/writtenquestions/questions/{date}/{uin}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIWrittenquestionsQuestionsDateUinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuestionsViewModelItem])
                res.questions_view_model_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuestionsViewModelItem])
                res.questions_view_model_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out

        return res

    
    def get_api_writtenquestions_questions_id_(self, request: operations.GetAPIWrittenquestionsQuestionsIDRequest) -> operations.GetAPIWrittenquestionsQuestionsIDResponse:
        r"""Returns a written question
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/writtenquestions/questions/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIWrittenquestionsQuestionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuestionsViewModelItem])
                res.questions_view_model_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuestionsViewModelItem])
                res.questions_view_model_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out

        return res

    
    def get_api_writtenstatements_statements(self, request: operations.GetAPIWrittenstatementsStatementsRequest) -> operations.GetAPIWrittenstatementsStatementsResponse:
        r"""Returns a list of written statements
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/writtenstatements/statements"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIWrittenstatementsStatementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatementsViewModelSearchResult])
                res.statements_view_model_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatementsViewModelSearchResult])
                res.statements_view_model_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out

        return res

    
    def get_api_writtenstatements_statements_date_uin_(self, request: operations.GetAPIWrittenstatementsStatementsDateUinRequest) -> operations.GetAPIWrittenstatementsStatementsDateUinResponse:
        r"""Returns a written statemnet
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/writtenstatements/statements/{date}/{uin}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIWrittenstatementsStatementsDateUinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatementsViewModelItem])
                res.statements_view_model_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatementsViewModelItem])
                res.statements_view_model_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out

        return res

    
    def get_api_writtenstatements_statements_id_(self, request: operations.GetAPIWrittenstatementsStatementsIDRequest) -> operations.GetAPIWrittenstatementsStatementsIDResponse:
        r"""Returns a written statement
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/writtenstatements/statements/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIWrittenstatementsStatementsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatementsViewModelSearchResult])
                res.statements_view_model_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatementsViewModelSearchResult])
                res.statements_view_model_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.problem_details = out

        return res

    