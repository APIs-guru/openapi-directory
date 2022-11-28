from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostAPIV1AgentTelemetryRequests:
    telemetry_data: Optional[List[shared.TelemetryData]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    telemetry_data1: Optional[List[shared.TelemetryData]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    telemetry_data2: Optional[List[shared.TelemetryData]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    telemetry_data3: Optional[List[shared.TelemetryData]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1AgentTelemetryRequest:
    request: Optional[PostAPIV1AgentTelemetryRequests] = field(default=None)
    

@dataclass
class PostAPIV1AgentTelemetryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
