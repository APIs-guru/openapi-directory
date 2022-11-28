import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Recordings:
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

    
    def get_admin_recordings_status(self) -> operations.GetAdminRecordingsStatusResponse:
        r"""Get recording status
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/recordings/status"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminRecordingsStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAdminRecordingsStatus200ApplicationJSON])
                res.get_admin_recordings_status_200_application_json_object = out

        return res

    
    def post_admin_recordings_snapshot(self, request: operations.PostAdminRecordingsSnapshotRequest) -> operations.PostAdminRecordingsSnapshotResponse:
        r"""Take a snapshot recording
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/recordings/snapshot"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminRecordingsSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAdminRecordingsSnapshot200ApplicationJSON])
                res.post_admin_recordings_snapshot_200_application_json_object = out

        return res

    
    def post_admin_recordings_start(self, request: operations.PostAdminRecordingsStartRequest) -> operations.PostAdminRecordingsStartResponse:
        r"""Start recording
        Begin recording stub mappings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/recordings/start"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminRecordingsStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_admin_recordings_stop(self) -> operations.PostAdminRecordingsStopResponse:
        r"""Stop recording
        End recording of stub mappings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/recordings/stop"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminRecordingsStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAdminRecordingsStop200ApplicationJSON])
                res.post_admin_recordings_stop_200_application_json_object = out

        return res

    