from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserAPIPostReportPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIPostReportRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    create_report_model: Optional[shared.CreateReportModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_report_model1: Optional[shared.CreateReportModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    create_report_model2: Optional[shared.CreateReportModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UserAPIPostReportRequest:
    path_params: UserAPIPostReportPathParams = field()
    request: UserAPIPostReportRequests = field()
    

@dataclass
class UserAPIPostReportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    user_api_post_report_200_application_json_boolean: Optional[bool] = field(default=None)
    user_api_post_report_200_application_jsonp_boolean: Optional[bool] = field(default=None)
    user_api_post_report_200_text_json_boolean: Optional[bool] = field(default=None)
    
