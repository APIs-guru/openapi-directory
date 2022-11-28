

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://preview.twilio.com",
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
        
    
    
    
    def create_deployed_devices_certificate(self, request: operations.CreateDeployedDevicesCertificateRequest) -> operations.CreateDeployedDevicesCertificateResponse:
        r"""Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
        """
        
        base_url = operations.CREATE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Certificates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeployedDevicesCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetCertificate])
                res.preview_deployed_devices_fleet_certificate = out

        return res

    
    def create_deployed_devices_deployment(self, request: operations.CreateDeployedDevicesDeploymentRequest) -> operations.CreateDeployedDevicesDeploymentResponse:
        r"""Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
        """
        
        base_url = operations.CREATE_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Deployments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeployedDevicesDeploymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetDeployment])
                res.preview_deployed_devices_fleet_deployment = out

        return res

    
    def create_deployed_devices_device(self, request: operations.CreateDeployedDevicesDeviceRequest) -> operations.CreateDeployedDevicesDeviceResponse:
        r"""Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
        """
        
        base_url = operations.CREATE_DEPLOYED_DEVICES_DEVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Devices", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeployedDevicesDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetDevice])
                res.preview_deployed_devices_fleet_device = out

        return res

    
    def create_deployed_devices_fleet(self, request: operations.CreateDeployedDevicesFleetRequest) -> operations.CreateDeployedDevicesFleetResponse:
        r"""Create a new Fleet for scoping of deployed devices within your account.
        """
        
        base_url = operations.CREATE_DEPLOYED_DEVICES_FLEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/DeployedDevices/Fleets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeployedDevicesFleetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleet])
                res.preview_deployed_devices_fleet = out

        return res

    
    def create_deployed_devices_key(self, request: operations.CreateDeployedDevicesKeyRequest) -> operations.CreateDeployedDevicesKeyResponse:
        r"""Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
        """
        
        base_url = operations.CREATE_DEPLOYED_DEVICES_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Keys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeployedDevicesKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetKey])
                res.preview_deployed_devices_fleet_key = out

        return res

    
    def create_hosted_numbers_authorization_document(self, request: operations.CreateHostedNumbersAuthorizationDocumentRequest) -> operations.CreateHostedNumbersAuthorizationDocumentResponse:
        r"""Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
        """
        
        base_url = operations.CREATE_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/HostedNumbers/AuthorizationDocuments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateHostedNumbersAuthorizationDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewHostedNumbersAuthorizationDocument])
                res.preview_hosted_numbers_authorization_document = out

        return res

    
    def create_hosted_numbers_hosted_number_order(self, request: operations.CreateHostedNumbersHostedNumberOrderRequest) -> operations.CreateHostedNumbersHostedNumberOrderResponse:
        r"""Host a phone number's capability on Twilio's platform.
        """
        
        base_url = operations.CREATE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/HostedNumbers/HostedNumberOrders"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateHostedNumbersHostedNumberOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewHostedNumbersHostedNumberOrder])
                res.preview_hosted_numbers_hosted_number_order = out

        return res

    
    def create_marketplace_installed_add_on(self, request: operations.CreateMarketplaceInstalledAddOnRequest) -> operations.CreateMarketplaceInstalledAddOnResponse:
        r"""Install an Add-on for the Account specified.
        """
        
        base_url = operations.CREATE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/marketplace/InstalledAddOns"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMarketplaceInstalledAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewMarketplaceInstalledAddOn])
                res.preview_marketplace_installed_add_on = out

        return res

    
    def create_sync_document(self, request: operations.CreateSyncDocumentRequest) -> operations.CreateSyncDocumentResponse:
        base_url = operations.CREATE_SYNC_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Documents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceDocument])
                res.preview_sync_service_document = out

        return res

    
    def create_sync_service(self, request: operations.CreateSyncServiceRequest) -> operations.CreateSyncServiceResponse:
        base_url = operations.CREATE_SYNC_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/Sync/Services"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncService])
                res.preview_sync_service = out

        return res

    
    def create_sync_sync_list(self, request: operations.CreateSyncSyncListRequest) -> operations.CreateSyncSyncListResponse:
        base_url = operations.CREATE_SYNC_SYNC_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncSyncListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncList])
                res.preview_sync_service_sync_list = out

        return res

    
    def create_sync_sync_list_item(self, request: operations.CreateSyncSyncListItemRequest) -> operations.CreateSyncSyncListItemResponse:
        base_url = operations.CREATE_SYNC_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncListSyncListItem])
                res.preview_sync_service_sync_list_sync_list_item = out

        return res

    
    def create_sync_sync_map(self, request: operations.CreateSyncSyncMapRequest) -> operations.CreateSyncSyncMapResponse:
        base_url = operations.CREATE_SYNC_SYNC_MAP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncSyncMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncMap])
                res.preview_sync_service_sync_map = out

        return res

    
    def create_sync_sync_map_item(self, request: operations.CreateSyncSyncMapItemRequest) -> operations.CreateSyncSyncMapItemResponse:
        base_url = operations.CREATE_SYNC_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncMapSyncMapItem])
                res.preview_sync_service_sync_map_sync_map_item = out

        return res

    
    def create_trusted_comms_channel(self, request: operations.CreateTrustedCommsChannelRequest) -> operations.CreateTrustedCommsChannelResponse:
        r"""Associate a channel to a branded channel
        """
        
        base_url = operations.CREATE_TRUSTED_COMMS_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/TrustedComms/BrandedChannels/{BrandedChannelSid}/Channels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrustedCommsChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewTrustedCommsBrandedChannelChannel])
                res.preview_trusted_comms_branded_channel_channel = out

        return res

    
    def create_understand_assistant(self, request: operations.CreateUnderstandAssistantRequest) -> operations.CreateUnderstandAssistantResponse:
        base_url = operations.CREATE_UNDERSTAND_ASSISTANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/understand/Assistants"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUnderstandAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistant])
                res.preview_understand_assistant = out

        return res

    
    def create_understand_field(self, request: operations.CreateUnderstandFieldRequest) -> operations.CreateUnderstandFieldResponse:
        base_url = operations.CREATE_UNDERSTAND_FIELD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUnderstandFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTaskField])
                res.preview_understand_assistant_task_field = out

        return res

    
    def create_understand_field_type(self, request: operations.CreateUnderstandFieldTypeRequest) -> operations.CreateUnderstandFieldTypeResponse:
        base_url = operations.CREATE_UNDERSTAND_FIELD_TYPE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FieldTypes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUnderstandFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantFieldType])
                res.preview_understand_assistant_field_type = out

        return res

    
    def create_understand_field_value(self, request: operations.CreateUnderstandFieldValueRequest) -> operations.CreateUnderstandFieldValueResponse:
        base_url = operations.CREATE_UNDERSTAND_FIELD_VALUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUnderstandFieldValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantFieldTypeFieldValue])
                res.preview_understand_assistant_field_type_field_value = out

        return res

    
    def create_understand_model_build(self, request: operations.CreateUnderstandModelBuildRequest) -> operations.CreateUnderstandModelBuildResponse:
        base_url = operations.CREATE_UNDERSTAND_MODEL_BUILD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/ModelBuilds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUnderstandModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantModelBuild])
                res.preview_understand_assistant_model_build = out

        return res

    
    def create_understand_query(self, request: operations.CreateUnderstandQueryRequest) -> operations.CreateUnderstandQueryResponse:
        base_url = operations.CREATE_UNDERSTAND_QUERY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Queries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUnderstandQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantQuery])
                res.preview_understand_assistant_query = out

        return res

    
    def create_understand_sample(self, request: operations.CreateUnderstandSampleRequest) -> operations.CreateUnderstandSampleResponse:
        base_url = operations.CREATE_UNDERSTAND_SAMPLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUnderstandSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTaskSample])
                res.preview_understand_assistant_task_sample = out

        return res

    
    def create_understand_task(self, request: operations.CreateUnderstandTaskRequest) -> operations.CreateUnderstandTaskResponse:
        base_url = operations.CREATE_UNDERSTAND_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUnderstandTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTask])
                res.preview_understand_assistant_task = out

        return res

    
    def create_wireless_command(self, request: operations.CreateWirelessCommandRequest) -> operations.CreateWirelessCommandResponse:
        base_url = operations.CREATE_WIRELESS_COMMAND_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/wireless/Commands"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWirelessCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewWirelessCommand])
                res.preview_wireless_command = out

        return res

    
    def create_wireless_rate_plan(self, request: operations.CreateWirelessRatePlanRequest) -> operations.CreateWirelessRatePlanResponse:
        base_url = operations.CREATE_WIRELESS_RATE_PLAN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/wireless/RatePlans"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWirelessRatePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewWirelessRatePlan])
                res.preview_wireless_rate_plan = out

        return res

    
    def delete_deployed_devices_certificate(self, request: operations.DeleteDeployedDevicesCertificateRequest) -> operations.DeleteDeployedDevicesCertificateResponse:
        r"""Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
        """
        
        base_url = operations.DELETE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeployedDevicesCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_deployed_devices_deployment(self, request: operations.DeleteDeployedDevicesDeploymentRequest) -> operations.DeleteDeployedDevicesDeploymentResponse:
        r"""Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
        """
        
        base_url = operations.DELETE_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeployedDevicesDeploymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_deployed_devices_device(self, request: operations.DeleteDeployedDevicesDeviceRequest) -> operations.DeleteDeployedDevicesDeviceResponse:
        r"""Delete a specific Device from the Fleet, also removing it from associated Deployments.
        """
        
        base_url = operations.DELETE_DEPLOYED_DEVICES_DEVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeployedDevicesDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_deployed_devices_fleet(self, request: operations.DeleteDeployedDevicesFleetRequest) -> operations.DeleteDeployedDevicesFleetResponse:
        r"""Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
        """
        
        base_url = operations.DELETE_DEPLOYED_DEVICES_FLEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeployedDevicesFleetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_deployed_devices_key(self, request: operations.DeleteDeployedDevicesKeyRequest) -> operations.DeleteDeployedDevicesKeyResponse:
        r"""Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
        """
        
        base_url = operations.DELETE_DEPLOYED_DEVICES_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeployedDevicesKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_hosted_numbers_hosted_number_order(self, request: operations.DeleteHostedNumbersHostedNumberOrderRequest) -> operations.DeleteHostedNumbersHostedNumberOrderResponse:
        r"""Cancel the HostedNumberOrder (only available when the status is in `received`).
        """
        
        base_url = operations.DELETE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/HostedNumbers/HostedNumberOrders/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteHostedNumbersHostedNumberOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_marketplace_installed_add_on(self, request: operations.DeleteMarketplaceInstalledAddOnRequest) -> operations.DeleteMarketplaceInstalledAddOnResponse:
        r"""Remove an Add-on installation from your account
        """
        
        base_url = operations.DELETE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/marketplace/InstalledAddOns/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMarketplaceInstalledAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_document(self, request: operations.DeleteSyncDocumentRequest) -> operations.DeleteSyncDocumentResponse:
        base_url = operations.DELETE_SYNC_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Documents/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_document_permission(self, request: operations.DeleteSyncDocumentPermissionRequest) -> operations.DeleteSyncDocumentPermissionResponse:
        r"""Delete a specific Sync Document Permission.
        """
        
        base_url = operations.DELETE_SYNC_DOCUMENT_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncDocumentPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_service(self, request: operations.DeleteSyncServiceRequest) -> operations.DeleteSyncServiceResponse:
        base_url = operations.DELETE_SYNC_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_sync_list(self, request: operations.DeleteSyncSyncListRequest) -> operations.DeleteSyncSyncListResponse:
        base_url = operations.DELETE_SYNC_SYNC_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncSyncListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_sync_list_item(self, request: operations.DeleteSyncSyncListItemRequest) -> operations.DeleteSyncSyncListItemResponse:
        base_url = operations.DELETE_SYNC_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_sync_list_permission(self, request: operations.DeleteSyncSyncListPermissionRequest) -> operations.DeleteSyncSyncListPermissionResponse:
        r"""Delete a specific Sync List Permission.
        """
        
        base_url = operations.DELETE_SYNC_SYNC_LIST_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncSyncListPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_sync_map(self, request: operations.DeleteSyncSyncMapRequest) -> operations.DeleteSyncSyncMapResponse:
        base_url = operations.DELETE_SYNC_SYNC_MAP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncSyncMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_sync_map_item(self, request: operations.DeleteSyncSyncMapItemRequest) -> operations.DeleteSyncSyncMapItemResponse:
        base_url = operations.DELETE_SYNC_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_sync_map_permission(self, request: operations.DeleteSyncSyncMapPermissionRequest) -> operations.DeleteSyncSyncMapPermissionResponse:
        r"""Delete a specific Sync Map Permission.
        """
        
        base_url = operations.DELETE_SYNC_SYNC_MAP_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncSyncMapPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_understand_assistant(self, request: operations.DeleteUnderstandAssistantRequest) -> operations.DeleteUnderstandAssistantResponse:
        base_url = operations.DELETE_UNDERSTAND_ASSISTANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUnderstandAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_understand_field(self, request: operations.DeleteUnderstandFieldRequest) -> operations.DeleteUnderstandFieldResponse:
        base_url = operations.DELETE_UNDERSTAND_FIELD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUnderstandFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_understand_field_type(self, request: operations.DeleteUnderstandFieldTypeRequest) -> operations.DeleteUnderstandFieldTypeResponse:
        base_url = operations.DELETE_UNDERSTAND_FIELD_TYPE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUnderstandFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_understand_field_value(self, request: operations.DeleteUnderstandFieldValueRequest) -> operations.DeleteUnderstandFieldValueResponse:
        base_url = operations.DELETE_UNDERSTAND_FIELD_VALUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUnderstandFieldValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_understand_model_build(self, request: operations.DeleteUnderstandModelBuildRequest) -> operations.DeleteUnderstandModelBuildResponse:
        base_url = operations.DELETE_UNDERSTAND_MODEL_BUILD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUnderstandModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_understand_query(self, request: operations.DeleteUnderstandQueryRequest) -> operations.DeleteUnderstandQueryResponse:
        base_url = operations.DELETE_UNDERSTAND_QUERY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUnderstandQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_understand_sample(self, request: operations.DeleteUnderstandSampleRequest) -> operations.DeleteUnderstandSampleResponse:
        base_url = operations.DELETE_UNDERSTAND_SAMPLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUnderstandSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_understand_task(self, request: operations.DeleteUnderstandTaskRequest) -> operations.DeleteUnderstandTaskResponse:
        base_url = operations.DELETE_UNDERSTAND_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUnderstandTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_wireless_rate_plan(self, request: operations.DeleteWirelessRatePlanRequest) -> operations.DeleteWirelessRatePlanResponse:
        base_url = operations.DELETE_WIRELESS_RATE_PLAN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/wireless/RatePlans/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWirelessRatePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_deployed_devices_certificate(self, request: operations.FetchDeployedDevicesCertificateRequest) -> operations.FetchDeployedDevicesCertificateResponse:
        r"""Fetch information about a specific Certificate credential in the Fleet.
        """
        
        base_url = operations.FETCH_DEPLOYED_DEVICES_CERTIFICATE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDeployedDevicesCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetCertificate])
                res.preview_deployed_devices_fleet_certificate = out

        return res

    
    def fetch_deployed_devices_deployment(self, request: operations.FetchDeployedDevicesDeploymentRequest) -> operations.FetchDeployedDevicesDeploymentResponse:
        r"""Fetch information about a specific Deployment in the Fleet.
        """
        
        base_url = operations.FETCH_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDeployedDevicesDeploymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetDeployment])
                res.preview_deployed_devices_fleet_deployment = out

        return res

    
    def fetch_deployed_devices_device(self, request: operations.FetchDeployedDevicesDeviceRequest) -> operations.FetchDeployedDevicesDeviceResponse:
        r"""Fetch information about a specific Device in the Fleet.
        """
        
        base_url = operations.FETCH_DEPLOYED_DEVICES_DEVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDeployedDevicesDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetDevice])
                res.preview_deployed_devices_fleet_device = out

        return res

    
    def fetch_deployed_devices_fleet(self, request: operations.FetchDeployedDevicesFleetRequest) -> operations.FetchDeployedDevicesFleetResponse:
        r"""Fetch information about a specific Fleet in your account.
        """
        
        base_url = operations.FETCH_DEPLOYED_DEVICES_FLEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDeployedDevicesFleetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleet])
                res.preview_deployed_devices_fleet = out

        return res

    
    def fetch_deployed_devices_key(self, request: operations.FetchDeployedDevicesKeyRequest) -> operations.FetchDeployedDevicesKeyResponse:
        r"""Fetch information about a specific Key credential in the Fleet.
        """
        
        base_url = operations.FETCH_DEPLOYED_DEVICES_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDeployedDevicesKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetKey])
                res.preview_deployed_devices_fleet_key = out

        return res

    
    def fetch_hosted_numbers_authorization_document(self, request: operations.FetchHostedNumbersAuthorizationDocumentRequest) -> operations.FetchHostedNumbersAuthorizationDocumentResponse:
        r"""Fetch a specific AuthorizationDocument.
        """
        
        base_url = operations.FETCH_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/HostedNumbers/AuthorizationDocuments/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchHostedNumbersAuthorizationDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewHostedNumbersAuthorizationDocument])
                res.preview_hosted_numbers_authorization_document = out

        return res

    
    def fetch_hosted_numbers_hosted_number_order(self, request: operations.FetchHostedNumbersHostedNumberOrderRequest) -> operations.FetchHostedNumbersHostedNumberOrderResponse:
        r"""Fetch a specific HostedNumberOrder.
        """
        
        base_url = operations.FETCH_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/HostedNumbers/HostedNumberOrders/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchHostedNumbersHostedNumberOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewHostedNumbersHostedNumberOrder])
                res.preview_hosted_numbers_hosted_number_order = out

        return res

    
    def fetch_marketplace_available_add_on(self, request: operations.FetchMarketplaceAvailableAddOnRequest) -> operations.FetchMarketplaceAvailableAddOnResponse:
        r"""Fetch an instance of an Add-on currently available to be installed.
        """
        
        base_url = operations.FETCH_MARKETPLACE_AVAILABLE_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/marketplace/AvailableAddOns/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMarketplaceAvailableAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewMarketplaceAvailableAddOn])
                res.preview_marketplace_available_add_on = out

        return res

    
    def fetch_marketplace_available_add_on_extension(self, request: operations.FetchMarketplaceAvailableAddOnExtensionRequest) -> operations.FetchMarketplaceAvailableAddOnExtensionResponse:
        r"""Fetch an instance of an Extension for the Available Add-on.
        """
        
        base_url = operations.FETCH_MARKETPLACE_AVAILABLE_ADD_ON_EXTENSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMarketplaceAvailableAddOnExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension])
                res.preview_marketplace_available_add_on_available_add_on_extension = out

        return res

    
    def fetch_marketplace_installed_add_on(self, request: operations.FetchMarketplaceInstalledAddOnRequest) -> operations.FetchMarketplaceInstalledAddOnResponse:
        r"""Fetch an instance of an Add-on currently installed on this Account.
        """
        
        base_url = operations.FETCH_MARKETPLACE_INSTALLED_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/marketplace/InstalledAddOns/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMarketplaceInstalledAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewMarketplaceInstalledAddOn])
                res.preview_marketplace_installed_add_on = out

        return res

    
    def fetch_marketplace_installed_add_on_extension(self, request: operations.FetchMarketplaceInstalledAddOnExtensionRequest) -> operations.FetchMarketplaceInstalledAddOnExtensionResponse:
        r"""Fetch an instance of an Extension for the Installed Add-on.
        """
        
        base_url = operations.FETCH_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMarketplaceInstalledAddOnExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension])
                res.preview_marketplace_installed_add_on_installed_add_on_extension = out

        return res

    
    def fetch_sync_document(self, request: operations.FetchSyncDocumentRequest) -> operations.FetchSyncDocumentResponse:
        base_url = operations.FETCH_SYNC_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Documents/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceDocument])
                res.preview_sync_service_document = out

        return res

    
    def fetch_sync_document_permission(self, request: operations.FetchSyncDocumentPermissionRequest) -> operations.FetchSyncDocumentPermissionResponse:
        r"""Fetch a specific Sync Document Permission.
        """
        
        base_url = operations.FETCH_SYNC_DOCUMENT_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncDocumentPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceDocumentDocumentPermission])
                res.preview_sync_service_document_document_permission = out

        return res

    
    def fetch_sync_service(self, request: operations.FetchSyncServiceRequest) -> operations.FetchSyncServiceResponse:
        base_url = operations.FETCH_SYNC_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncService])
                res.preview_sync_service = out

        return res

    
    def fetch_sync_sync_list(self, request: operations.FetchSyncSyncListRequest) -> operations.FetchSyncSyncListResponse:
        base_url = operations.FETCH_SYNC_SYNC_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncSyncListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncList])
                res.preview_sync_service_sync_list = out

        return res

    
    def fetch_sync_sync_list_item(self, request: operations.FetchSyncSyncListItemRequest) -> operations.FetchSyncSyncListItemResponse:
        base_url = operations.FETCH_SYNC_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncListSyncListItem])
                res.preview_sync_service_sync_list_sync_list_item = out

        return res

    
    def fetch_sync_sync_list_permission(self, request: operations.FetchSyncSyncListPermissionRequest) -> operations.FetchSyncSyncListPermissionResponse:
        r"""Fetch a specific Sync List Permission.
        """
        
        base_url = operations.FETCH_SYNC_SYNC_LIST_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncSyncListPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncListSyncListPermission])
                res.preview_sync_service_sync_list_sync_list_permission = out

        return res

    
    def fetch_sync_sync_map(self, request: operations.FetchSyncSyncMapRequest) -> operations.FetchSyncSyncMapResponse:
        base_url = operations.FETCH_SYNC_SYNC_MAP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncSyncMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncMap])
                res.preview_sync_service_sync_map = out

        return res

    
    def fetch_sync_sync_map_item(self, request: operations.FetchSyncSyncMapItemRequest) -> operations.FetchSyncSyncMapItemResponse:
        base_url = operations.FETCH_SYNC_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncMapSyncMapItem])
                res.preview_sync_service_sync_map_sync_map_item = out

        return res

    
    def fetch_sync_sync_map_permission(self, request: operations.FetchSyncSyncMapPermissionRequest) -> operations.FetchSyncSyncMapPermissionResponse:
        r"""Fetch a specific Sync Map Permission.
        """
        
        base_url = operations.FETCH_SYNC_SYNC_MAP_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncSyncMapPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncMapSyncMapPermission])
                res.preview_sync_service_sync_map_sync_map_permission = out

        return res

    
    def fetch_trusted_comms_branded_channel(self, request: operations.FetchTrustedCommsBrandedChannelRequest) -> operations.FetchTrustedCommsBrandedChannelResponse:
        r"""Fetch a specific Branded Channel.
        """
        
        base_url = operations.FETCH_TRUSTED_COMMS_BRANDED_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/TrustedComms/BrandedChannels/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustedCommsBrandedChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewTrustedCommsBrandedChannel])
                res.preview_trusted_comms_branded_channel = out

        return res

    
    def fetch_trusted_comms_brands_information(self, request: operations.FetchTrustedCommsBrandsInformationRequest) -> operations.FetchTrustedCommsBrandsInformationResponse:
        r"""Retrieve the newest available BrandInformation
        """
        
        base_url = operations.FETCH_TRUSTED_COMMS_BRANDS_INFORMATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/TrustedComms/BrandsInformation"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustedCommsBrandsInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewTrustedCommsBrandsInformation])
                res.preview_trusted_comms_brands_information = out

        return res

    
    def fetch_trusted_comms_cps(self, request: operations.FetchTrustedCommsCpsRequest) -> operations.FetchTrustedCommsCpsResponse:
        r"""Fetch a specific Call Placement Service (CPS) given a phone number via `X-XCNAM-Sensitive-Phone-Number` header.
        """
        
        base_url = operations.FETCH_TRUSTED_COMMS_CPS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/TrustedComms/CPS"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustedCommsCpsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewTrustedCommsCps])
                res.preview_trusted_comms_cps = out

        return res

    
    def fetch_trusted_comms_current_call(self, request: operations.FetchTrustedCommsCurrentCallRequest) -> operations.FetchTrustedCommsCurrentCallResponse:
        r"""Retrieve a current call given the originating and terminating number via `X-XCNAM-Sensitive-Phone-Number-From` and `X-XCNAM-Sensitive-Phone-Number-To` headers.
        """
        
        base_url = operations.FETCH_TRUSTED_COMMS_CURRENT_CALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/TrustedComms/CurrentCall"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrustedCommsCurrentCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewTrustedCommsCurrentCall])
                res.preview_trusted_comms_current_call = out

        return res

    
    def fetch_understand_assistant(self, request: operations.FetchUnderstandAssistantRequest) -> operations.FetchUnderstandAssistantResponse:
        base_url = operations.FETCH_UNDERSTAND_ASSISTANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistant])
                res.preview_understand_assistant = out

        return res

    
    def fetch_understand_assistant_fallback_actions(self, request: operations.FetchUnderstandAssistantFallbackActionsRequest) -> operations.FetchUnderstandAssistantFallbackActionsResponse:
        base_url = operations.FETCH_UNDERSTAND_ASSISTANT_FALLBACK_ACTIONS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FallbackActions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandAssistantFallbackActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantAssistantFallbackActions])
                res.preview_understand_assistant_assistant_fallback_actions = out

        return res

    
    def fetch_understand_assistant_initiation_actions(self, request: operations.FetchUnderstandAssistantInitiationActionsRequest) -> operations.FetchUnderstandAssistantInitiationActionsResponse:
        base_url = operations.FETCH_UNDERSTAND_ASSISTANT_INITIATION_ACTIONS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/InitiationActions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandAssistantInitiationActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantAssistantInitiationActions])
                res.preview_understand_assistant_assistant_initiation_actions = out

        return res

    
    def fetch_understand_dialogue(self, request: operations.FetchUnderstandDialogueRequest) -> operations.FetchUnderstandDialogueResponse:
        base_url = operations.FETCH_UNDERSTAND_DIALOGUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Dialogues/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandDialogueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantDialogue])
                res.preview_understand_assistant_dialogue = out

        return res

    
    def fetch_understand_field(self, request: operations.FetchUnderstandFieldRequest) -> operations.FetchUnderstandFieldResponse:
        base_url = operations.FETCH_UNDERSTAND_FIELD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTaskField])
                res.preview_understand_assistant_task_field = out

        return res

    
    def fetch_understand_field_type(self, request: operations.FetchUnderstandFieldTypeRequest) -> operations.FetchUnderstandFieldTypeResponse:
        base_url = operations.FETCH_UNDERSTAND_FIELD_TYPE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantFieldType])
                res.preview_understand_assistant_field_type = out

        return res

    
    def fetch_understand_field_value(self, request: operations.FetchUnderstandFieldValueRequest) -> operations.FetchUnderstandFieldValueResponse:
        base_url = operations.FETCH_UNDERSTAND_FIELD_VALUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandFieldValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantFieldTypeFieldValue])
                res.preview_understand_assistant_field_type_field_value = out

        return res

    
    def fetch_understand_model_build(self, request: operations.FetchUnderstandModelBuildRequest) -> operations.FetchUnderstandModelBuildResponse:
        base_url = operations.FETCH_UNDERSTAND_MODEL_BUILD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantModelBuild])
                res.preview_understand_assistant_model_build = out

        return res

    
    def fetch_understand_query(self, request: operations.FetchUnderstandQueryRequest) -> operations.FetchUnderstandQueryResponse:
        base_url = operations.FETCH_UNDERSTAND_QUERY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantQuery])
                res.preview_understand_assistant_query = out

        return res

    
    def fetch_understand_sample(self, request: operations.FetchUnderstandSampleRequest) -> operations.FetchUnderstandSampleResponse:
        base_url = operations.FETCH_UNDERSTAND_SAMPLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTaskSample])
                res.preview_understand_assistant_task_sample = out

        return res

    
    def fetch_understand_style_sheet(self, request: operations.FetchUnderstandStyleSheetRequest) -> operations.FetchUnderstandStyleSheetResponse:
        r"""Returns Style sheet JSON object for this Assistant
        """
        
        base_url = operations.FETCH_UNDERSTAND_STYLE_SHEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/StyleSheet", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandStyleSheetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantStyleSheet])
                res.preview_understand_assistant_style_sheet = out

        return res

    
    def fetch_understand_task(self, request: operations.FetchUnderstandTaskRequest) -> operations.FetchUnderstandTaskResponse:
        base_url = operations.FETCH_UNDERSTAND_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTask])
                res.preview_understand_assistant_task = out

        return res

    
    def fetch_understand_task_actions(self, request: operations.FetchUnderstandTaskActionsRequest) -> operations.FetchUnderstandTaskActionsResponse:
        r"""Returns JSON actions for this Task.
        """
        
        base_url = operations.FETCH_UNDERSTAND_TASK_ACTIONS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandTaskActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTaskTaskActions])
                res.preview_understand_assistant_task_task_actions = out

        return res

    
    def fetch_understand_task_statistics(self, request: operations.FetchUnderstandTaskStatisticsRequest) -> operations.FetchUnderstandTaskStatisticsResponse:
        base_url = operations.FETCH_UNDERSTAND_TASK_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUnderstandTaskStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTaskTaskStatistics])
                res.preview_understand_assistant_task_task_statistics = out

        return res

    
    def fetch_wireless_command(self, request: operations.FetchWirelessCommandRequest) -> operations.FetchWirelessCommandResponse:
        base_url = operations.FETCH_WIRELESS_COMMAND_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/wireless/Commands/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWirelessCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewWirelessCommand])
                res.preview_wireless_command = out

        return res

    
    def fetch_wireless_rate_plan(self, request: operations.FetchWirelessRatePlanRequest) -> operations.FetchWirelessRatePlanResponse:
        base_url = operations.FETCH_WIRELESS_RATE_PLAN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/wireless/RatePlans/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWirelessRatePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewWirelessRatePlan])
                res.preview_wireless_rate_plan = out

        return res

    
    def fetch_wireless_sim(self, request: operations.FetchWirelessSimRequest) -> operations.FetchWirelessSimResponse:
        base_url = operations.FETCH_WIRELESS_SIM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/wireless/Sims/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWirelessSimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewWirelessSim])
                res.preview_wireless_sim = out

        return res

    
    def fetch_wireless_usage(self, request: operations.FetchWirelessUsageRequest) -> operations.FetchWirelessUsageResponse:
        base_url = operations.FETCH_WIRELESS_USAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/wireless/Sims/{SimSid}/Usage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWirelessUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewWirelessSimUsage])
                res.preview_wireless_sim_usage = out

        return res

    
    def list_deployed_devices_certificate(self, request: operations.ListDeployedDevicesCertificateRequest) -> operations.ListDeployedDevicesCertificateResponse:
        r"""Retrieve a list of all Certificate credentials belonging to the Fleet.
        """
        
        base_url = operations.LIST_DEPLOYED_DEVICES_CERTIFICATE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Certificates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDeployedDevicesCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse])
                res.list_deployed_devices_certificate_response = out

        return res

    
    def list_deployed_devices_deployment(self, request: operations.ListDeployedDevicesDeploymentRequest) -> operations.ListDeployedDevicesDeploymentResponse:
        r"""Retrieve a list of all Deployments belonging to the Fleet.
        """
        
        base_url = operations.LIST_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDeployedDevicesDeploymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse])
                res.list_deployed_devices_deployment_response = out

        return res

    
    def list_deployed_devices_device(self, request: operations.ListDeployedDevicesDeviceRequest) -> operations.ListDeployedDevicesDeviceResponse:
        r"""Retrieve a list of all Devices belonging to the Fleet.
        """
        
        base_url = operations.LIST_DEPLOYED_DEVICES_DEVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDeployedDevicesDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse])
                res.list_deployed_devices_device_response = out

        return res

    
    def list_deployed_devices_fleet(self, request: operations.ListDeployedDevicesFleetRequest) -> operations.ListDeployedDevicesFleetResponse:
        r"""Retrieve a list of all Fleets belonging to your account.
        """
        
        base_url = operations.LIST_DEPLOYED_DEVICES_FLEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/DeployedDevices/Fleets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDeployedDevicesFleetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDeployedDevicesFleetListDeployedDevicesFleetResponse])
                res.list_deployed_devices_fleet_response = out

        return res

    
    def list_deployed_devices_key(self, request: operations.ListDeployedDevicesKeyRequest) -> operations.ListDeployedDevicesKeyResponse:
        r"""Retrieve a list of all Keys credentials belonging to the Fleet.
        """
        
        base_url = operations.LIST_DEPLOYED_DEVICES_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Keys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDeployedDevicesKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDeployedDevicesKeyListDeployedDevicesKeyResponse])
                res.list_deployed_devices_key_response = out

        return res

    
    def list_hosted_numbers_authorization_document(self, request: operations.ListHostedNumbersAuthorizationDocumentRequest) -> operations.ListHostedNumbersAuthorizationDocumentResponse:
        r"""Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
        """
        
        base_url = operations.LIST_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/HostedNumbers/AuthorizationDocuments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHostedNumbersAuthorizationDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse])
                res.list_hosted_numbers_authorization_document_response = out

        return res

    
    def list_hosted_numbers_dependent_hosted_number_order(self, request: operations.ListHostedNumbersDependentHostedNumberOrderRequest) -> operations.ListHostedNumbersDependentHostedNumberOrderResponse:
        r"""Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
        """
        
        base_url = operations.LIST_HOSTED_NUMBERS_DEPENDENT_HOSTED_NUMBER_ORDER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/HostedNumbers/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHostedNumbersDependentHostedNumberOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse])
                res.list_hosted_numbers_dependent_hosted_number_order_response = out

        return res

    
    def list_hosted_numbers_hosted_number_order(self, request: operations.ListHostedNumbersHostedNumberOrderRequest) -> operations.ListHostedNumbersHostedNumberOrderResponse:
        r"""Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
        """
        
        base_url = operations.LIST_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/HostedNumbers/HostedNumberOrders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHostedNumbersHostedNumberOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse])
                res.list_hosted_numbers_hosted_number_order_response = out

        return res

    
    def list_marketplace_available_add_on(self, request: operations.ListMarketplaceAvailableAddOnRequest) -> operations.ListMarketplaceAvailableAddOnResponse:
        r"""Retrieve a list of Add-ons currently available to be installed.
        """
        
        base_url = operations.LIST_MARKETPLACE_AVAILABLE_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/marketplace/AvailableAddOns"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMarketplaceAvailableAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse])
                res.list_marketplace_available_add_on_response = out

        return res

    
    def list_marketplace_available_add_on_extension(self, request: operations.ListMarketplaceAvailableAddOnExtensionRequest) -> operations.ListMarketplaceAvailableAddOnExtensionResponse:
        r"""Retrieve a list of Extensions for the Available Add-on.
        """
        
        base_url = operations.LIST_MARKETPLACE_AVAILABLE_ADD_ON_EXTENSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMarketplaceAvailableAddOnExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse])
                res.list_marketplace_available_add_on_extension_response = out

        return res

    
    def list_marketplace_installed_add_on(self, request: operations.ListMarketplaceInstalledAddOnRequest) -> operations.ListMarketplaceInstalledAddOnResponse:
        r"""Retrieve a list of Add-ons currently installed on this Account.
        """
        
        base_url = operations.LIST_MARKETPLACE_INSTALLED_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/marketplace/InstalledAddOns"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMarketplaceInstalledAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse])
                res.list_marketplace_installed_add_on_response = out

        return res

    
    def list_marketplace_installed_add_on_extension(self, request: operations.ListMarketplaceInstalledAddOnExtensionRequest) -> operations.ListMarketplaceInstalledAddOnExtensionResponse:
        r"""Retrieve a list of Extensions for the Installed Add-on.
        """
        
        base_url = operations.LIST_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMarketplaceInstalledAddOnExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse])
                res.list_marketplace_installed_add_on_extension_response = out

        return res

    
    def list_sync_document(self, request: operations.ListSyncDocumentRequest) -> operations.ListSyncDocumentResponse:
        base_url = operations.LIST_SYNC_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Documents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncDocumentListSyncDocumentResponse])
                res.list_sync_document_response = out

        return res

    
    def list_sync_document_permission(self, request: operations.ListSyncDocumentPermissionRequest) -> operations.ListSyncDocumentPermissionResponse:
        r"""Retrieve a list of all Permissions applying to a Sync Document.
        """
        
        base_url = operations.LIST_SYNC_DOCUMENT_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncDocumentPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncDocumentPermissionListSyncDocumentPermissionResponse])
                res.list_sync_document_permission_response = out

        return res

    
    def list_sync_service(self, request: operations.ListSyncServiceRequest) -> operations.ListSyncServiceResponse:
        base_url = operations.LIST_SYNC_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/Sync/Services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncServiceListSyncServiceResponse])
                res.list_sync_service_response = out

        return res

    
    def list_sync_sync_list(self, request: operations.ListSyncSyncListRequest) -> operations.ListSyncSyncListResponse:
        base_url = operations.LIST_SYNC_SYNC_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncSyncListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncSyncListListSyncSyncListResponse])
                res.list_sync_sync_list_response = out

        return res

    
    def list_sync_sync_list_item(self, request: operations.ListSyncSyncListItemRequest) -> operations.ListSyncSyncListItemResponse:
        base_url = operations.LIST_SYNC_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncSyncListItemListSyncSyncListItemResponse])
                res.list_sync_sync_list_item_response = out

        return res

    
    def list_sync_sync_list_permission(self, request: operations.ListSyncSyncListPermissionRequest) -> operations.ListSyncSyncListPermissionResponse:
        r"""Retrieve a list of all Permissions applying to a Sync List.
        """
        
        base_url = operations.LIST_SYNC_SYNC_LIST_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncSyncListPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncSyncListPermissionListSyncSyncListPermissionResponse])
                res.list_sync_sync_list_permission_response = out

        return res

    
    def list_sync_sync_map(self, request: operations.ListSyncSyncMapRequest) -> operations.ListSyncSyncMapResponse:
        base_url = operations.LIST_SYNC_SYNC_MAP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncSyncMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncSyncMapListSyncSyncMapResponse])
                res.list_sync_sync_map_response = out

        return res

    
    def list_sync_sync_map_item(self, request: operations.ListSyncSyncMapItemRequest) -> operations.ListSyncSyncMapItemResponse:
        base_url = operations.LIST_SYNC_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncSyncMapItemListSyncSyncMapItemResponse])
                res.list_sync_sync_map_item_response = out

        return res

    
    def list_sync_sync_map_permission(self, request: operations.ListSyncSyncMapPermissionRequest) -> operations.ListSyncSyncMapPermissionResponse:
        r"""Retrieve a list of all Permissions applying to a Sync Map.
        """
        
        base_url = operations.LIST_SYNC_SYNC_MAP_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncSyncMapPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse])
                res.list_sync_sync_map_permission_response = out

        return res

    
    def list_understand_assistant(self, request: operations.ListUnderstandAssistantRequest) -> operations.ListUnderstandAssistantResponse:
        base_url = operations.LIST_UNDERSTAND_ASSISTANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/understand/Assistants"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUnderstandAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUnderstandAssistantListUnderstandAssistantResponse])
                res.list_understand_assistant_response = out

        return res

    
    def list_understand_field(self, request: operations.ListUnderstandFieldRequest) -> operations.ListUnderstandFieldResponse:
        base_url = operations.LIST_UNDERSTAND_FIELD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUnderstandFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUnderstandFieldListUnderstandFieldResponse])
                res.list_understand_field_response = out

        return res

    
    def list_understand_field_type(self, request: operations.ListUnderstandFieldTypeRequest) -> operations.ListUnderstandFieldTypeResponse:
        base_url = operations.LIST_UNDERSTAND_FIELD_TYPE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FieldTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUnderstandFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUnderstandFieldTypeListUnderstandFieldTypeResponse])
                res.list_understand_field_type_response = out

        return res

    
    def list_understand_field_value(self, request: operations.ListUnderstandFieldValueRequest) -> operations.ListUnderstandFieldValueResponse:
        base_url = operations.LIST_UNDERSTAND_FIELD_VALUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUnderstandFieldValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUnderstandFieldValueListUnderstandFieldValueResponse])
                res.list_understand_field_value_response = out

        return res

    
    def list_understand_model_build(self, request: operations.ListUnderstandModelBuildRequest) -> operations.ListUnderstandModelBuildResponse:
        base_url = operations.LIST_UNDERSTAND_MODEL_BUILD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/ModelBuilds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUnderstandModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUnderstandModelBuildListUnderstandModelBuildResponse])
                res.list_understand_model_build_response = out

        return res

    
    def list_understand_query(self, request: operations.ListUnderstandQueryRequest) -> operations.ListUnderstandQueryResponse:
        base_url = operations.LIST_UNDERSTAND_QUERY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Queries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUnderstandQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUnderstandQueryListUnderstandQueryResponse])
                res.list_understand_query_response = out

        return res

    
    def list_understand_sample(self, request: operations.ListUnderstandSampleRequest) -> operations.ListUnderstandSampleResponse:
        base_url = operations.LIST_UNDERSTAND_SAMPLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUnderstandSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUnderstandSampleListUnderstandSampleResponse])
                res.list_understand_sample_response = out

        return res

    
    def list_understand_task(self, request: operations.ListUnderstandTaskRequest) -> operations.ListUnderstandTaskResponse:
        base_url = operations.LIST_UNDERSTAND_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUnderstandTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUnderstandTaskListUnderstandTaskResponse])
                res.list_understand_task_response = out

        return res

    
    def list_wireless_command(self, request: operations.ListWirelessCommandRequest) -> operations.ListWirelessCommandResponse:
        base_url = operations.LIST_WIRELESS_COMMAND_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/wireless/Commands"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWirelessCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWirelessCommandListWirelessCommandResponse])
                res.list_wireless_command_response = out

        return res

    
    def list_wireless_rate_plan(self, request: operations.ListWirelessRatePlanRequest) -> operations.ListWirelessRatePlanResponse:
        base_url = operations.LIST_WIRELESS_RATE_PLAN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/wireless/RatePlans"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWirelessRatePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWirelessRatePlanListWirelessRatePlanResponse])
                res.list_wireless_rate_plan_response = out

        return res

    
    def list_wireless_sim(self, request: operations.ListWirelessSimRequest) -> operations.ListWirelessSimResponse:
        base_url = operations.LIST_WIRELESS_SIM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/wireless/Sims"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWirelessSimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWirelessSimListWirelessSimResponse])
                res.list_wireless_sim_response = out

        return res

    
    def update_deployed_devices_certificate(self, request: operations.UpdateDeployedDevicesCertificateRequest) -> operations.UpdateDeployedDevicesCertificateResponse:
        r"""Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
        """
        
        base_url = operations.UPDATE_DEPLOYED_DEVICES_CERTIFICATE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeployedDevicesCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetCertificate])
                res.preview_deployed_devices_fleet_certificate = out

        return res

    
    def update_deployed_devices_deployment(self, request: operations.UpdateDeployedDevicesDeploymentRequest) -> operations.UpdateDeployedDevicesDeploymentResponse:
        r"""Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
        """
        
        base_url = operations.UPDATE_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeployedDevicesDeploymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetDeployment])
                res.preview_deployed_devices_fleet_deployment = out

        return res

    
    def update_deployed_devices_device(self, request: operations.UpdateDeployedDevicesDeviceRequest) -> operations.UpdateDeployedDevicesDeviceResponse:
        r"""Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
        """
        
        base_url = operations.UPDATE_DEPLOYED_DEVICES_DEVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeployedDevicesDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetDevice])
                res.preview_deployed_devices_fleet_device = out

        return res

    
    def update_deployed_devices_fleet(self, request: operations.UpdateDeployedDevicesFleetRequest) -> operations.UpdateDeployedDevicesFleetResponse:
        r"""Update the friendly name property of a specific Fleet in your account.
        """
        
        base_url = operations.UPDATE_DEPLOYED_DEVICES_FLEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeployedDevicesFleetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleet])
                res.preview_deployed_devices_fleet = out

        return res

    
    def update_deployed_devices_key(self, request: operations.UpdateDeployedDevicesKeyRequest) -> operations.UpdateDeployedDevicesKeyResponse:
        r"""Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
        """
        
        base_url = operations.UPDATE_DEPLOYED_DEVICES_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeployedDevicesKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewDeployedDevicesFleetKey])
                res.preview_deployed_devices_fleet_key = out

        return res

    
    def update_hosted_numbers_authorization_document(self, request: operations.UpdateHostedNumbersAuthorizationDocumentRequest) -> operations.UpdateHostedNumbersAuthorizationDocumentResponse:
        r"""Updates a specific AuthorizationDocument.
        """
        
        base_url = operations.UPDATE_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/HostedNumbers/AuthorizationDocuments/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateHostedNumbersAuthorizationDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewHostedNumbersAuthorizationDocument])
                res.preview_hosted_numbers_authorization_document = out

        return res

    
    def update_hosted_numbers_hosted_number_order(self, request: operations.UpdateHostedNumbersHostedNumberOrderRequest) -> operations.UpdateHostedNumbersHostedNumberOrderResponse:
        r"""Updates a specific HostedNumberOrder.
        """
        
        base_url = operations.UPDATE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/HostedNumbers/HostedNumberOrders/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateHostedNumbersHostedNumberOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewHostedNumbersHostedNumberOrder])
                res.preview_hosted_numbers_hosted_number_order = out

        return res

    
    def update_marketplace_installed_add_on(self, request: operations.UpdateMarketplaceInstalledAddOnRequest) -> operations.UpdateMarketplaceInstalledAddOnResponse:
        r"""Update an Add-on installation for the Account specified.
        """
        
        base_url = operations.UPDATE_MARKETPLACE_INSTALLED_ADD_ON_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/marketplace/InstalledAddOns/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMarketplaceInstalledAddOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewMarketplaceInstalledAddOn])
                res.preview_marketplace_installed_add_on = out

        return res

    
    def update_marketplace_installed_add_on_extension(self, request: operations.UpdateMarketplaceInstalledAddOnExtensionRequest) -> operations.UpdateMarketplaceInstalledAddOnExtensionResponse:
        r"""Update an Extension for an Add-on installation.
        """
        
        base_url = operations.UPDATE_MARKETPLACE_INSTALLED_ADD_ON_EXTENSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMarketplaceInstalledAddOnExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension])
                res.preview_marketplace_installed_add_on_installed_add_on_extension = out

        return res

    
    def update_sync_document(self, request: operations.UpdateSyncDocumentRequest) -> operations.UpdateSyncDocumentResponse:
        base_url = operations.UPDATE_SYNC_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Documents/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceDocument])
                res.preview_sync_service_document = out

        return res

    
    def update_sync_document_permission(self, request: operations.UpdateSyncDocumentPermissionRequest) -> operations.UpdateSyncDocumentPermissionResponse:
        r"""Update an identity's access to a specific Sync Document.
        """
        
        base_url = operations.UPDATE_SYNC_DOCUMENT_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncDocumentPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceDocumentDocumentPermission])
                res.preview_sync_service_document_document_permission = out

        return res

    
    def update_sync_service(self, request: operations.UpdateSyncServiceRequest) -> operations.UpdateSyncServiceResponse:
        base_url = operations.UPDATE_SYNC_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncService])
                res.preview_sync_service = out

        return res

    
    def update_sync_sync_list_item(self, request: operations.UpdateSyncSyncListItemRequest) -> operations.UpdateSyncSyncListItemResponse:
        base_url = operations.UPDATE_SYNC_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncListSyncListItem])
                res.preview_sync_service_sync_list_sync_list_item = out

        return res

    
    def update_sync_sync_list_permission(self, request: operations.UpdateSyncSyncListPermissionRequest) -> operations.UpdateSyncSyncListPermissionResponse:
        r"""Update an identity's access to a specific Sync List.
        """
        
        base_url = operations.UPDATE_SYNC_SYNC_LIST_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncSyncListPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncListSyncListPermission])
                res.preview_sync_service_sync_list_sync_list_permission = out

        return res

    
    def update_sync_sync_map_item(self, request: operations.UpdateSyncSyncMapItemRequest) -> operations.UpdateSyncSyncMapItemResponse:
        base_url = operations.UPDATE_SYNC_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncMapSyncMapItem])
                res.preview_sync_service_sync_map_sync_map_item = out

        return res

    
    def update_sync_sync_map_permission(self, request: operations.UpdateSyncSyncMapPermissionRequest) -> operations.UpdateSyncSyncMapPermissionResponse:
        r"""Update an identity's access to a specific Sync Map.
        """
        
        base_url = operations.UPDATE_SYNC_SYNC_MAP_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncSyncMapPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewSyncServiceSyncMapSyncMapPermission])
                res.preview_sync_service_sync_map_sync_map_permission = out

        return res

    
    def update_understand_assistant(self, request: operations.UpdateUnderstandAssistantRequest) -> operations.UpdateUnderstandAssistantResponse:
        base_url = operations.UPDATE_UNDERSTAND_ASSISTANT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistant])
                res.preview_understand_assistant = out

        return res

    
    def update_understand_assistant_fallback_actions(self, request: operations.UpdateUnderstandAssistantFallbackActionsRequest) -> operations.UpdateUnderstandAssistantFallbackActionsResponse:
        base_url = operations.UPDATE_UNDERSTAND_ASSISTANT_FALLBACK_ACTIONS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FallbackActions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandAssistantFallbackActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantAssistantFallbackActions])
                res.preview_understand_assistant_assistant_fallback_actions = out

        return res

    
    def update_understand_assistant_initiation_actions(self, request: operations.UpdateUnderstandAssistantInitiationActionsRequest) -> operations.UpdateUnderstandAssistantInitiationActionsResponse:
        base_url = operations.UPDATE_UNDERSTAND_ASSISTANT_INITIATION_ACTIONS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/InitiationActions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandAssistantInitiationActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantAssistantInitiationActions])
                res.preview_understand_assistant_assistant_initiation_actions = out

        return res

    
    def update_understand_field_type(self, request: operations.UpdateUnderstandFieldTypeRequest) -> operations.UpdateUnderstandFieldTypeResponse:
        base_url = operations.UPDATE_UNDERSTAND_FIELD_TYPE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantFieldType])
                res.preview_understand_assistant_field_type = out

        return res

    
    def update_understand_model_build(self, request: operations.UpdateUnderstandModelBuildRequest) -> operations.UpdateUnderstandModelBuildResponse:
        base_url = operations.UPDATE_UNDERSTAND_MODEL_BUILD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantModelBuild])
                res.preview_understand_assistant_model_build = out

        return res

    
    def update_understand_query(self, request: operations.UpdateUnderstandQueryRequest) -> operations.UpdateUnderstandQueryResponse:
        base_url = operations.UPDATE_UNDERSTAND_QUERY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantQuery])
                res.preview_understand_assistant_query = out

        return res

    
    def update_understand_sample(self, request: operations.UpdateUnderstandSampleRequest) -> operations.UpdateUnderstandSampleResponse:
        base_url = operations.UPDATE_UNDERSTAND_SAMPLE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTaskSample])
                res.preview_understand_assistant_task_sample = out

        return res

    
    def update_understand_style_sheet(self, request: operations.UpdateUnderstandStyleSheetRequest) -> operations.UpdateUnderstandStyleSheetResponse:
        r"""Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
        """
        
        base_url = operations.UPDATE_UNDERSTAND_STYLE_SHEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/StyleSheet", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandStyleSheetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantStyleSheet])
                res.preview_understand_assistant_style_sheet = out

        return res

    
    def update_understand_task(self, request: operations.UpdateUnderstandTaskRequest) -> operations.UpdateUnderstandTaskResponse:
        base_url = operations.UPDATE_UNDERSTAND_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTask])
                res.preview_understand_assistant_task = out

        return res

    
    def update_understand_task_actions(self, request: operations.UpdateUnderstandTaskActionsRequest) -> operations.UpdateUnderstandTaskActionsResponse:
        r"""Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
        """
        
        base_url = operations.UPDATE_UNDERSTAND_TASK_ACTIONS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUnderstandTaskActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewUnderstandAssistantTaskTaskActions])
                res.preview_understand_assistant_task_task_actions = out

        return res

    
    def update_wireless_rate_plan(self, request: operations.UpdateWirelessRatePlanRequest) -> operations.UpdateWirelessRatePlanResponse:
        base_url = operations.UPDATE_WIRELESS_RATE_PLAN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/wireless/RatePlans/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWirelessRatePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewWirelessRatePlan])
                res.preview_wireless_rate_plan = out

        return res

    
    def update_wireless_sim(self, request: operations.UpdateWirelessSimRequest) -> operations.UpdateWirelessSimResponse:
        base_url = operations.UPDATE_WIRELESS_SIM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/wireless/Sims/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWirelessSimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewWirelessSim])
                res.preview_wireless_sim = out

        return res

    