import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class ObservationHeadingController:
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

    
    def get_available_observation_headings(self, request: operations.GetAvailableObservationHeadingsRequest) -> operations.GetAvailableObservationHeadingsResponse:
        r"""Get Available Observations Types For a User
        Given a User ID retrieve a list of available observation types for that user (where they have observation data).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{userId}/availableobservationheadings", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvailableObservationHeadingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ObservationHeading]])
                res.observation_headings = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_patient_entered_observation_headings(self, request: operations.GetPatientEnteredObservationHeadingsRequest) -> operations.GetPatientEnteredObservationHeadingsResponse:
        r"""Get Available Patient Entered Observations Types For a User
        Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{userId}/patiententeredobservationheadings", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientEnteredObservationHeadingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ObservationHeading]])
                res.observation_headings = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    