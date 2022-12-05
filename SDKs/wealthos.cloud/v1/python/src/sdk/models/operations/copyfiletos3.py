from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class CopyFileToS3Headers:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CopyFileToS3Security:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CopyFileToS3Request:
    headers: CopyFileToS3Headers = field()
    security: CopyFileToS3Security = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CopyFileToS3Response:
    content_type: str = field()
    status_code: int = field()
    copy_file_to_s3_200_application_json_any: Optional[Any] = field(default=None)
    copy_file_to_s3_400_application_json_any: Optional[Any] = field(default=None)
    copy_file_to_s3_401_application_json_any: Optional[Any] = field(default=None)
    copy_file_to_s3_403_application_json_any: Optional[Any] = field(default=None)
    copy_file_to_s3_404_application_json_any: Optional[Any] = field(default=None)
    copy_file_to_s3_429_application_json_any: Optional[Any] = field(default=None)
    copy_file_to_s3_500_application_json_any: Optional[Any] = field(default=None)
    
