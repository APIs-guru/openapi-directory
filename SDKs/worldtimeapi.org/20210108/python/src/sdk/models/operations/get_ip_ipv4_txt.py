from dataclasses import dataclass, field



@dataclass
class GetIPIpv4TxtPathParams:
    ipv4: str = field(default=None, metadata={'path_param': { 'field_name': 'ipv4', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIPIpv4TxtRequest:
    path_params: GetIPIpv4TxtPathParams = field(default=None)
    

@dataclass
class GetIPIpv4TxtResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
