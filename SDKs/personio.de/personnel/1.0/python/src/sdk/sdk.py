

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.personio.de/v1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def delete_company_attendances_id_(self, request: operations.DeleteCompanyAttendancesIDRequest) -> operations.DeleteCompanyAttendancesIDResponse:
        r"""This endpoint is responsible for deleting attendance data for the company employees.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/company/attendances/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCompanyAttendancesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response])
                res.response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def delete_company_time_offs_id_(self, request: operations.DeleteCompanyTimeOffsIDRequest) -> operations.DeleteCompanyTimeOffsIDResponse:
        r"""This endpoint is responsible for deleting absence period data for the company employees.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/company/time-offs/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCompanyTimeOffsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response])
                res.response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def get_company_attendances(self, request: operations.GetCompanyAttendancesRequest) -> operations.GetCompanyAttendancesResponse:
        r"""This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/company/attendances"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompanyAttendancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AttendancePeriodsResponse])
                res.attendance_periods_response = out

        return res

    
    def get_company_employees(self) -> operations.GetCompanyEmployeesResponse:
        r"""List Employees
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/company/employees"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompanyEmployeesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmployeesResponse])
                res.employees_response = out

        return res

    
    def get_company_employees_employee_id_(self, request: operations.GetCompanyEmployeesEmployeeIDRequest) -> operations.GetCompanyEmployeesEmployeeIDResponse:
        r"""Show employee by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/company/employees/{employee_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompanyEmployeesEmployeeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmployeeResponse])
                res.employee_response = out

        return res

    
    def get_company_employees_employee_id_profile_picture_width_(self, request: operations.GetCompanyEmployeesEmployeeIDProfilePictureWidthRequest) -> operations.GetCompanyEmployeesEmployeeIDProfilePictureWidthResponse:
        r"""Show employee profile picture
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/company/employees/{employee_id}/profile-picture/{width}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompanyEmployeesEmployeeIDProfilePictureWidthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/png"):
                res.get_company_employees_employee_id_profile_picture_width_200_image_png_binary_string = r.content

        return res

    
    def get_company_time_off_types(self, request: operations.GetCompanyTimeOffTypesRequest) -> operations.GetCompanyTimeOffTypesResponse:
        r"""Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/company/time-off-types"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompanyTimeOffTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCompanyTimeOffTypes200ApplicationJSON])
                res.get_company_time_off_types_200_application_json_object = out

        return res

    
    def get_company_time_offs(self, request: operations.GetCompanyTimeOffsRequest) -> operations.GetCompanyTimeOffsResponse:
        r"""This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/company/time-offs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompanyTimeOffsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AbsencePeriodsResponse])
                res.absence_periods_response = out

        return res

    
    def get_company_time_offs_id_(self, request: operations.GetCompanyTimeOffsIDRequest) -> operations.GetCompanyTimeOffsIDResponse:
        r"""Absence Period
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/company/time-offs/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompanyTimeOffsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.absence_period_response = out

        return res

    
    def patch_company_attendances_id_(self, request: operations.PatchCompanyAttendancesIDRequest) -> operations.PatchCompanyAttendancesIDResponse:
        r"""This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/company/attendances/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchCompanyAttendancesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response])
                res.response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def post_company_attendances(self, request: operations.PostCompanyAttendancesRequest) -> operations.PostCompanyAttendancesResponse:
        r"""This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/company/attendances"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompanyAttendancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NewAttendancePeriodResponse])
                res.new_attendance_period_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DetailedErrorResponse])
                res.detailed_error_response = out

        return res

    
    def post_company_employees(self, request: operations.PostCompanyEmployeesRequest) -> operations.PostCompanyEmployeesResponse:
        r"""Create an employee
        Creates new employee. Status of the employee will be set to `active` if `hire_date` provided is in past. Otherwise status will be set to `onboarding`. This endpoint will respond with `id` of created employee in case of success.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/company/employees"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompanyEmployeesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response])
                res.response = out

        return res

    
    def post_company_time_offs(self, request: operations.PostCompanyTimeOffsRequest) -> operations.PostCompanyTimeOffsResponse:
        r"""This endpoint is responsible for adding absence data for the company employees.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/company/time-offs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompanyTimeOffsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCompanyTimeOffs201ApplicationJSON])
                res.post_company_time_offs_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    