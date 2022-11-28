

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.symanto.net",
]


class SDK:
    

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
        
    
    
    
    def communication(self, request: operations.CommunicationRequest) -> operations.CommunicationResponse:
        r"""Communication & Tonality
        Identify the purpose and writing style of a written text.
        
        Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]
        
        Returned labels:
        * action-seeking
        * fact-oriented
        * information-seeking
        * self-revealing
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/communication"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CommunicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PostPredicted]])
                res.prediction_results = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrors])
                res.validation_errors = out

        return res

    
    def ekman_emotion(self, request: operations.EkmanEmotionRequest) -> operations.EkmanEmotionResponse:
        r"""Emotion Analysis
        Detect the emotions of the text based on Ekman.
        
        Supported Langauges: [`en`, `de`, `es`]
        
        Returned labels:
        * anger
        * disgust
        * fear
        * joy
        * sadness
        * surprise
        * no-emotion
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ekman-emotion"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EkmanEmotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PostPredicted]])
                res.prediction_results = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrors])
                res.validation_errors = out

        return res

    
    def emotion(self, request: operations.EmotionRequest) -> operations.EmotionResponse:
        r"""Emotion Analysis
        Detect the emotions of the text.
        
        Supported Langauges: [`en`, `de`, `es`]
        
        Returned labels:
        * anger
        * joy
        * love
        * sadness
        * surprise
        * uncategorized
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/emotion"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EmotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PostPredicted]])
                res.prediction_results = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrors])
                res.validation_errors = out

        return res

    
    def language_detection(self, request: operations.LanguageDetectionRequest) -> operations.LanguageDetectionResponse:
        r"""Language Detection
        Identifies what language a text is written in. Only languages that our API supports can be analyzed.
        
        Returned labels:
        * language_code of the detected language
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/language-detection"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguageDetectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LanguagePredicted]])
                res.language_detection_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrors])
                res.validation_errors = out

        return res

    
    def personality(self, request: operations.PersonalityRequest) -> operations.PersonalityResponse:
        r"""Personality Traits
        Predict the personality trait of author of any written text.
        
        Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]
        
        Returned labels:
        
        * emotional
        * rational
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/personality"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PersonalityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PostPredicted]])
                res.prediction_results = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrors])
                res.validation_errors = out

        return res

    
    def sentiment(self, request: operations.SentimentRequest) -> operations.SentimentResponse:
        r"""Sentiment Analysis
        Evaluate the overall tonality of the text.
        
        Supported Languages: [`en`, `de`, `es`]
        
        Returned labels:
        * positive
        * negative
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sentiment"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SentimentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PostPredicted]])
                res.prediction_results = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrors])
                res.validation_errors = out

        return res

    
    def topic_sentiment(self, request: operations.TopicSentimentRequest) -> operations.TopicSentimentResponse:
        r"""Extracts topics and sentiments and relates them.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/topic-sentiment"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TopicSentimentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TopicSentimentOutput]])
                res.topic_sentiment_response = out

        return res

    