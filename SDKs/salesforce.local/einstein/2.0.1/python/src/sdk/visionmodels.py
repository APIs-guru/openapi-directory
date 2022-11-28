import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VisionModels:
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

    
    def delete_model_1(self, request: operations.DeleteModel1Request) -> operations.DeleteModel1Response:
        r"""Delete a Model
        Deletes the specified model.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/models/{modelId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteModel1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeletionResponse])
                res.deletion_response = out

        return res

    
    def get_trained_model_learning_curve_1(self, request: operations.GetTrainedModelLearningCurve1Request) -> operations.GetTrainedModelLearningCurve1Response:
        r"""Get Model Learning Curve
        Returns the metrics for each epoch in a model.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/models/{modelId}/lc", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrainedModelLearningCurve1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LearningCurveList])
                res.learning_curve_list = out

        return res

    
    def get_trained_model_metrics_1(self, request: operations.GetTrainedModelMetrics1Request) -> operations.GetTrainedModelMetrics1Response:
        r"""Get Model Metrics
        Returns the metrics for a model
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/models/{modelId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrainedModelMetrics1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Metrics])
                res.metrics = out

        return res

    
    def get_trained_models_1(self, request: operations.GetTrainedModels1Request) -> operations.GetTrainedModels1Response:
        r"""Get All Models
        Returns all models for the specified dataset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vision/datasets/{datasetId}/models", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrainedModels1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModelList])
                res.model_list = out

        return res

    