from dataclasses import dataclass, field
from enum import Enum


@dataclass
class TagAPIPostReportPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    
class TagAPIPostReportReportTypeEnum(str, Enum):
    INVALID_INFO = "InvalidInfo"
    DUPLICATE = "Duplicate"
    INAPPROPRIATE = "Inappropriate"
    OTHER = "Other"


@dataclass
class TagAPIPostReportQueryParams:
    notes: str = field(metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    report_type: TagAPIPostReportReportTypeEnum = field(metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    version_number: int = field(metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class TagAPIPostReportRequest:
    path_params: TagAPIPostReportPathParams = field()
    query_params: TagAPIPostReportQueryParams = field()
    

@dataclass
class TagAPIPostReportResponse:
    content_type: str = field()
    status_code: int = field()
    
