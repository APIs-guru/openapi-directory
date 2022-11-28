

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://smart-me.com:443",
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
        
    
    
    
    def access_token_put(self, request: operations.AccessTokenPutRequest) -> operations.AccessTokenPutResponse:
        r"""Creates a Access Token to write on a Card (e.g. NFC)
        Creates a Access Token to write on a Card (e.g. NFC)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/AccessToken"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessTokenPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.access_token_put_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.access_token_put_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.access_token_put_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.access_token_put_200_text_xml_string = r.content

        return res

    
    def account_login(self) -> operations.AccountLoginResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Account/login"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def actions_get(self, request: operations.ActionsGetRequest) -> operations.ActionsGetResponse:
        r"""Gets all available Actions of a Device
        Gets all available Actions of a Device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Actions/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ActionInformation]])
                res.action_informations = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ActionInformation]])
                res.action_informations = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def additional_device_information_get(self, request: operations.AdditionalDeviceInformationGetRequest) -> operations.AdditionalDeviceInformationGetResponse:
        r"""Gets the additional information (e.g. Firmware Version) about a device.
        Gets the additional information (e.g. Firmware Version) about a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/AdditionalDeviceInformation/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AdditionalDeviceInformationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdditionalDeviceInformation])
                res.additional_device_information = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdditionalDeviceInformation])
                res.additional_device_information = out

        return res

    
    def custom_device_get(self) -> operations.CustomDeviceGetResponse:
        r"""Gets all Custom Devices
        Gets all Devices
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/CustomDevice"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomDeviceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CustomDeviceToPost]])
                res.custom_device_to_posts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CustomDeviceToPost]])
                res.custom_device_to_posts = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def device_by_serial_get(self, request: operations.DeviceBySerialGetRequest) -> operations.DeviceBySerialGetResponse:
        r"""Gets a Device by it's Serial Number. The Serial is the part before the \"-\".
        Gets a Device by it's Serial Number. The Serial is the part before the \"-\".
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/DeviceBySerial"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeviceBySerialGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def devices_by_energy_get(self, request: operations.DevicesByEnergyGetRequest) -> operations.DevicesByEnergyGetResponse:
        r"""Gets all Devices for an Energy Type
        Gets all Devices for an Energy Type
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/DevicesByEnergy"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DevicesByEnergyGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def devices_by_sub_type_get(self, request: operations.DevicesBySubTypeGetRequest) -> operations.DevicesBySubTypeGetResponse:
        r"""Gets all Devices by it's Sub Type (e.g. E-Charging Station)
        Gets all Devices by it's Sub Type (e.g. E-Charging Station)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/DevicesBySubType"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DevicesBySubTypeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def devices_get(self) -> operations.DevicesGetResponse:
        r"""Gets all Devices
        Gets all Devices
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Devices"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DevicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def devices_post(self, request: operations.DevicesPostRequest) -> operations.DevicesPostResponse:
        r"""Creates or updates a Device or updates it's values.
        Creates or updates a Device or updates it's values. 
                    For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
                    To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Devices"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DevicesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceToPost])
                res.device_to_post = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceToPost])
                res.device_to_post = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def devices_put(self, request: operations.DevicesPutRequest) -> operations.DevicesPutResponse:
        r"""Updates the On/Off Switch on a device. 
                    For new implementations please use the \"actions\" command
        Updates the On/Off Switch on a device
                    For new implementations please use the \"actions\" command
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Devices/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DevicesPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 405:
            pass

        return res

    
    def fast_send_device_values_get(self, request: operations.FastSendDeviceValuesGetRequest) -> operations.FastSendDeviceValuesGetResponse:
        r"""Force a device to send the data every second (if supported). This for about 30s.
                    Don't use this call to force a device to send the data every second for a longer time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/FastSendDeviceValues/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FastSendDeviceValuesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def folder_assign_post(self, request: operations.FolderAssignPostRequest) -> operations.FolderAssignPostResponse:
        r"""Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/folder/assign"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FolderAssignPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def folder_menu_get(self, request: operations.FolderMenuGetRequest) -> operations.FolderMenuGetResponse:
        r"""Gets the folder menu items (each item might contain child items)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/FolderMenu"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FolderMenuGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderMenuConfiguration])
                res.folder_menu_configuration = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderMenuConfiguration])
                res.folder_menu_configuration = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def folder_settings_delete(self, request: operations.FolderSettingsDeleteRequest) -> operations.FolderSettingsDeleteResponse:
        r"""Deletes a folder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/folder/settings/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FolderSettingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def folder_settings_get(self, request: operations.FolderSettingsGetRequest) -> operations.FolderSettingsGetResponse:
        r"""Gets the settings of a folder or meter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/folder/settings/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FolderSettingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderSettings])
                res.folder_settings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderSettings])
                res.folder_settings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def folder_settings_post(self, request: operations.FolderSettingsPostRequest) -> operations.FolderSettingsPostResponse:
        r"""Add or edit a folder or a meter. To add a new folder use and empty ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/folder/settings/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FolderSettingsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderMenuItem])
                res.folder_menu_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderMenuItem])
                res.folder_menu_item = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def folder_get(self, request: operations.FolderGetRequest) -> operations.FolderGetResponse:
        r"""Gets the Values for a folder or a meter
        Gets the Values for a folder or a meter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Folder/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FolderGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderData])
                res.folder_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FolderData])
                res.folder_data = out

        return res

    
    def get_api_custom_device_id_(self, request: operations.GetAPICustomDeviceIDRequest) -> operations.GetAPICustomDeviceIDResponse:
        r"""Gets a Custom Device by it's ID
        Gets a Device by it's ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/CustomDevice/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPICustomDeviceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomDeviceToPost])
                res.custom_device_to_post = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomDeviceToPost])
                res.custom_device_to_post = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_api_devices_id_(self, request: operations.GetAPIDevicesIDRequest) -> operations.GetAPIDevicesIDResponse:
        r"""Gets a Device by it's ID
        Gets a Device by it's ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Devices/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIDevicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_api_virtual_tariff_id_(self, request: operations.GetAPIVirtualTariffIDRequest) -> operations.GetAPIVirtualTariffIDResponse:
        r"""Gets all virtual tariffs of a folder
        Gets all virtual tariffs of a folder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/VirtualTariff/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVirtualTariffIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualTariffsOfFolder])
                res.virtual_tariffs_of_folder = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualTariffsOfFolder])
                res.virtual_tariffs_of_folder = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_api_pico_loadmanagementgroup(self) -> operations.GetAPIPicoLoadmanagementgroupResponse:
        r"""GET: api/pico/loadmanagementgroup
                    
                    Returns all available load management groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/pico/loadmanagementgroup"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPicoLoadmanagementgroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PicoLoadmanagementGroupDto]])
                res.pico_loadmanagement_group_dtos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PicoLoadmanagementGroupDto]])
                res.pico_loadmanagement_group_dtos = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def health_get(self) -> operations.HealthGetResponse:
        r"""A method returning HTTP 200 OK when queried.
                    It is used by Kubernetes probes to determine whether the app is healthy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def m_bus_post(self, request: operations.MBusPostRequest) -> operations.MBusPostResponse:
        r"""M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
                    Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
        M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
                    Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/MBus"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MBusPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def meter_folder_information_get(self, request: operations.MeterFolderInformationGetRequest) -> operations.MeterFolderInformationGetResponse:
        r"""Beta: Gets the General Information for a Meter or a Folder
        Beta: Gets the General Information for a Meter or a Folder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/MeterFolderInformation/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeterFolderInformationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MeterFolderInformation])
                res.meter_folder_information = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MeterFolderInformation])
                res.meter_folder_information = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def meter_folder_information_post(self, request: operations.MeterFolderInformationPostRequest) -> operations.MeterFolderInformationPostResponse:
        r"""Sets the Name of a Meter or a Folder
        Sets the Name of a Meter or a Folder
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/MeterFolderInformation"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeterFolderInformationPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def meter_values_get(self, request: operations.MeterValuesGetRequest) -> operations.MeterValuesGetResponse:
        r"""Gets the Values for a Meter at a given Date. 
                    The first Value found before the given Date is returned.
        Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/MeterValues/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeterValuesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInPast])
                res.device_in_past = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInPast])
                res.device_in_past = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def o_auth_authorize(self, request: operations.OAuthAuthorizeRequest) -> operations.OAuthAuthorizeResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/oauth/authorize"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OAuthAuthorizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_api_account_login(self) -> operations.PostAPIAccountLoginResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Account/login"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIAccountLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_api_oauth_authorize(self, request: operations.PostAPIOauthAuthorizeRequest) -> operations.PostAPIOauthAuthorizeResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/oauth/authorize"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIOauthAuthorizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def pico_charging_history_get(self, request: operations.PicoChargingHistoryGetRequest) -> operations.PicoChargingHistoryGetResponse:
        r"""Gets the last charging history for a pico station
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/pico/history/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PicoChargingHistoryGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PicoChargingHistoryData]])
                res.pico_charging_history_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PicoChargingHistoryData]])
                res.pico_charging_history_data = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def pico_charging_get(self, request: operations.PicoChargingGetRequest) -> operations.PicoChargingGetResponse:
        r"""Gets the active charging data of a pico station
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/pico/charging/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PicoChargingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PicoChargingData])
                res.pico_charging_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PicoChargingData])
                res.pico_charging_data = out

        return res

    
    def pico_loadmanagement_group_get(self, request: operations.PicoLoadmanagementGroupGetRequest) -> operations.PicoLoadmanagementGroupGetResponse:
        r"""GET: api/pico/loadmanagementgroup
                    
                    Returns a pico load management group by it's id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/pico/loadmanagementgroup/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PicoLoadmanagementGroupGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PicoLoadmanagementGroupDto])
                res.pico_loadmanagement_group_dto = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PicoLoadmanagementGroupDto])
                res.pico_loadmanagement_group_dto = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def pico_loadmanagement_set_dynamic_current_post(self, request: operations.PicoLoadmanagementSetDynamicCurrentPostRequest) -> operations.PicoLoadmanagementSetDynamicCurrentPostResponse:
        r"""Sets the dynamic current of a load management group or a single station.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/pico/loadmanagementgroup/current/{serial}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PicoLoadmanagementSetDynamicCurrentPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def pico_settings_get(self, request: operations.PicoSettingsGetRequest) -> operations.PicoSettingsGetResponse:
        r"""GET: api/pico/settings
                    
                    Returns the settings of a pico charging station.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/pico/settings/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PicoSettingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PicoSettingsDto])
                res.pico_settings_dto = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PicoSettingsDto])
                res.pico_settings_dto = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def register_for_realtime_api_delete(self, request: operations.RegisterForRealtimeAPIDeleteRequest) -> operations.RegisterForRealtimeAPIDeleteResponse:
        r"""Deletes a realtime API registration.
        Deletes a realtime API registration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/RegisterForRealtimeApi/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegisterForRealtimeAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def register_for_realtime_api_get(self) -> operations.RegisterForRealtimeAPIGetResponse:
        r"""Gets all registrations for the Realtime API.
        Gets all registrations for the Realtime API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/RegisterForRealtimeApi"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegisterForRealtimeAPIGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RegisterRealtimeAPIData]])
                res.register_realtime_api_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RegisterRealtimeAPIData]])
                res.register_realtime_api_data = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def register_for_realtime_api_post(self, request: operations.RegisterForRealtimeAPIPostRequest) -> operations.RegisterForRealtimeAPIPostResponse:
        r"""Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
                     More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
        Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/RegisterForRealtimeApi"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegisterForRealtimeAPIPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def smart_me_device_configuration_get(self, request: operations.SmartMeDeviceConfigurationGetRequest) -> operations.SmartMeDeviceConfigurationGetResponse:
        r"""Gets the configuration of a smart-me device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/SmartMeDeviceConfiguration/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SmartMeDeviceConfigurationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SmartMeDeviceConfigurationContainer])
                res.smart_me_device_configuration_container = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SmartMeDeviceConfigurationContainer])
                res.smart_me_device_configuration_container = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def sub_user_delete(self, request: operations.SubUserDeleteRequest) -> operations.SubUserDeleteResponse:
        r"""Delete a subuser
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/SubUser/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubUserDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def sub_user_get(self, request: operations.SubUserGetRequest) -> operations.SubUserGetResponse:
        r"""Get a sub user. The user must be assigend to the user that makes this call.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/SubUser/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubUserGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubUserData])
                res.sub_user_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubUserData])
                res.sub_user_data = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def sub_user_post(self, request: operations.SubUserPostRequest) -> operations.SubUserPostResponse:
        r"""Creates or updates a subuser.
                    To create a new user set no ID (empty)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/SubUser"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubUserPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_to_folder_assign_delete(self, request: operations.UserToFolderAssignDeleteRequest) -> operations.UserToFolderAssignDeleteResponse:
        r"""Deletes a user to folder assignement
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/folder/user/assign"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserToFolderAssignDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_to_folder_assign_post(self, request: operations.UserToFolderAssignPostRequest) -> operations.UserToFolderAssignPostResponse:
        r"""Assign a user to a folder
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/folder/user/assign"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserToFolderAssignPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_get(self) -> operations.UserGetResponse:
        r"""Gets the informations for the user.
        Gets the informations for the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/User"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def values_in_past_multiple_get(self, request: operations.ValuesInPastMultipleGetRequest) -> operations.ValuesInPastMultipleGetResponse:
        r"""Gets multiple values of a device. This call needs a smart-me professional licence.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/ValuesInPastMultiple/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ValuesInPastMultipleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ValuesData]])
                res.values_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ValuesData]])
                res.values_data = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def values_in_past_get(self, request: operations.ValuesInPastGetRequest) -> operations.ValuesInPastGetResponse:
        r"""Gets all (last) values of a device
                    The first Value found before the given Date is returned.
        Gets the Values for a device at a given Date. The first Value found before the given Date is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/ValuesInPast/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ValuesInPastGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValuesData])
                res.values_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValuesData])
                res.values_data = out

        return res

    
    def values_get(self, request: operations.ValuesGetRequest) -> operations.ValuesGetResponse:
        r"""Gets all (last) values of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Values/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ValuesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValuesData])
                res.values_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValuesData])
                res.values_data = out

        return res

    
    def virtual_billing_meter_active_get(self) -> operations.VirtualBillingMeterActiveGetResponse:
        r"""Beta: Gets all active virtual meters
        Beta: Gets all active virtual meters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/VirtualBillingMeterActive"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualBillingMeterActiveGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def virtual_billing_meter_active_post(self, request: operations.VirtualBillingMeterActivePostRequest) -> operations.VirtualBillingMeterActivePostResponse:
        r"""Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
        Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/VirtualBillingMeterActive"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualBillingMeterActivePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def virtual_billing_meter_deactivate_post(self, request: operations.VirtualBillingMeterDeactivatePostRequest) -> operations.VirtualBillingMeterDeactivatePostResponse:
        r"""Beta: Virtual Meter API: Deactivates a Virtual Meter.
        Beta: Virtual Meter API: Deactivates a Virtual Meter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/VirtualBillingMeterDeactivate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualBillingMeterDeactivatePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def virtual_billing_meters_get(self) -> operations.VirtualBillingMetersGetResponse:
        r"""Beta: Gets all Meters available to activate as a Virtual Meter.
        Beta: Gets all Meters available to activate as a Virtual Meter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/VirtualBillingMeters"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualBillingMetersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Device]])
                res.devices = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def virtual_meter_calculate_formula_get(self, request: operations.VirtualMeterCalculateFormulaGetRequest) -> operations.VirtualMeterCalculateFormulaGetResponse:
        r"""Calculates a virtual meter from a formula. 
                    A meter is coded as ID(\"METERID\")
        Calculates a virtual meter from a formula.
                    
                    A meter is coded as ID(\"METERID\")
                    Ariphmetical operators:
                     ()  parentheses;  
                     +   plus (a + b); 
                     -  minus (a - b); 
                     *  multiplycation symbol (a * b); 
                     /  divide symbol (a / b); 
                    Example: (ID(\"63ac09cb-4e5f-4f3e-bd27-ad8c30bdfc0c\") + ID(\"0209555e-9dc4-4e84-a166-a864488b4b12\")) * 2
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/VirtualMeterCalculateFormula"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualMeterCalculateFormulaGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def virtual_tariff_consumption_get(self, request: operations.VirtualTariffConsumptionGetRequest) -> operations.VirtualTariffConsumptionGetResponse:
        r"""Gets the consumption of a folder with a virtuall tariffs.
        Gets the consumption of a folder with a virtuall tariffs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/VirtualTariffConsumption"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualTariffConsumptionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VirtualTariffConsumptionData]])
                res.virtual_tariff_consumption_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VirtualTariffConsumptionData]])
                res.virtual_tariff_consumption_data = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def virtual_tariff_get(self) -> operations.VirtualTariffGetResponse:
        r"""Gets all Virtual Tariffs of a user
        Gets all Virtual Tariffs of a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/VirtualTariff"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualTariffGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VirtualTariffsOfFolder]])
                res.virtual_tariffs_of_folders = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VirtualTariffsOfFolder]])
                res.virtual_tariffs_of_folders = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def virtual_tariffs_for_property_get(self, request: operations.VirtualTariffsForPropertyGetRequest) -> operations.VirtualTariffsForPropertyGetResponse:
        r"""Gets all Virtual Tariffs for a property (folder)
        Gets all Virtual Tariffs for a property (folder)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/VirtualTariffsForProperty/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualTariffsForPropertyGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VirtualTariffsOfFolder]])
                res.virtual_tariffs_of_folders = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VirtualTariffsOfFolder]])
                res.virtual_tariffs_of_folders = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    