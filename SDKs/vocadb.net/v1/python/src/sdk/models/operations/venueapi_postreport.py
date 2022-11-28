from dataclasses import dataclass, field
from enum import Enum


@dataclass
class VenueAPIPostReportPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class VenueAPIPostReportReportTypeEnum(str, Enum):
    INVALID_INFO = "InvalidInfo"
    DUPLICATE = "Duplicate"
    INAPPROPRIATE = "Inappropriate"
    OTHER = "Other"


@dataclass
class VenueAPIPostReportQueryParams:
    notes: str = field(metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    report_type: VenueAPIPostReportReportTypeEnum = field(metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    version_number: int = field(metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class VenueAPIPostReportRequest:
    path_params: VenueAPIPostReportPathParams = field()
    query_params: VenueAPIPostReportQueryParams = field()
    

@dataclass
class VenueAPIPostReportResponse:
    content_type: str = field()
    status_code: int = field()
    
