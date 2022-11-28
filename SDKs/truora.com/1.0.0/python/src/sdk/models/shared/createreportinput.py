from dataclasses import dataclass, field



@dataclass
class CreateReportInput:
    r"""CreateReportInput
    Represents paramaters required to create a report
    """
    
    name: str = field(metadata={'form': { 'field_name': 'name' }})
    
