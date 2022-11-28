

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.peoplefinderspro.com",
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
        
    
    
    
    def post_address_autocomplete(self, request: operations.PostAddressAutocompleteRequest) -> operations.PostAddressAutocompleteResponse:
        r"""Search
        ###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*
        
        Perform a search:
        
        1. Add your key and key secret to the request headers.
            + galaxy-ap-name: [Key]
            + galaxy-ap-password: [Secret]
            + galaxy-search-type: DevAPIAddressAutoComplete
        
        2.  Add search criteria to your request.
            ~~~html
                    {
                        \"Input\":\"1821 Q\"
                    }
            ~~~
        
        3.  Submit your search
        
        The JSON request should have parts of the address.
        
        + <code>Input</code> = null (optional, string) ... address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/address/autocomplete"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAddressAutocompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_contact_enrich(self, request: operations.PostContactEnrichRequest) -> operations.PostContactEnrichResponse:
        r"""Search
        ###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*
        
        Perform a search:
        
        1. Add your key and key secret to the request headers.
            + galaxy-ap-name: [Key]
            + galaxy-ap-password: [Secret]
            + galaxy-search-type: DevAPIContactEnrich
        
        2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
            ~~~html
                    {
                        \"FirstName\": \"John\",
                        \"MiddleName\": \"T\",
                        \"LastName\": \"Lawrence\",
                        \"Dob\":\"\",
                        \"Age\": 0,
                        \"Address\": {
                            \"addressLine1\":\"123 Q Street\",
                            \"addressLine2\":\"Sacramento, CA\"
                        },
                        \"PhoneNumber\":\"\",
                        \"Email\":\"\"
                    }
            ~~~
        
        3.  Submit your search
        
        A complete list of JSON request properties follows.
        
        + <code>FirstName</code>= null (optional, string) ... First name.
        
        + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
        
        + <code>LastName</code> = null (optional, string) ... Last name.
        
        + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
        
        + <code>Age</code> = null (optional, int) ... Age.
        
        + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
            + <code>Members</code>
                + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
                + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
        
        + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
        
        + <code>Email</code> = null (optional, string) ... E-mail address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/contact/enrich"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContactEnrichResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_email_enrich(self, request: operations.PostEmailEnrichRequest) -> operations.PostEmailEnrichResponse:
        r"""Search
        ###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*
        
        Perform a search:
        
        1. Add your Access Profile username and password to the request headers.
            + galaxy-ap-name: [Key]
            + galaxy-ap-password: [Secret]
            + galaxy-search-type: DevAPIEmailID
        
        2.  Add search criteria to your request.
            ~~~html
                    {
                        \"Email\":\"johnsmith@somedomain\"
                    }
            ~~~
        
        3.  Submit your search
        
        The JSON request should have an email.
        
        + <code>Email</code> = null (optional, string) ... E-mail address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/email/enrich"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEmailEnrichResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_phone_enrich(self, request: operations.PostPhoneEnrichRequest) -> operations.PostPhoneEnrichResponse:
        r"""Search
        ###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*
        
        Perform a search:
        
        1. Add your key and key secret to the request headers.
            + galaxy-ap-name: [Key]
            + galaxy-ap-password: [Secret]
            + galaxy-search-type: DevAPICallerID
        
        2.  Add search criteria to your request.
            ~~~html
                    {
                        \"Phone\":\"(123) 456-7890\"
                    }
            ~~~
        
        3.  Submit your search
        
        The JSON request should have a phone number.
        
        + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/enrich"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPhoneEnrichResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def search(self, request: operations.SearchRequest) -> operations.SearchResponse:
        r"""Search
        ###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*
        
        Perform a search:
        
        1. Add your key and key secret to the request headers.
            + galaxy-ap-name: [Key]
            + galaxy-ap-password: [Secret]
            + galaxy-search-type: DevAPIIDVerification
        
        2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
            ~~~html
                    {
                        \"FirstName\": \"John\",
                        \"MiddleName\": \"T\",
                        \"LastName\": \"Lawrence\",
                        \"Dob\":\"\",
                        \"Age\": 0,
                        \"Address\": {
                            \"addressLine1\":\"123 Q Street, Unit 102\",
                            \"addressLine2\":\"Sacramento, CA\"
                        },
                        \"PhoneNumber\":\"\",
                        \"Email\":\"\"
                    }
            ~~~
        
        3.  Submit your search
        
        A complete list of JSON request properties follows.
        
        + <code>FirstName</code>= null (optional, string) ... First name.
        
        + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
        
        + <code>LastName</code> = null (optional, string) ... Last name.
        
        + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
        
        + <code>Age</code> = null (optional, int) ... Age.
        
        + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
            + <code>Members</code>
                + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
                + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
        
        + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
        
        + <code>Email</code> = null (optional, string) ... E-mail address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/identity/verify_id"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    