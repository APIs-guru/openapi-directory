from dataclasses import dataclass, field
from enum import Enum


@dataclass
class ReleaseEventAPIPostReportPathParams:
    event_id: int = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    
class ReleaseEventAPIPostReportReportTypeEnum(str, Enum):
    INVALID_INFO = "InvalidInfo"
    DUPLICATE = "Duplicate"
    INAPPROPRIATE = "Inappropriate"
    OTHER = "Other"


@dataclass
class ReleaseEventAPIPostReportQueryParams:
    notes: str = field(metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    report_type: ReleaseEventAPIPostReportReportTypeEnum = field(metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    version_number: int = field(metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventAPIPostReportRequest:
    path_params: ReleaseEventAPIPostReportPathParams = field()
    query_params: ReleaseEventAPIPostReportQueryParams = field()
    

@dataclass
class ReleaseEventAPIPostReportResponse:
    content_type: str = field()
    status_code: int = field()
    
