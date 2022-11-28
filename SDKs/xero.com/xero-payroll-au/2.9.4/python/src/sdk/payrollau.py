import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PayrollAu:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def create_employee(self, request: operations.CreateEmployeeRequest) -> operations.CreateEmployeeResponse:
        r"""Creates a payroll employee
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Employees"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEmployeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Employees])
                res.employees = out
        elif r.status_code == 400:
            pass

        return res

    
    def create_leave_application(self, request: operations.CreateLeaveApplicationRequest) -> operations.CreateLeaveApplicationResponse:
        r"""Creates a leave application
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LeaveApplications"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateLeaveApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaveApplications])
                res.leave_applications = out
        elif r.status_code == 400:
            pass

        return res

    
    def create_pay_item(self, request: operations.CreatePayItemRequest) -> operations.CreatePayItemResponse:
        r"""Creates a pay item
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/PayItems"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePayItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayItems])
                res.pay_items = out
        elif r.status_code == 400:
            pass

        return res

    
    def create_pay_run(self, request: operations.CreatePayRunRequest) -> operations.CreatePayRunResponse:
        r"""Creates a pay run
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/PayRuns"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePayRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayRuns])
                res.pay_runs = out
        elif r.status_code == 400:
            pass

        return res

    
    def create_payroll_calendar(self, request: operations.CreatePayrollCalendarRequest) -> operations.CreatePayrollCalendarResponse:
        r"""Creates a Payroll Calendar
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/PayrollCalendars"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePayrollCalendarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayrollCalendars])
                res.payroll_calendars = out
        elif r.status_code == 400:
            pass

        return res

    
    def create_superfund(self, request: operations.CreateSuperfundRequest) -> operations.CreateSuperfundResponse:
        r"""Creates a superfund
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Superfunds"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSuperfundResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SuperFunds])
                res.super_funds = out
        elif r.status_code == 400:
            pass

        return res

    
    def create_timesheet(self, request: operations.CreateTimesheetRequest) -> operations.CreateTimesheetResponse:
        r"""Creates a timesheet
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Timesheets"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTimesheetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Timesheets])
                res.timesheets = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_employee(self, request: operations.GetEmployeeRequest) -> operations.GetEmployeeResponse:
        r"""Retrieves an employee's detail by unique employee id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employees/{EmployeeID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmployeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Employees])
                res.employees = out

        return res

    
    def get_employees(self, request: operations.GetEmployeesRequest) -> operations.GetEmployeesResponse:
        r"""Searches payroll employees
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Employees"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmployeesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Employees])
                res.employees = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def get_leave_application(self, request: operations.GetLeaveApplicationRequest) -> operations.GetLeaveApplicationResponse:
        r"""Retrieves a leave application by a unique leave application id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LeaveApplications/{LeaveApplicationID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLeaveApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaveApplications])
                res.leave_applications = out

        return res

    
    def get_leave_applications(self, request: operations.GetLeaveApplicationsRequest) -> operations.GetLeaveApplicationsResponse:
        r"""Retrieves leave applications
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LeaveApplications"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLeaveApplicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaveApplications])
                res.leave_applications = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def get_pay_items(self, request: operations.GetPayItemsRequest) -> operations.GetPayItemsResponse:
        r"""Retrieves pay items
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/PayItems"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayItems])
                res.pay_items = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def get_pay_run(self, request: operations.GetPayRunRequest) -> operations.GetPayRunResponse:
        r"""Retrieves a pay run by using a unique pay run id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/PayRuns/{PayRunID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayRuns])
                res.pay_runs = out

        return res

    
    def get_pay_runs(self, request: operations.GetPayRunsRequest) -> operations.GetPayRunsResponse:
        r"""Retrieves pay runs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/PayRuns"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayRunsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayRuns])
                res.pay_runs = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def get_payroll_calendar(self, request: operations.GetPayrollCalendarRequest) -> operations.GetPayrollCalendarResponse:
        r"""Retrieves payroll calendar by using a unique payroll calendar ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/PayrollCalendars/{PayrollCalendarID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayrollCalendarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayrollCalendars])
                res.payroll_calendars = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def get_payroll_calendars(self, request: operations.GetPayrollCalendarsRequest) -> operations.GetPayrollCalendarsResponse:
        r"""Retrieves payroll calendars
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/PayrollCalendars"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayrollCalendarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayrollCalendars])
                res.payroll_calendars = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def get_payslip(self, request: operations.GetPayslipRequest) -> operations.GetPayslipResponse:
        r"""Retrieves for a payslip by a unique payslip id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Payslip/{PayslipID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayslipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayslipObject])
                res.payslip_object = out

        return res

    
    def get_settings(self, request: operations.GetSettingsRequest) -> operations.GetSettingsResponse:
        r"""Retrieves payroll settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Settings"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingsObject])
                res.settings_object = out

        return res

    
    def get_superfund(self, request: operations.GetSuperfundRequest) -> operations.GetSuperfundResponse:
        r"""Retrieves a superfund by using a unique superfund ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Superfunds/{SuperFundID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSuperfundResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SuperFunds])
                res.super_funds = out

        return res

    
    def get_superfund_products(self, request: operations.GetSuperfundProductsRequest) -> operations.GetSuperfundProductsResponse:
        r"""Retrieves superfund products
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SuperfundProducts"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSuperfundProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SuperFundProducts])
                res.super_fund_products = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def get_superfunds(self, request: operations.GetSuperfundsRequest) -> operations.GetSuperfundsResponse:
        r"""Retrieves superfunds
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Superfunds"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSuperfundsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SuperFunds])
                res.super_funds = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def get_timesheet(self, request: operations.GetTimesheetRequest) -> operations.GetTimesheetResponse:
        r"""Retrieves a timesheet by using a unique timesheet id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Timesheets/{TimesheetID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimesheetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TimesheetObject])
                res.timesheet_object = out

        return res

    
    def get_timesheets(self, request: operations.GetTimesheetsRequest) -> operations.GetTimesheetsResponse:
        r"""Retrieves timesheets
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Timesheets"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimesheetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Timesheets])
                res.timesheets = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def update_employee(self, request: operations.UpdateEmployeeRequest) -> operations.UpdateEmployeeResponse:
        r"""Updates an employee's detail
        Update properties on a single employee
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employees/{EmployeeID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEmployeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Employees])
                res.employees = out

        return res

    
    def update_leave_application(self, request: operations.UpdateLeaveApplicationRequest) -> operations.UpdateLeaveApplicationResponse:
        r"""Updates a specific leave application
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LeaveApplications/{LeaveApplicationID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLeaveApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaveApplications])
                res.leave_applications = out
        elif r.status_code == 400:
            pass

        return res

    
    def update_pay_run(self, request: operations.UpdatePayRunRequest) -> operations.UpdatePayRunResponse:
        r"""Updates a pay run
        Update properties on a single PayRun
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/PayRuns/{PayRunID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePayRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayRuns])
                res.pay_runs = out

        return res

    
    def update_payslip(self, request: operations.UpdatePayslipRequest) -> operations.UpdatePayslipResponse:
        r"""Updates a payslip
        Update lines on a single payslips
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Payslip/{PayslipID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePayslipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Payslips])
                res.payslips = out

        return res

    
    def update_superfund(self, request: operations.UpdateSuperfundRequest) -> operations.UpdateSuperfundResponse:
        r"""Updates a superfund
        Update properties on a single Superfund
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Superfunds/{SuperFundID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSuperfundResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SuperFunds])
                res.super_funds = out

        return res

    
    def update_timesheet(self, request: operations.UpdateTimesheetRequest) -> operations.UpdateTimesheetResponse:
        r"""Updates a timesheet
        Update properties on a single timesheet
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Timesheets/{TimesheetID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTimesheetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Timesheets])
                res.timesheets = out

        return res

    