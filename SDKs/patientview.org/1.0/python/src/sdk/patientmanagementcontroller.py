import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class PatientManagementController:
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

    
    def get_patient_management(self, request: operations.GetPatientManagementRequest) -> operations.GetPatientManagementResponse:
        r"""getPatientManagement
        getPatientManagement
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientManagementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatientManagement])
                res.patient_management = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_patient_management_diagnoses(self) -> operations.GetPatientManagementDiagnosesResponse:
        r"""getPatientManagementDiagnoses
        getPatientManagementDiagnoses
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/patientmanagement/diagnoses"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientManagementDiagnosesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Code]])
                res.codes = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_patient_management_lookup_types(self) -> operations.GetPatientManagementLookupTypesResponse:
        r"""getPatientManagementLookupTypes
        getPatientManagementLookupTypes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/patientmanagement/lookuptypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientManagementLookupTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LookupType]])
                res.lookup_types = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def save_patient_management(self, request: operations.SavePatientManagementRequest) -> operations.SavePatientManagementResponse:
        r"""savePatientManagement
        savePatientManagement
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SavePatientManagementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def save_patient_management_surgeries(self, request: operations.SavePatientManagementSurgeriesRequest) -> operations.SavePatientManagementSurgeriesResponse:
        r"""savePatientManagementSurgeries
        savePatientManagementSurgeries
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}/surgeries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SavePatientManagementSurgeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def validate_patient_management(self, request: operations.ValidatePatientManagementRequest) -> operations.ValidatePatientManagementResponse:
        r"""validatePatientManagement
        validatePatientManagement
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/patientmanagement/validate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ValidatePatientManagementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    