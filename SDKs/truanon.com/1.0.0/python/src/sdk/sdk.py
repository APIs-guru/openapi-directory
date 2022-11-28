

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://staging.truanon.com",
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
        
    
    
    
    def get_profile(self, request: operations.GetProfileRequest) -> operations.GetProfileResponse:
        r"""Get Profile
        get_profile Private API: Request confirmed profile data for your unique member ID
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/get_profile"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_token(self, request: operations.GetTokenRequest) -> operations.GetTokenResponse:
        r"""Get Token
        request_token Private API: Request a Proof token to let the member confirm in a popup interface
        
                {\"id\":\"qjgblv72bzzio\",\"type\":\"Proof\",\"active\":true,\"name\":\"New Proof\"}
        
        Step 2. Create a verifyProfile Public Web link: Use the Proof token id as the token argument in your public URL used to open a new target popup. This activity is where members may confirm immediately.
            
                https://staging.truanon.com/verifyProfile?id=john_doe&service=securecannabisalliance&token=qjgblv72bzzio
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/request_token"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    