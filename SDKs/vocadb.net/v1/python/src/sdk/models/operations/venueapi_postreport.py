from dataclasses import dataclass, field
from typing import Enum


@dataclass
class VenueAPIPostReportPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class VenueAPIPostReportReportTypeEnum(str, Enum):
    INVALID_INFO = "InvalidInfo"
    DUPLICATE = "Duplicate"
    INAPPROPRIATE = "Inappropriate"
    OTHER = "Other"


@dataclass
class VenueAPIPostReportQueryParams:
    notes: str = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    report_type: VenueAPIPostReportReportTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    version_number: int = field(default=None, metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class VenueAPIPostReportRequest:
    path_params: VenueAPIPostReportPathParams = field(default=None)
    query_params: VenueAPIPostReportQueryParams = field(default=None)
    

@dataclass
class VenueAPIPostReportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
