from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeviceAgent:
    r"""DeviceAgent
    Contains all information regarding a specific PATROL Agent.
    """
    
    connection_status: Optional[str] = field(default=None)
    id: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    os: Optional[str] = field(default=None)
    port: Optional[str] = field(default=None)
    url: Optional[str] = field(default=None)
    version: Optional[str] = field(default=None)
    
