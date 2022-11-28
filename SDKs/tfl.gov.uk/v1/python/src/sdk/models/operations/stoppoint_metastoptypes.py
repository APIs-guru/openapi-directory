from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class StopPointMetaStopTypesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    stop_point_meta_stop_types_200_application_json_strings: Optional[List[str]] = field(default=None)
    stop_point_meta_stop_types_200_text_json_strings: Optional[List[str]] = field(default=None)
    
