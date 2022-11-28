import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Inventories:
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

    
    def file_watcher_restart(self) -> operations.FileWatcherRestartResponse:
        r"""Restart inventory watcher
        Restart the inventory watcher if necessary
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/inventories/watcher/restart"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FileWatcherRestartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.FileWatcherRestart200ApplicationJSON])
                res.file_watcher_restart_200_application_json_object = out

        return res

    
    def file_watcher_start(self) -> operations.FileWatcherStartResponse:
        r"""Start inventory watcher
        Start the inventory watcher if necessary
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/inventories/watcher/start"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FileWatcherStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.FileWatcherStart200ApplicationJSON])
                res.file_watcher_start_200_application_json_object = out

        return res

    
    def file_watcher_stop(self) -> operations.FileWatcherStopResponse:
        r"""Stop inventory watcher
        Stop the inventory watcher if necessary
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/inventories/watcher/stop"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FileWatcherStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.FileWatcherStop200ApplicationJSON])
                res.file_watcher_stop_200_application_json_object = out

        return res

    
    def queue_information(self) -> operations.QueueInformationResponse:
        r"""Get information about inventory processing queue
        Provide information about the current state of the inventory processor
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/inventories/info"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.QueueInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.QueueInformation200ApplicationJSON])
                res.queue_information_200_application_json_object = out

        return res

    
    def upload_inventory(self, request: operations.UploadInventoryRequest) -> operations.UploadInventoryResponse:
        r"""Upload an inventory for processing
        Upload an inventory to the web application
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/inventories/upload"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UploadInventory200ApplicationJSON])
                res.upload_inventory_200_application_json_object = out

        return res

    