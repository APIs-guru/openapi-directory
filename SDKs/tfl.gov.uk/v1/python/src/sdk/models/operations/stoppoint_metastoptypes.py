from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class StopPointMetaStopTypesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    stop_point_meta_stop_types_200_application_json_strings: Optional[List[str]] = field(default=None)
    stop_point_meta_stop_types_200_text_json_strings: Optional[List[str]] = field(default=None)
    
