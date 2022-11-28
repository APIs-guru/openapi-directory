import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VisionPrediction:
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

    
    def detect_multipart(self, request: operations.DetectMultipartRequest) -> operations.DetectMultipartResponse:
        r"""Detection with Image File
        Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/detect"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DetectMultipartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectDetectionResponse])
                res.object_detection_response = out

        return res

    
    def ocr_multipart(self, request: operations.OcrMultipartRequest) -> operations.OcrMultipartResponse:
        r"""Detect Text
        Returns a prediction from an OCR model for the specified image URL or local image file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/ocr"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OcrMultipartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OcrPredictResponse])
                res.ocr_predict_response = out

        return res

    
    def predict_multipart(self, request: operations.PredictMultipartRequest) -> operations.PredictMultipartResponse:
        r"""Make Prediction
        Returns a prediction from an image or multi-label model for the specified image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vision/predict"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PredictMultipartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageClassificationResponse])
                res.image_classification_response = out

        return res

    