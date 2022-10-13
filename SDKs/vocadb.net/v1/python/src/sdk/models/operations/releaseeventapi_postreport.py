from dataclasses import dataclass, field
from typing import Enum


@dataclass
class ReleaseEventAPIPostReportPathParams:
    event_id: int = field(default=None, metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    
class ReleaseEventAPIPostReportReportTypeEnum(str, Enum):
    INVALID_INFO = "InvalidInfo"
    DUPLICATE = "Duplicate"
    INAPPROPRIATE = "Inappropriate"
    OTHER = "Other"


@dataclass
class ReleaseEventAPIPostReportQueryParams:
    notes: str = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    report_type: ReleaseEventAPIPostReportReportTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    version_number: int = field(default=None, metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventAPIPostReportRequest:
    path_params: ReleaseEventAPIPostReportPathParams = field(default=None)
    query_params: ReleaseEventAPIPostReportQueryParams = field(default=None)
    

@dataclass
class ReleaseEventAPIPostReportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
