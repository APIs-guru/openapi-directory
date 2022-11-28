

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.paylocity.com/api",
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
        
    
    
    
    def add_client_secret(self, request: operations.AddClientSecretRequest) -> operations.AddClientSecretResponse:
        r"""Obtain new client secret.
        Obtain new client secret for Paylocity-issued client id. See Setup section for details.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/credentials/secrets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddClientSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientCredentialsResponse]])
                res.client_credentials_responses = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def add_employee(self, request: operations.AddEmployeeRequest) -> operations.AddEmployeeResponse:
        r"""Add new employee
        New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddEmployeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EmployeeIDResponse]])
                res.employee_id_responses = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def add_local_tax(self, request: operations.AddLocalTaxRequest) -> operations.AddLocalTaxResponse:
        r"""Add new local tax
        Sends new employee local tax information directly to Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddLocalTaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def add_new_employee_to_web_link(self, request: operations.AddNewEmployeeToWebLinkRequest) -> operations.AddNewEmployeeToWebLinkResponse:
        r"""Add new employee to Web Link
        Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/weblinkstaging/companies/{companyId}/employees/newemployees", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddNewEmployeeToWebLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TrackingNumberResponse]])
                res.tracking_number_responses = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def add_or_update_additional_rates(self, request: operations.AddOrUpdateAdditionalRatesRequest) -> operations.AddOrUpdateAdditionalRatesResponse:
        r"""Add/update additional rates
        Sends new or updated employee additional rates information directly to Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/additionalRates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddOrUpdateAdditionalRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def add_or_update_an_employee_earning(self, request: operations.AddOrUpdateAnEmployeeEarningRequest) -> operations.AddOrUpdateAnEmployeeEarningResponse:
        r"""Add/Update Earning
        Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/earnings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddOrUpdateAnEmployeeEarningResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def add_or_update_emergency_contacts(self, request: operations.AddOrUpdateEmergencyContactsRequest) -> operations.AddOrUpdateEmergencyContactsResponse:
        r"""Add/update emergency contacts
        Sends new or updated employee emergency contacts directly to Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/emergencyContacts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddOrUpdateEmergencyContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def add_or_update_non_primary_state_tax(self, request: operations.AddOrUpdateNonPrimaryStateTaxRequest) -> operations.AddOrUpdateNonPrimaryStateTaxResponse:
        r"""Add/update non-primary state tax
        Sends new or updated employee non-primary state tax information directly to Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/nonprimaryStateTax", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddOrUpdateNonPrimaryStateTaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def add_or_update_primary_state_tax(self, request: operations.AddOrUpdatePrimaryStateTaxRequest) -> operations.AddOrUpdatePrimaryStateTaxResponse:
        r"""Add/update primary state tax
        Sends new or updated employee primary state tax information directly to Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/primaryStateTax", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddOrUpdatePrimaryStateTaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def delete_earning_by_earning_code_and_start_date(self, request: operations.DeleteEarningByEarningCodeAndStartDateRequest) -> operations.DeleteEarningByEarningCodeAndStartDateResponse:
        r"""Delete Earning by Earning Code and Start Date
        Delete Earning by Earning Code and Start Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEarningByEarningCodeAndStartDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def delete_local_tax_by_tax_code(self, request: operations.DeleteLocalTaxByTaxCodeRequest) -> operations.DeleteLocalTaxByTaxCodeResponse:
        r"""Delete local tax by tax code
        Delete local tax by tax code
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLocalTaxByTaxCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_all_company_codes_and_descriptions_by_resource(self, request: operations.GetAllCompanyCodesAndDescriptionsByResourceRequest) -> operations.GetAllCompanyCodesAndDescriptionsByResourceResponse:
        r"""Get All Company Codes
        Get All Company Codes for the selected company and resource
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/codes/{codeResource}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCompanyCodesAndDescriptionsByResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CompanyCodes]])
                res.company_codes = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_all_custom_fields_by_category(self, request: operations.GetAllCustomFieldsByCategoryRequest) -> operations.GetAllCustomFieldsByCategoryResponse:
        r"""Get All Custom Fields
        Get All Custom Fields for the selected company
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/customfields/{category}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllCustomFieldsByCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CustomFieldDefinition]])
                res.custom_field_definitions = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_all_direct_deposit(self, request: operations.GetAllDirectDepositRequest) -> operations.GetAllDirectDepositResponse:
        r"""Get All Direct Deposit
        Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/directDeposit", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllDirectDepositResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DirectDeposit]])
                res.direct_deposits = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_all_earnings(self, request: operations.GetAllEarningsRequest) -> operations.GetAllEarningsResponse:
        r"""Get All Earnings
        Get All Earnings returns all earnings for the selected employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/earnings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllEarningsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Earning]])
                res.earnings = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_earning_by_earning_code_and_start_date(self, request: operations.GetEarningByEarningCodeAndStartDateRequest) -> operations.GetEarningByEarningCodeAndStartDateResponse:
        r"""Get Earning by Earning Code and Start Date
        Get Earnings returns the single earning with the provided earning code and start date for the selected employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEarningByEarningCodeAndStartDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Earning])
                res.earning = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_earnings_by_earning_code(self, request: operations.GetEarningsByEarningCodeRequest) -> operations.GetEarningsByEarningCodeResponse:
        r"""Get Earnings by Earning Code
        Get Earnings returns all earnings with the provided earning code for the selected employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEarningsByEarningCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Earning]])
                res.earnings = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_all_employees(self, request: operations.GetAllEmployeesRequest) -> operations.GetAllEmployeesResponse:
        r"""Get all employees
        Get All Employees API will return employee data currently available in Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllEmployeesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EmployeeInfo]])
                res.employee_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_all_local_taxes(self, request: operations.GetAllLocalTaxesRequest) -> operations.GetAllLocalTaxesResponse:
        r"""Get all local taxes
        Returns all local taxes for the selected employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllLocalTaxesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LocalTax]])
                res.local_taxes = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_company_specific_open_api_documentation(self, request: operations.GetCompanySpecificOpenAPIDocumentationRequest) -> operations.GetCompanySpecificOpenAPIDocumentationResponse:
        r"""Get Company-Specific Open API Documentation
        The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/openapi", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompanySpecificOpenAPIDocumentationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_employee(self, request: operations.GetEmployeeRequest) -> operations.GetEmployeeResponse:
        r"""Get employee
        Get Employee API will return employee data currently available in Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmployeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Employee]])
                res.employees = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def get_local_tax_by_tax_code(self, request: operations.GetLocalTaxByTaxCodeRequest) -> operations.GetLocalTaxByTaxCodeResponse:
        r"""Get local taxes by tax code
        Returns all local taxes with the provided tax code for the selected employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocalTaxByTaxCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LocalTax]])
                res.local_taxes = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def gets_employee_pay_statement_detail_data_based_on_the_specified_year(self, request: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest) -> operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse:
        r"""Get employee pay statement details data for the specified year.
        Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PayStatementDetails]])
                res.pay_statement_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def gets_employee_pay_statement_detail_data_based_on_the_specified_year_and_check_date(self, request: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest) -> operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse:
        r"""Get employee pay statement details data for the specified year and check date.
        Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}/{checkDate}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PayStatementDetails]])
                res.pay_statement_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def gets_employee_pay_statement_summary_data_based_on_the_specified_year(self, request: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest) -> operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse:
        r"""Get employee pay statement summary data for the specified year.
        Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PayStatementSummary]])
                res.pay_statement_summaries = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def gets_employee_pay_statement_summary_data_based_on_the_specified_year_and_check_date(self, request: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest) -> operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse:
        r"""Get employee pay statement summary data for the specified year and check date.
        Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}/{checkDate}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PayStatementSummary]])
                res.pay_statement_summaries = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def update_employee(self, request: operations.UpdateEmployeeRequest) -> operations.UpdateEmployeeResponse:
        r"""Update employee
        Update Employee API will update existing employee data in WebPay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEmployeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    
    def update_or_add_employee_benefit_setup(self, request: operations.UpdateOrAddEmployeeBenefitSetupRequest) -> operations.UpdateOrAddEmployeeBenefitSetupResponse:
        r"""Add/update employee's benefit setup
        Sends new or updated employee benefit setup information directly to Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/benefitSetup", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrAddEmployeeBenefitSetupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Error]])
                res.errors = out

        return res

    