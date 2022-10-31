from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetDpsMessageReportOutputQueryParams:
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    from_date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'FromDate', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    message_statuses: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MessageStatuses', 'style': 'form', 'explode': True }})
    message_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MessageTypes', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    to_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ToDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDpsMessageReportOutputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDpsMessageReportOutputRequest:
    query_params: GetDpsMessageReportOutputQueryParams = field(default=None)
    headers: GetDpsMessageReportOutputHeaders = field(default=None)
    

@dataclass
class GetDpsMessageReportOutputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_dps_message_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
