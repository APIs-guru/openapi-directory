
__doc__ = """ SDK Documentation: https://www.surevoip.co.uk/support/wiki/api_documentation - SureVoIP API Wiki"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.surevoip.co.uk",
	"https://sandbox.surevoip.co.uk",
]


class SDK:
    r"""SDK Documentation: https://www.surevoip.co.uk/support/wiki/api_documentation - SureVoIP API Wiki"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def delete_customers_account_announcements_announcement_id_(self, request: operations.DeleteCustomersAccountAnnouncementsAnnouncementIDRequest) -> operations.DeleteCustomersAccountAnnouncementsAnnouncementIDResponse:
        r"""Delete an announcement audio file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{account}/announcements/{announcement_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomersAccountAnnouncementsAnnouncementIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out

        return res

    
    def get_(self, request: operations.GetRequest) -> operations.GetResponse:
        r"""List global resources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Get200ApplicationJSON])
                res.get_200_application_json_object = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_announcements(self) -> operations.GetAnnouncementsResponse:
        r"""List global announcements
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/announcements"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnouncementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneGetResponses200ContentApplication1jsonSchema])
                res.one_get_responses_200_content_application_1json_schema = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_areacodes(self) -> operations.GetAreacodesResponse:
        r"""List areacodes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/areacodes"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAreacodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_billing(self) -> operations.GetBillingResponse:
        r"""List global billing detail
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/billing"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBillingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_calls(self, request: operations.GetCallsRequest) -> operations.GetCallsResponse:
        r"""Validate a phone number by calling it once
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calls"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneGetResponses200ContentApplication1jsonSchema])
                res.one_get_responses_200_content_application_1json_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses400ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_400_content_application_1json_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out

        return res

    
    def get_charges(self) -> operations.GetChargesResponse:
        r"""List charges
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/charges"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_contacts(self) -> operations.GetContactsResponse:
        r"""List contacts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/contacts"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_customers(self) -> operations.GetCustomersResponse:
        r"""List all customers or find your own account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/customers"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCustomers302ApplicationJSON])
                res.get_customers_302_application_json_object = out

        return res

    
    def get_customers_account_announcements(self, request: operations.GetCustomersAccountAnnouncementsRequest) -> operations.GetCustomersAccountAnnouncementsResponse:
        r"""List of announcement audio files
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{account}/announcements", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersAccountAnnouncementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCustomersAccountAnnouncements200ApplicationJSON])
                res.get_customers_account_announcements_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out

        return res

    
    def get_customers_account_announcements_announcement_id_(self, request: operations.GetCustomersAccountAnnouncementsAnnouncementIDRequest) -> operations.GetCustomersAccountAnnouncementsAnnouncementIDResponse:
        r"""Represents an announcement audio file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{account}/announcements/{announcement_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersAccountAnnouncementsAnnouncementIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses201ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_201_content_application_1json_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCustomersAccountAnnouncementsAnnouncementID404ApplicationJSON])
                res.get_customers_account_announcements_announcement_id_404_application_json_object = out

        return res

    
    def get_faxes(self) -> operations.GetFaxesResponse:
        r"""List global ongoing faxes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/faxes"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFaxesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_hosted(self) -> operations.GetHostedResponse:
        r"""List Hosted VoIP domains
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hosted"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHostedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ip_address(self) -> operations.GetIPAddressResponse:
        r"""Return the IP address from where your API request originated
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ip-address"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_mobile(self) -> operations.GetMobileResponse:
        r"""List mobile accounts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mobile"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMobileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_numbers(self) -> operations.GetNumbersResponse:
        r"""List available SureVoIP Ofcom number allocations for purchase
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_numbers_areacodes(self) -> operations.GetNumbersAreacodesResponse:
        r"""Search available numbers by areacode
        You can search by area name, area code or filter using both.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/areacodes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersAreacodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNumbersAreacodes200ApplicationJSON])
                res.get_numbers_areacodes_200_application_json_object = out

        return res

    
    def get_partners(self) -> operations.GetPartnersResponse:
        r"""List SureVoIP Partner accounts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/partners"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPartnersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_porting(self) -> operations.GetPortingResponse:
        r"""List ported numbers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/porting"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_service_status(self) -> operations.GetServiceStatusResponse:
        r"""List all Service Status messages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service-status"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServiceStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sip(self) -> operations.GetSipResponse:
        r"""List all SIP accounts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sip"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sms(self) -> operations.GetSmsResponse:
        r"""List SMS
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sms"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSmsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_support_ip_address(self) -> operations.GetSupportIPAddressResponse:
        r"""Return the IP address from where your API request originated
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/support/ip-address"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSupportIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_support_service_status(self) -> operations.GetSupportServiceStatusResponse:
        r"""List all Service Status messages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/support/service-status"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSupportServiceStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_topups(self) -> operations.GetTopupsResponse:
        r"""List all account credit topups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/topups"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTopupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_announcements(self, request: operations.PostAnnouncementsRequest) -> operations.PostAnnouncementsResponse:
        r"""Add a new announcement audio file
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/announcements"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnnouncementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnouncements201ApplicationJSON])
                res.post_announcements_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnouncements400ApplicationJSON])
                res.post_announcements_400_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnouncements403ApplicationJSON])
                res.post_announcements_403_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out

        return res

    
    def post_calls(self, request: operations.PostCallsRequest) -> operations.PostCallsResponse:
        r"""Create phone calls with or without announcements and scheduled hangups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calls"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCalls202ApplicationJSON])
                res.post_calls_202_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses400ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_400_content_application_1json_schema = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out
        elif r.status_code == 500:
            pass

        return res

    
    def post_charges(self) -> operations.PostChargesResponse:
        r"""Create charges for invoices
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/charges"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChargesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def post_support_echo(self) -> operations.PostSupportEchoResponse:
        r"""Return your POSTed data for testing
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/support/echo"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSupportEchoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_customer(self, request: operations.GetCustomerRequest) -> operations.GetCustomerResponse:
        r"""Represents a customer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{account}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCustomer200ApplicationJSON])
                res.get_customer_200_application_json_object = out

        return res

    