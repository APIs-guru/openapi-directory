from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserAPIPostReportPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIPostReportRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    create_report_model: Optional[shared.CreateReportModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_report_model1: Optional[shared.CreateReportModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    create_report_model2: Optional[shared.CreateReportModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class UserAPIPostReportRequest:
    path_params: UserAPIPostReportPathParams = field(default=None)
    request: UserAPIPostReportRequests = field(default=None)
    

@dataclass
class UserAPIPostReportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_api_post_report_200_application_json_boolean: Optional[bool] = field(default=None)
    user_api_post_report_200_application_jsonp_boolean: Optional[bool] = field(default=None)
    user_api_post_report_200_text_json_boolean: Optional[bool] = field(default=None)
    
