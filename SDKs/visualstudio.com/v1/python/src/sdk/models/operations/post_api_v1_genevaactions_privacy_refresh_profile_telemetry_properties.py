from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests:
    refresh_profile_telemetry_properties_request: Optional[shared.RefreshProfileTelemetryPropertiesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    refresh_profile_telemetry_properties_request1: Optional[shared.RefreshProfileTelemetryPropertiesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    refresh_profile_telemetry_properties_request2: Optional[shared.RefreshProfileTelemetryPropertiesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    refresh_profile_telemetry_properties_request3: Optional[shared.RefreshProfileTelemetryPropertiesRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest:
    request: PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests = field(default=None)
    

@dataclass
class PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    refresh_profile_telemetry_properties_response: Optional[shared.RefreshProfileTelemetryPropertiesResponse] = field(default=None)
    status_code: int = field(default=None)
    
