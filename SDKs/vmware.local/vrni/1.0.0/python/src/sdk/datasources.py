import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DataSources:
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

    
    def add_arista_switch(self, request: operations.AddAristaSwitchRequest) -> operations.AddAristaSwitchResponse:
        r"""Create an arista switch data source
        Add arista switch data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/arista-switches"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddAristaSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_brocade_switch(self, request: operations.AddBrocadeSwitchRequest) -> operations.AddBrocadeSwitchResponse:
        r"""Create a brocade switch data source
        Add brocade switch as a data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/brocade-switches"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddBrocadeSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_checkpoint_firewall(self, request: operations.AddCheckpointFirewallRequest) -> operations.AddCheckpointFirewallResponse:
        r"""Create a checkpoint firewall
        Add checkpoint firewall as data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/checkpoint-firewalls"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddCheckpointFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_cisco_switch(self, request: operations.AddCiscoSwitchRequest) -> operations.AddCiscoSwitchResponse:
        r"""Create a cisco switch data source
        Add cisco switch as data source. User must provide one of ip or fqdn field in the request body.
        Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/cisco-switches"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddCiscoSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CiscoSwitchDataSource])
                res.cisco_switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_dell_switch(self, request: operations.AddDellSwitchRequest) -> operations.AddDellSwitchResponse:
        r"""Create a dell switch data source
        Add a dell switch as data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/dell-switches"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddDellSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DellSwitchDataSource])
                res.dell_switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_hpov_manager(self, request: operations.AddHpovManagerRequest) -> operations.AddHpovManagerResponse:
        r"""Create a hp oneview manager data source
        Add a hp oneview manager data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/hpov-managers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddHpovManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_hpvc_manager(self, request: operations.AddHpvcManagerRequest) -> operations.AddHpvcManagerResponse:
        r"""Create a hpvc manager data source
        Add hpvc manager data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/hpvc-managers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddHpvcManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_juniper_switch(self, request: operations.AddJuniperSwitchRequest) -> operations.AddJuniperSwitchResponse:
        r"""Add a juniper switch as data source
        Add switch Datasource
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/juniper-switches"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddJuniperSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_nsxv_manager_datasource(self, request: operations.AddNsxvManagerDatasourceRequest) -> operations.AddNsxvManagerDatasourceResponse:
        r"""Create a nsx-v manager data source
        Add a nsx-v manager data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/nsxv-managers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddNsxvManagerDatasourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NsxvManagerDataSource])
                res.nsxv_manager_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_panorama_firewall(self, request: operations.AddPanoramaFirewallRequest) -> operations.AddPanoramaFirewallResponse:
        r"""Create panorama firewall data source
        Add panorama firewall as data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/panorama-firewalls"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddPanoramaFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_ucs_manager(self, request: operations.AddUcsManagerRequest) -> operations.AddUcsManagerResponse:
        r"""Create an ucs manager data source
        Add an ucs manager as data source
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/ucs-managers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddUcsManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def add_vcenter_datasource(self, request: operations.AddVcenterDatasourceRequest) -> operations.AddVcenterDatasourceResponse:
        r"""Create a vCenter data source
        Add a vcenter data source. User must provide one of ip or fqdn field in the request body.
        Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/vcenters"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVcenterDatasourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VCenterDataSource])
                res.v_center_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_arista_switch(self, request: operations.DeleteAristaSwitchRequest) -> operations.DeleteAristaSwitchResponse:
        r"""Delete an arista switch data source
        Delete an arista switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/arista-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAristaSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_brocade_switch(self, request: operations.DeleteBrocadeSwitchRequest) -> operations.DeleteBrocadeSwitchResponse:
        r"""Delete a brocade switch data source
        Delete a brocade switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/brocade-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBrocadeSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_checkpoint_firewall(self, request: operations.DeleteCheckpointFirewallRequest) -> operations.DeleteCheckpointFirewallResponse:
        r"""Delete a checkpoint firewall data source
        Delete a checkpoint firewall data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/checkpoint-firewalls/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCheckpointFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_cisco_switch(self, request: operations.DeleteCiscoSwitchRequest) -> operations.DeleteCiscoSwitchResponse:
        r"""Delete a cisco switch data source
        Delete a cisco switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/cisco-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCiscoSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_dell_switch(self, request: operations.DeleteDellSwitchRequest) -> operations.DeleteDellSwitchResponse:
        r"""Delete a dell switch data source
        Delete a data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/dell-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDellSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_hpov_manager(self, request: operations.DeleteHpovManagerRequest) -> operations.DeleteHpovManagerResponse:
        r"""Delete a hp oneview data source
        Delete a hp oneview data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpov-managers/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteHpovManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_hpvc_manager(self, request: operations.DeleteHpvcManagerRequest) -> operations.DeleteHpvcManagerResponse:
        r"""Delete a hpvc manager data source
        Delete a hpvc manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpvc-managers/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteHpvcManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_juniper_switch(self, request: operations.DeleteJuniperSwitchRequest) -> operations.DeleteJuniperSwitchResponse:
        r"""Delete a juniper switch data source
        Delete a juniper switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/juniper-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteJuniperSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_nsxv_manager(self, request: operations.DeleteNsxvManagerRequest) -> operations.DeleteNsxvManagerResponse:
        r"""Delete a nsx-v manager data source
        Delete a nsx-v manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/nsxv-managers/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNsxvManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_panorama_firewall(self, request: operations.DeletePanoramaFirewallRequest) -> operations.DeletePanoramaFirewallResponse:
        r"""Delete a panorama firewall data source
        Delete a panorama firewall data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/panorama-firewalls/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePanoramaFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_ucs_manager(self, request: operations.DeleteUcsManagerRequest) -> operations.DeleteUcsManagerResponse:
        r"""Delete an ucs manager data source
        Delete an ucs manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/ucs-managers/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUcsManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def delete_vcenter(self, request: operations.DeleteVcenterRequest) -> operations.DeleteVcenterResponse:
        r"""Delete a vCenter data source
        Delete a data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/vcenters/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVcenterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_arista_switch(self, request: operations.DisableAristaSwitchRequest) -> operations.DisableAristaSwitchResponse:
        r"""Disable an arista switch data source
        Disable an arista switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/arista-switches/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableAristaSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_brocade_switch(self, request: operations.DisableBrocadeSwitchRequest) -> operations.DisableBrocadeSwitchResponse:
        r"""Disable a brocade switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/brocade-switches/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableBrocadeSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_checkpoint_firewall(self, request: operations.DisableCheckpointFirewallRequest) -> operations.DisableCheckpointFirewallResponse:
        r"""Disable a checkpoint firewall data source
        Disable a checkpoint firewall data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/checkpoint-firewalls/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableCheckpointFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_cisco_switch(self, request: operations.DisableCiscoSwitchRequest) -> operations.DisableCiscoSwitchResponse:
        r"""Disable a cisco switch data source
        Disable a cisco switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/cisco-switches/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableCiscoSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_dell_switch(self, request: operations.DisableDellSwitchRequest) -> operations.DisableDellSwitchResponse:
        r"""Disable a dell switch data source
        Disable a dell switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/dell-switches/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableDellSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_hpov_manager(self, request: operations.DisableHpovManagerRequest) -> operations.DisableHpovManagerResponse:
        r"""Disable a hp oneview data source
        Disable a hp oneview data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpov-managers/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableHpovManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_hpvc_manager(self, request: operations.DisableHpvcManagerRequest) -> operations.DisableHpvcManagerResponse:
        r"""Disable a hpvc manager data source
        Disable a hpvc manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpvc-managers/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableHpvcManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_juniper_switch(self, request: operations.DisableJuniperSwitchRequest) -> operations.DisableJuniperSwitchResponse:
        r"""Disable a juniper switch data source
        Disable a juniper switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/juniper-switches/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableJuniperSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_nsxv_manager(self, request: operations.DisableNsxvManagerRequest) -> operations.DisableNsxvManagerResponse:
        r"""Disable a nsx-v manager data source
        Disable a nsx-v manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/nsxv-managers/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableNsxvManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_panorama_firewall(self, request: operations.DisablePanoramaFirewallRequest) -> operations.DisablePanoramaFirewallResponse:
        r"""Disable a panorama firewall data source
        Disable a panorama firewall data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/panorama-firewalls/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisablePanoramaFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_ucs_manager(self, request: operations.DisableUcsManagerRequest) -> operations.DisableUcsManagerResponse:
        r"""Disable an ucs manager data source
        Disable an ucs manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/ucs-managers/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableUcsManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def disable_vcenter(self, request: operations.DisableVcenterRequest) -> operations.DisableVcenterResponse:
        r"""Disable a vCenter data source
        Disable a vCenter data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/vcenters/{id}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableVcenterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_arista_switch(self, request: operations.EnableAristaSwitchRequest) -> operations.EnableAristaSwitchResponse:
        r"""Enable an arista switch data source
        Enable an arista switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/arista-switches/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableAristaSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_brocade_switch(self, request: operations.EnableBrocadeSwitchRequest) -> operations.EnableBrocadeSwitchResponse:
        r"""Enable a brocade switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/brocade-switches/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableBrocadeSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_checkpoint_firewall(self, request: operations.EnableCheckpointFirewallRequest) -> operations.EnableCheckpointFirewallResponse:
        r"""Enable a checkpoint firewall data source
        Enable a checkpoint firewall data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/checkpoint-firewalls/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableCheckpointFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_cisco_switch(self, request: operations.EnableCiscoSwitchRequest) -> operations.EnableCiscoSwitchResponse:
        r"""Enable a cisco switch data source
        Enable a cisco switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/cisco-switches/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableCiscoSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_dell_switch(self, request: operations.EnableDellSwitchRequest) -> operations.EnableDellSwitchResponse:
        r"""Enable a dell switch data source
        Enable a dell switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/dell-switches/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableDellSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_hpov_manager(self, request: operations.EnableHpovManagerRequest) -> operations.EnableHpovManagerResponse:
        r"""Enable a hp oneview data source
        Enable a hp oneview data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpov-managers/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableHpovManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_hpvc_manager(self, request: operations.EnableHpvcManagerRequest) -> operations.EnableHpvcManagerResponse:
        r"""Enable a hpvc manager data source
        Enable a hpvc manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpvc-managers/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableHpvcManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_juniper_switch(self, request: operations.EnableJuniperSwitchRequest) -> operations.EnableJuniperSwitchResponse:
        r"""Enable a juniper switch data source
        Enable a juniper switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/juniper-switches/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableJuniperSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_nsxv_manager(self, request: operations.EnableNsxvManagerRequest) -> operations.EnableNsxvManagerResponse:
        r"""Enable a nsx-v manager data source
        Enable a nsx-v manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/nsxv-managers/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableNsxvManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_panorama_firewall(self, request: operations.EnablePanoramaFirewallRequest) -> operations.EnablePanoramaFirewallResponse:
        r"""Enable a panorama firewall data source
        Enable a panorama firewall data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/panorama-firewalls/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnablePanoramaFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_ucs_manager(self, request: operations.EnableUcsManagerRequest) -> operations.EnableUcsManagerResponse:
        r"""Enable an ucs manager data source
        Enable an ucs manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/ucs-managers/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableUcsManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def enable_vcenter(self, request: operations.EnableVcenterRequest) -> operations.EnableVcenterResponse:
        r"""Enable a vCenter data source
        Enable a vCenter data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/vcenters/{id}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableVcenterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_arista_switch(self, request: operations.GetAristaSwitchRequest) -> operations.GetAristaSwitchResponse:
        r"""Show arista switch data source details
        Show arista switch data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/arista-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAristaSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_arista_switch_snmp_config(self, request: operations.GetAristaSwitchSnmpConfigRequest) -> operations.GetAristaSwitchSnmpConfigResponse:
        r"""Show snmp config for arista switch data source
        Show snmp config for arista switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/arista-switches/{id}/snmp-config", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAristaSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_brocade_switch(self, request: operations.GetBrocadeSwitchRequest) -> operations.GetBrocadeSwitchResponse:
        r"""Show brocade switch data source details
        Show brocade switch data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/brocade-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrocadeSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_brocade_switch_snmp_config(self, request: operations.GetBrocadeSwitchSnmpConfigRequest) -> operations.GetBrocadeSwitchSnmpConfigResponse:
        r"""Show snmp config for brocade switch data source
        Show snmp config for brocade switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/brocade-switches/{id}/snmp-config", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrocadeSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_checkpoint_firewall(self, request: operations.GetCheckpointFirewallRequest) -> operations.GetCheckpointFirewallResponse:
        r"""Show checkpoint firewall data source details
        Show checkpoint firewall data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/checkpoint-firewalls/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCheckpointFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_cisco_switch(self, request: operations.GetCiscoSwitchRequest) -> operations.GetCiscoSwitchResponse:
        r"""Show cisco switch data source details
        Show cisco switch data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/cisco-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCiscoSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CiscoSwitchDataSource])
                res.cisco_switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_cisco_switch_snmp_config(self, request: operations.GetCiscoSwitchSnmpConfigRequest) -> operations.GetCiscoSwitchSnmpConfigResponse:
        r"""Show snmp config for cisco switch data source
        Show snmp config for cisco switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/cisco-switches/{id}/snmp-config", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCiscoSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_dell_switch(self, request: operations.GetDellSwitchRequest) -> operations.GetDellSwitchResponse:
        r"""Show dell switch data source details
        Get a dell switch data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/dell-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDellSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DellSwitchDataSource])
                res.dell_switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_dell_switch_snmp_config(self, request: operations.GetDellSwitchSnmpConfigRequest) -> operations.GetDellSwitchSnmpConfigResponse:
        r"""Show snmp config for dell switch data source
        Show snmp config for dell switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/dell-switches/{id}/snmp-config", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDellSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_hpov_manager(self, request: operations.GetHpovManagerRequest) -> operations.GetHpovManagerResponse:
        r"""Show hp oneview data source details
        Show hp oneview data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpov-managers/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHpovManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_hpvc_manager(self, request: operations.GetHpvcManagerRequest) -> operations.GetHpvcManagerResponse:
        r"""Show hpvc data source details
        Show hpvc data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpvc-managers/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHpvcManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_juniper_switch(self, request: operations.GetJuniperSwitchRequest) -> operations.GetJuniperSwitchResponse:
        r"""Show juniper switch data source details
        Show juniper switch data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/juniper-switches/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJuniperSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_juniper_switch_snmp_config(self, request: operations.GetJuniperSwitchSnmpConfigRequest) -> operations.GetJuniperSwitchSnmpConfigResponse:
        r"""Show snmp config for juniper switch data source
        Show snmp config for juniper switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/juniper-switches/{id}/snmp-config", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJuniperSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_nsxv_controller_cluster(self, request: operations.GetNsxvControllerClusterRequest) -> operations.GetNsxvControllerClusterResponse:
        r"""Show nsx controller-cluster details
        Show nsx controller-cluster details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/nsxv-managers/{id}/controller-cluster", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNsxvControllerClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NsxControllerDataCollection])
                res.nsx_controller_data_collection = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_nsxv_manager(self, request: operations.GetNsxvManagerRequest) -> operations.GetNsxvManagerResponse:
        r"""Show nsx-v manager data source details
        Show nsx-v manager data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/nsxv-managers/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNsxvManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NsxvManagerDataSource])
                res.nsxv_manager_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_panorama_firewall(self, request: operations.GetPanoramaFirewallRequest) -> operations.GetPanoramaFirewallResponse:
        r"""Show panorama firewall data source details
        Show panorama firewall data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/panorama-firewalls/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPanoramaFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_ucs_manager(self, request: operations.GetUcsManagerRequest) -> operations.GetUcsManagerResponse:
        r"""Show ucs manager data source details
        Show ucs manager data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/ucs-managers/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUcsManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_ucs_snmp_config(self, request: operations.GetUcsSnmpConfigRequest) -> operations.GetUcsSnmpConfigResponse:
        r"""Show snmp config for ucs fabric interconnects
        Show snmp config for ucs fabric interconnects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/ucs-managers/{id}/snmp-config", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUcsSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_vcenter(self, request: operations.GetVcenterRequest) -> operations.GetVcenterResponse:
        r"""Show vCenter data source details
        Show vCenter data source details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/vcenters/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVcenterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VCenterDataSource])
                res.v_center_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_arista_switches(self, request: operations.ListAristaSwitchesRequest) -> operations.ListAristaSwitchesResponse:
        r"""List arista switch data sources
        List arista switch data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/arista-switches"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAristaSwitchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_brocade_switches(self, request: operations.ListBrocadeSwitchesRequest) -> operations.ListBrocadeSwitchesResponse:
        r"""List brocade switch data sources
        List brocade switch data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/brocade-switches"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBrocadeSwitchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_checkpoint_firewalls(self, request: operations.ListCheckpointFirewallsRequest) -> operations.ListCheckpointFirewallsResponse:
        r"""List checkpoint firewall data sources
        List checkpoint firewall data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/checkpoint-firewalls"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCheckpointFirewallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_cisco_switches(self, request: operations.ListCiscoSwitchesRequest) -> operations.ListCiscoSwitchesResponse:
        r"""List cisco switch data sources
        List cisco switch data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/cisco-switches"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCiscoSwitchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_dell_switches(self, request: operations.ListDellSwitchesRequest) -> operations.ListDellSwitchesResponse:
        r"""List dell switch data sources
        List dell switch data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/dell-switches"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDellSwitchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_hpov_managers(self, request: operations.ListHpovManagersRequest) -> operations.ListHpovManagersResponse:
        r"""List hp oneview manager data sources
        List hp oneview manager data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/hpov-managers"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHpovManagersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_hpvc_managers(self, request: operations.ListHpvcManagersRequest) -> operations.ListHpvcManagersResponse:
        r"""List hpvc manager data sources
        List hpvc manager data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/hpvc-managers"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHpvcManagersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_juniper_switches(self, request: operations.ListJuniperSwitchesRequest) -> operations.ListJuniperSwitchesResponse:
        r"""List juniper switch data sources
        List juniper switch data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/juniper-switches"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListJuniperSwitchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_nsxv_managers(self, request: operations.ListNsxvManagersRequest) -> operations.ListNsxvManagersResponse:
        r"""List nsx-v manager data sources
        List nsx-v manager data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/nsxv-managers"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNsxvManagersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_panorama_firewalls(self, request: operations.ListPanoramaFirewallsRequest) -> operations.ListPanoramaFirewallsResponse:
        r"""List panorama firewall data sources
        List panorama firewall data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/panorama-firewalls"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPanoramaFirewallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_ucs_managers(self, request: operations.ListUcsManagersRequest) -> operations.ListUcsManagersResponse:
        r"""List ucs manager data sources
        List ucs manager data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/ucs-managers"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUcsManagersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_vcenters(self, request: operations.ListVcentersRequest) -> operations.ListVcentersResponse:
        r"""List vCenter data sources
        List vCenter data sources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data-sources/vcenters"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVcentersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataSourceListResponse])
                res.data_source_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_arista_switch(self, request: operations.UpdateAristaSwitchRequest) -> operations.UpdateAristaSwitchResponse:
        r"""Update an arista switch data source
        Update an switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/arista-switches/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAristaSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_arista_switch_snmp_config(self, request: operations.UpdateAristaSwitchSnmpConfigRequest) -> operations.UpdateAristaSwitchSnmpConfigResponse:
        r"""Update snmp config for arista switch data source
        Update snmp config for arista switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/arista-switches/{id}/snmp-config", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAristaSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_brocade_switch(self, request: operations.UpdateBrocadeSwitchRequest) -> operations.UpdateBrocadeSwitchResponse:
        r"""Update a brocade switch data source
        Update a brocade switch data source. Only credentials, nickname and notes can be updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/brocade-switches/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBrocadeSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_brocade_switch_snmp_config(self, request: operations.UpdateBrocadeSwitchSnmpConfigRequest) -> operations.UpdateBrocadeSwitchSnmpConfigResponse:
        r"""Update snmp config for brocade switch data source
        Update snmp config for brocade switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/brocade-switches/{id}/snmp-config", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBrocadeSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_checkpoint_firewall(self, request: operations.UpdateCheckpointFirewallRequest) -> operations.UpdateCheckpointFirewallResponse:
        r"""Update a checkpoint firewall data source
        Update a checkpoint firewall data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/checkpoint-firewalls/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCheckpointFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_cisco_switch(self, request: operations.UpdateCiscoSwitchRequest) -> operations.UpdateCiscoSwitchResponse:
        r"""Update a cisco switch data source
        Update a cisco switch data source. Only credentials, nickname and notes can be updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/cisco-switches/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCiscoSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CiscoSwitchDataSource])
                res.cisco_switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_cisco_switch_snmp_config(self, request: operations.UpdateCiscoSwitchSnmpConfigRequest) -> operations.UpdateCiscoSwitchSnmpConfigResponse:
        r"""Update snmp config for cisco switch data source
        Update snmp config for cisco switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/cisco-switches/{id}/snmp-config", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCiscoSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_dell_switch(self, request: operations.UpdateDellSwitchRequest) -> operations.UpdateDellSwitchResponse:
        r"""Update a dell switch data source
        Update a dell switch data source. Only credentials, nickname and notes can be updated
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/dell-switches/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDellSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DellSwitchDataSource])
                res.dell_switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_dell_switch_snmp_config(self, request: operations.UpdateDellSwitchSnmpConfigRequest) -> operations.UpdateDellSwitchSnmpConfigResponse:
        r"""Update snmp config for dell switch data source
        Update snmp config for dell switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/dell-switches/{id}/snmp-config", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDellSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_hpov_manager(self, request: operations.UpdateHpovManagerRequest) -> operations.UpdateHpovManagerResponse:
        r"""Update a hp oneview data source
        Update a hp oneview data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpov-managers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateHpovManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_hpvc_manager(self, request: operations.UpdateHpvcManagerRequest) -> operations.UpdateHpvcManagerResponse:
        r"""Update a hpvc manager data source
        Update a hpvc manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/hpvc-managers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateHpvcManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_juniper_switch(self, request: operations.UpdateJuniperSwitchRequest) -> operations.UpdateJuniperSwitchResponse:
        r"""Update a juniper switch data source
        Update a juniper switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/juniper-switches/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateJuniperSwitchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_juniper_switch_snmp_config(self, request: operations.UpdateJuniperSwitchSnmpConfigRequest) -> operations.UpdateJuniperSwitchSnmpConfigResponse:
        r"""Update snmp config for a juniper switch data source
        Update snmp config for a juniper switch data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/juniper-switches/{id}/snmp-config", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateJuniperSwitchSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_nsxv_controller_cluster(self, request: operations.UpdateNsxvControllerClusterRequest) -> operations.UpdateNsxvControllerClusterResponse:
        r"""Update nsx controller-cluster details
        Update nsx controller-cluster details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/nsxv-managers/{id}/controller-cluster", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNsxvControllerClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NsxControllerDataCollection])
                res.nsx_controller_data_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_nsxv_manager(self, request: operations.UpdateNsxvManagerRequest) -> operations.UpdateNsxvManagerResponse:
        r"""Update a nsx-v manager data source
        Update a nsx-v manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/nsxv-managers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNsxvManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NsxvManagerDataSource])
                res.nsxv_manager_data_source = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_panorama_firewall(self, request: operations.UpdatePanoramaFirewallRequest) -> operations.UpdatePanoramaFirewallResponse:
        r"""Update a panorama firewall data source
        Update a panorama firewall data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/panorama-firewalls/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePanoramaFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_ucs_manager(self, request: operations.UpdateUcsManagerRequest) -> operations.UpdateUcsManagerResponse:
        r"""Update an ucs manager data source
        Update an ucs manager data source
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/ucs-managers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUcsManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SwitchDataSource])
                res.switch_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_ucs_snmp_config(self, request: operations.UpdateUcsSnmpConfigRequest) -> operations.UpdateUcsSnmpConfigResponse:
        r"""Update snmp config for ucs fabric interconnects
        Update snmp config for ucs fabric interconnects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/ucs-managers/{id}/snmp-config", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUcsSnmpConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnmpConfig])
                res.snmp_config = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_vcenter(self, request: operations.UpdateVcenterRequest) -> operations.UpdateVcenterResponse:
        r"""Update a vCenter data source.
        Update a vcenter data source. Only nickname, notes and credentials can be updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data-sources/vcenters/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateVcenterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VCenterDataSource])
                res.v_center_data_source = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIError])
                res.api_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    