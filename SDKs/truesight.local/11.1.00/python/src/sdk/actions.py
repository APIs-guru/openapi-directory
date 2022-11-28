import requests
from sdk.models import operations
from . import utils

class Actions:
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

    
    def collect_now(self, request: operations.CollectNowRequest) -> operations.CollectNowResponse:
        r"""Triggers a new collect on a specific device.
        You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hardware/actions/{deviceId}/collect-now", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectNowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def rediscover(self, request: operations.RediscoverRequest) -> operations.RediscoverResponse:
        r"""Triggers a new discovery on a specific device.
        You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hardware/actions/{deviceId}/rediscover", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RediscoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def reinitialize(self, request: operations.ReinitializeRequest) -> operations.ReinitializeResponse:
        r"""Sends a 'Reinitialize KM' command.
        Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hardware/actions/{deviceId}/reinitialize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReinitializeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def remove(self, request: operations.RemoveRequest) -> operations.RemoveResponse:
        r"""Removes a specific instance from the monitoring environment.
        You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:\"path\":\"/MS_HW_MAIN/10025150\" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hardware/actions/{deviceId}/remove", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def reset(self, request: operations.ResetRequest) -> operations.ResetResponse:
        r"""Resets the Error Count parameter.
        Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:\"path\":\"/MS_HW_MAIN/10025150\" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hardware/actions/{deviceId}/reset-error-count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    