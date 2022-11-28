from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetReportsSummaryQueryParams:
    from_: datetime = field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: datetime = field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    device_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReportsSummaryRequest:
    query_params: GetReportsSummaryQueryParams = field()
    

@dataclass
class GetReportsSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    report_summaries: Optional[List[shared.ReportSummary]] = field(default=None)
    
