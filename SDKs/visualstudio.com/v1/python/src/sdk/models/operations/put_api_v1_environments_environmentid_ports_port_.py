from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutAPIV1EnvironmentsEnvironmentIDPortsPortPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1EnvironmentsEnvironmentIDPortsPortRequests:
    add_forwarded_port_settings: Optional[shared.AddForwardedPortSettings] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    add_forwarded_port_settings1: Optional[shared.AddForwardedPortSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    add_forwarded_port_settings2: Optional[shared.AddForwardedPortSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    add_forwarded_port_settings3: Optional[shared.AddForwardedPortSettings] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutAPIV1EnvironmentsEnvironmentIDPortsPortRequest:
    path_params: PutAPIV1EnvironmentsEnvironmentIDPortsPortPathParams = field()
    request: Optional[PutAPIV1EnvironmentsEnvironmentIDPortsPortRequests] = field(default=None)
    

@dataclass
class PutAPIV1EnvironmentsEnvironmentIDPortsPortResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    message_codes: Optional[int] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
