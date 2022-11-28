import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Fleet:
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

    
    def get_fleet_fleetname_(self, request: operations.GetFleetFleetnameRequest) -> operations.GetFleetFleetnameResponse:
        r"""Get a Fleet
        Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.
        In the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.
        In lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/fleet/{fleetname}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFleetFleetnameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFleetFleetname200ApplicationJSON])
                res.get_fleet_fleetname_200_application_json_object = out

        return res

    