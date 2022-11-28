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
    request: PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests = field()
    

@dataclass
class PostAPIV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    refresh_profile_telemetry_properties_response: Optional[shared.RefreshProfileTelemetryPropertiesResponse] = field(default=None)
    
