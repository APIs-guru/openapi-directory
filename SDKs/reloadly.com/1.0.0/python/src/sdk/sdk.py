

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://polls.apiblueprint.org",
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
        
    
    
    
    def create_a_new_question(self, request: operations.CreateANewQuestionRequest) -> operations.CreateANewQuestionResponse:
        r"""Create a New Question
        You may create your own question using this action. It takes a JSON
        object containing a question and a collection of answers in the
        form of choices.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/questions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateANewQuestionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def list_all_questions(self) -> operations.ListAllQuestionsResponse:
        r"""List All Questions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/questions"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllQuestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    