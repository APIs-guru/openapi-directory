from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCompanyEmployeesEmployeeIDProfilePictureWidthPathParams:
    employee_id: int = field(default=None, metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    width: int = field(default=None, metadata={'path_param': { 'field_name': 'width', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCompanyEmployeesEmployeeIDProfilePictureWidthRequest:
    path_params: GetCompanyEmployeesEmployeeIDProfilePictureWidthPathParams = field(default=None)
    

@dataclass
class GetCompanyEmployeesEmployeeIDProfilePictureWidthResponse:
    content_type: str = field(default=None)
    get_company_employees_employee_id_profile_picture_width_200_image_png_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
