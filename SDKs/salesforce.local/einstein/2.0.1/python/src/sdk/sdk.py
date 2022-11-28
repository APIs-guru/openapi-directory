
__doc__ = """ SDK Documentation: https://metamind.readme.io - For more information, see the Einstein Platform Services Developer Guide"""
import requests

from . import utils

from .authorization import Authorization
from .check_api_usage import CheckAPIUsage
from .language_datasets import LanguageDatasets
from .language_examples import LanguageExamples
from .language_models import LanguageModels
from .language_prediction import LanguagePrediction
from .language_training import LanguageTraining
from .vision_datasets import VisionDatasets
from .vision_examples import VisionExamples
from .vision_models import VisionModels
from .vision_prediction import VisionPrediction
from .vision_training import VisionTraining


SERVERS = [
	"http://salesforce.local",
]


class SDK:
    r"""SDK Documentation: https://metamind.readme.io - For more information, see the Einstein Platform Services Developer Guide"""
    authorization: Authorization
    check_api_usage: CheckAPIUsage
    language_datasets: LanguageDatasets
    language_examples: LanguageExamples
    language_models: LanguageModels
    language_prediction: LanguagePrediction
    language_training: LanguageTraining
    vision_datasets: VisionDatasets
    vision_examples: VisionExamples
    vision_models: VisionModels
    vision_prediction: VisionPrediction
    vision_training: VisionTraining

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
        
        self.authorization = Authorization(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.check_api_usage = CheckAPIUsage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.language_datasets = LanguageDatasets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.language_examples = LanguageExamples(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.language_models = LanguageModels(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.language_prediction = LanguagePrediction(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.language_training = LanguageTraining(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vision_datasets = VisionDatasets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vision_examples = VisionExamples(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vision_models = VisionModels(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vision_prediction = VisionPrediction(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vision_training = VisionTraining(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    