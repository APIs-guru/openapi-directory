from dataclasses import dataclass, field
from typing import Enum


@dataclass
class TagAPIPostReportPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    
class TagAPIPostReportReportTypeEnum(str, Enum):
    INVALID_INFO = "InvalidInfo"
    DUPLICATE = "Duplicate"
    INAPPROPRIATE = "Inappropriate"
    OTHER = "Other"


@dataclass
class TagAPIPostReportQueryParams:
    notes: str = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    report_type: TagAPIPostReportReportTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    version_number: int = field(default=None, metadata={'query_param': { 'field_name': 'versionNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class TagAPIPostReportRequest:
    path_params: TagAPIPostReportPathParams = field(default=None)
    query_params: TagAPIPostReportQueryParams = field(default=None)
    

@dataclass
class TagAPIPostReportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
