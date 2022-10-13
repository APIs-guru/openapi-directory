from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WkHTMLToPdfRequestDto:
    html_base64_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HtmlBase64String' }})
    resources: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    wk_html_to_pdf_arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WkHtmlToPdfArguments' }})
    
