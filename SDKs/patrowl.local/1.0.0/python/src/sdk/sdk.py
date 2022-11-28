
__doc__ = """ SDK Documentation: https://github.com/Patrowl/PatrowlDocs - Find out more about Patrowl"""
import requests

from . import utils

from .patrowl_engine import PatrowlEngine


SERVERS = [
	"http://patrowl.local",
	"http://localhost:5001/engines/nmap/",
	"http://localhost:5004/engines/ssllabs/",
	"http://localhost:5005/engines/arachni/",
	"http://localhost:5006/engines/owl_dns/",
	"http://localhost:5007/engines/virustotal/",
	"http://localhost:5008/engines/urlvoid/",
	"http://localhost:5009/engines/cortex/",
	"http://localhost:5012/engines/owl_leaks/",
	"http://localhost:5013/engines/owl_code/",
	"http://localhost:5014/engines/sslscan/",
]


class SDK:
    r"""SDK Documentation: https://github.com/Patrowl/PatrowlDocs - Find out more about Patrowl"""
    patrowl_engine: PatrowlEngine

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.patrowl_engine = PatrowlEngine(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    