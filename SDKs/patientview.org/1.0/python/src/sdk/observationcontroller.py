import requests
from sdk.models import operations
from . import utils

class ObservationController:
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

    
    def get_observations_by_code(self, request: operations.GetObservationsByCodeRequest) -> operations.GetObservationsByCodeResponse:
        r"""Get Observations of a Certain Type For a User
        Given a User ID and observation code, retrieve all observations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{userId}/observations/{code}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObservationsByCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_observations_by_codes(self, request: operations.GetObservationsByCodesRequest) -> operations.GetObservationsByCodesResponse:
        r"""Get Observations of Multiple Types For a User
        Given a User ID and search parameters, retrieve a page of observations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{userId}/observations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObservationsByCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_patient_entered_observations_by_code(self, request: operations.GetPatientEnteredObservationsByCodeRequest) -> operations.GetPatientEnteredObservationsByCodeResponse:
        r"""Get patient entered Observations of a Certain Type For a User
        Given a User ID and observation code, retrieve patient entered observations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{userId}/observations/{code}/patiententered", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientEnteredObservationsByCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    