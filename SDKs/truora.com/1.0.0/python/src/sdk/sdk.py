

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.truora.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def create_pdf(self, request: operations.CreatePdfRequest) -> operations.CreatePdfResponse:
        r"""Create PDF
        Creates a PDF containing the background check results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/checks/{check_id}/pdf", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePdfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_custom_type(self, request: operations.DeleteCustomTypeRequest) -> operations.DeleteCustomTypeResponse:
        r"""Delete Custom Type
        Allows deleting a custom type. Person, vehicle, and company types cannot be deleted
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/config"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_v1_continuous_checks_continuous_check_id_history(self, request: operations.GetV1ContinuousChecksContinuousCheckIDHistoryRequest) -> operations.GetV1ContinuousChecksContinuousCheckIDHistoryResponse:
        r"""Lists background check logs. It can be paginated
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/continuous-checks/{continuous_check_id}/history", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1ContinuousChecksContinuousCheckIDHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetContiuousCheckHistoryOutput])
                res.get_contiuous_check_history_output = out

        return res

    
    def get_continuous_check(self, request: operations.GetContinuousCheckRequest) -> operations.GetContinuousCheckResponse:
        r"""Lists history associated with a Check. It can be paginated
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/continuous-checks/{continuous_check_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContinuousCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContinuousCheck])
                res.continuous_check = out

        return res

    
    def get_health_dashboard(self, request: operations.GetHealthDashboardRequest) -> operations.GetHealthDashboardResponse:
        r"""Get Health Dashboard
        Get the status of a database
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/checks/health"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHealthDashboardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Database]])
                res.databases = out

        return res

    
    def list_continuous_checks(self) -> operations.ListContinuousChecksResponse:
        r"""Lists all continuous checks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/continuous-checks"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListContinuousChecksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListContinuousChecksOutput])
                res.list_continuous_checks_output = out

        return res

    
    def update_continuous_check(self, request: operations.UpdateContinuousCheckRequest) -> operations.UpdateContinuousCheckResponse:
        r"""Updates a continuous check
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/continuous-checks/{continuous_check_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateContinuousCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContinuousCheck])
                res.continuous_check = out

        return res

    
    def update_custom_type(self, request: operations.UpdateCustomTypeRequest) -> operations.UpdateCustomTypeResponse:
        r"""Update Custom Type
        Allows updating a custom type. Person, vehicle, and company types are not modifiable
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/config"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCustomTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def batch_upload(self, request: operations.BatchUploadRequest) -> operations.BatchUploadResponse:
        r"""Batch Upload
        Upload multiple checks and associate them to the report. The inputs for these checks must be sent in an xlsx file, please use the following templates:
        
        **Person:** [Chile](https://app.truora.com/files/person/person-input-cl.xlsx), [Colombia](https://app.truora.com/files/person/person-input-co.xlsx), [Mexico](https://app.truora.com/files/person/person-input-mx.xlsx), [Peru](https://app.truora.com/files/person/person-input-pe.xlsx), [Costa Rica](https://app.truora.com/files/person/person-input-cr.xlsx), [Brazil](https://app.truora.com/files/person/person-input-br.xlsx)
        
        **Vehicle:** [Chile](https://app.truora.com/files/vehicle/vehicle-input-cl.xlsx), [Colombia](https://app.truora.com/files/vehicle/vehicle-input-co.xlsx), [Mexico](https://app.truora.com/files/vehicle/vehicle-input-mx.xlsx), [Peru](https://app.truora.com/files/vehicle/vehicle-input-pe.xlsx)
        
        **Company** [Colombia](https://app.truora.com/files/company/company-input-co.xlsx), [Mexico](https://app.truora.com/files/company/company-input-mx.xlsx), [Brazil](https://app.truora.com/files/company/company-input-br.xlsx)
        
        Keep in mind that we currently do not support batch uploads for custom check types. Background checks created by batch upload are processed with low priority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/reports/{report_id}/upload", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BatchUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportOutput])
                res.report_output = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out

        return res

    
    def create_check(self, request: operations.CreateCheckRequest) -> operations.CreateCheckResponse:
        r"""Create a background check
        Creates a background check and queues it to start collecting information. The full details of background checks can be retrieved with their respective Check IDs using getCheck endpoint. Keep in mind that, depending on the check type, input document, and country of a search, certain inputs are required. You should always provide as many inputs as possible in order to get the highest accuracy.
        
        If your check type is not referenced in the following table, please reach out to find out the fields that apply for you.
        
        | Country | Person-National | PersonForeigner | Company | Vehicle-National | Vehicle-Foreigner |
        |:-------:|:---------------:|:---------------:|:-------:|:----------------:|:-----------------:|
        | Chile<br>CL | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>date_of_birth*<br>phone_number<br>first_name*<br>last_name*<br>native_country* | N/A | national_id*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) | foreign_id*<br>first_name*<br>last_name*<br>date_of_birth*<br>native_country*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) |
        | Colombia<br>CO | national_id*<br>date_of_birth<br>issue_date<br>phone_number | foreign_id* or PEP*<br>date_of_birth<br>phone_number<br>issue_date* | tax_id*<br>national_id | national_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>owner_document_type<br>owner_document_id | foreign_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>issue_date* |
        | Mexico<br>MX | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate*<br>national_id<br>vehicle_id<br>driver_license(Estado de Mexico only) | N/A |
        | Brazil<br>BR | national_id*<br>date_of_birth*<br>region*<br>phone_number | N/A | tax_id* | license_plate* | N/A |
        | Costa Rica<br>CR | national_id*<br>phone_number | foreign_id* | N/A | license_plate* | N/A |
        | Ecuador<br>EC | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate* | N/A |
        | Peru<br>PE | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>ptp<br>date_of_birth*<br>phone_number | N/A | national_id*<br>date_of_birth<br>license_plate* | foreign_id*<br>ptp<br>date_of_birth*<br>license_plate* |
        | Argentina<br>AR | national_id* | N/A | N/A | national_id* | N/A |
        | International<br>ALL | name* | name* | company_name* | N/A | N/A |
        
        (*) Required field
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/checks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckOutput])
                res.check_output = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out

        return res

    
    def create_continuous_check(self, request: operations.CreateContinuousCheckRequest) -> operations.CreateContinuousCheckResponse:
        r"""Creates a continuous check that will run background checks recurrently according to the frequency provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/continuous-checks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateContinuousCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContinuousCheck])
                res.continuous_check = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out

        return res

    
    def create_hook(self, request: operations.CreateHookRequest) -> operations.CreateHookResponse:
        r"""Creates a hook subscription
        Creates a hook subscription to notify events in Truora plataform. Subscriptions broadcast data as events occur and additional subscription instances are not required in order to refresh the information. Events are received in an array as a JWT and are decoded using the signing key returned by this endpoint. Their structure is as follows:
        
        ```
        {
            \"events\": [
                {
                    \"event_action\": \"created\",
                    \"event_type\": \"check\",
                    \"id\": \"HKEdd28c569cf5eb74e45f0f4c092096e62c1c95ba2\",
                    \"object\": {
                        \"check_id\": \"CHK9c39003424c521aec8566ce59e1ddc86\",
                        \"country\": \"CO\",
                        \"creation_date\": \"2020-04-01T23:00:30.581232281Z\",
                        \"homonym_score\": 0,
                        \"id_score\": 0,
                        \"national_id\": \"1151959906\",
                        \"previous_check\": \"CHK4ec814fecd147eaae41027081d7d5caf\",
                        \"score\": -1,
                        \"status\": \"not_started\",
                        \"type\": \"person\",
                        \"update_date\": \"2020-04-01T23:00:30.680937413Z\"
                    },
                    \"timestamp\": \"2020-04-01T23:00:30Z\",
                    \"version\": \"1.0\"
                }
            ],
            \"iat\": 1585782031,
            \"iss\": \"Truora\"
        }
        ```
        
        Keep in mind that the object attribute varies depending on the event_type.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/hooks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hook])
                res.hook = out
        elif r.status_code == 400:
            pass

        return res

    
    def create_report(self, request: operations.CreateReportRequest) -> operations.CreateReportResponse:
        r"""Create Report
        Creates a Report to which it is possible to associate multiple Checks.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/reports"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportOutput])
                res.report_output = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportOutput])
                res.report_output = out

        return res

    
    def create_score_config(self, request: operations.CreateScoreConfigRequest) -> operations.CreateScoreConfigResponse:
        r"""Create Score Configurations
        Create a custom score configuration selecting the weight for each background check dataset and the country where it applies. Weights are numbers between 0 and 1 that represent how impactful the dataset is for the score. Keep in mind that the sum of all weights must equal 1.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/config"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateScoreConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreConfigOutput])
                res.score_config_output = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out

        return res

    
    def delet_hook(self, request: operations.DeletHookRequest) -> operations.DeletHookResponse:
        r"""Deletes hook
        Deletes hook configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/hooks/{hook_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delet_hook_200_application_json_string = r.content

        return res

    
    def get_check(self, request: operations.GetCheckRequest) -> operations.GetCheckResponse:
        r"""Get Background Check
        Returns the results of the check that matches the ID provided, complete with a set of scores explained below.
        
        ### Scores:
        
        
        - **Global Score**: Average risk associated with a person, company or vehicle, according to  the background check results. The global score considers results that are validated with the  ID number provided. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
        
        
        - **ID Score**: Average risk associated with a person according to the background check  results. The ID score considers the results that are validated with a person identity  document. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk. 
        
        
        - **Homonym Score**: Average risk associated with a person according to the background check  results. The homonym score considers results that are validated against the name of a person and could not be validated with their ID number. These results might have homonyms associated with them. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
        
        
        In order to calculate these scores, a weighted average is considered with different weights allocated to each dataset. Scores can be customized using the config endpoints by assigning a weight to each dataset according to its relevance.
        
        Keep in mind that results from the API vary depending on the country, check type and the inputs entered on check creation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/checks/{check_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckOutput])
                res.check_output = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out

        return res

    
    def get_pdf(self, request: operations.GetPdfRequest) -> operations.GetPdfResponse:
        r"""Get PDF
        Downloads the PDF in the specified language, Spanish by default.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/checks/{check_id}/pdf", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPdfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_report(self, request: operations.GetReportRequest) -> operations.GetReportResponse:
        r"""Get Report
        Returns a report with the given ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/reports/{report_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportOutput])
                res.report_output = out
        elif r.status_code == 404:
            pass

        return res

    
    def list_check_details(self, request: operations.ListCheckDetailsRequest) -> operations.ListCheckDetailsResponse:
        r"""List Check Details
        Lists all details associated with a Check. It can be paginated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/checks/{check_id}/details", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCheckDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckDetailsOutput])
                res.check_details_output = out

        return res

    
    def list_checks(self, request: operations.ListChecksRequest) -> operations.ListChecksResponse:
        r"""List Checks
        Lists the existing checks in the account or in a specified report.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/checks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListChecksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChecksOutput])
                res.checks_output = out

        return res

    
    def list_hook(self, request: operations.ListHookRequest) -> operations.ListHookResponse:
        r"""Lists all hooks
        Lists all the configured hooks in your account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/hooks"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HookOutput])
                res.hook_output = out

        return res

    
    def list_reports(self, request: operations.ListReportsRequest) -> operations.ListReportsResponse:
        r"""List Reports
        Lists all reports asociated with the client or user requesting.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/reports"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListReportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportsOutput])
                res.reports_output = out

        return res

    
    def list_score_configs(self, request: operations.ListScoreConfigsRequest) -> operations.ListScoreConfigsResponse:
        r"""List Score Configurations
        Lists the custom score configurations of the associated account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/config"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListScoreConfigsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreConfigsOutput])
                res.score_configs_output = out

        return res

    
    def report_behavior(self, request: operations.ReportBehaviorRequest) -> operations.ReportBehaviorResponse:
        r"""Report Behavior
        Creates a behavior item to report employee conducts that do not or might not be included in their background check. This report includes both possitive and negative behaviors and sorts them by severity.
        
        ### Reasons to report a person
        
        <table>
          <tr>
            <td style=\"width: 100px\"><center><b>Very High</b><br>(Score: 1)</td>
            <td>Rape, Drug Dealing, Sexual Harassment</td>
          </tr>
          <tr>
            <td><center><b>High</b><br>(Score: 0.8)</td>
            <td>Theft, Fights, Aggressive Behaviour, Identity Fraud, Drunk, Drug Possession</td>
          </tr>
          <tr>
            <td><center><b>Medium</b><br>(Score: 0.6)</td>
            <td>Absences</td>
          </tr>
          <tr>
            <td><center><b>Low</b><br>(Score: 0.4)</td>
            <td>Tardiness, Confidentiality Breach</td>
          </tr>
          <tr>
            <td><center><b>None</b><br>(Score: 0)</td>
            <td>Good Reputation</td>
          </tr>
          <tr>
            <td><center><b>Unknown</b></td>
            <td>No information</td>
          </tr>
        </table>
        
        **NOTE:** If the reason of your report is not here, please contact Truora support team.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/behavior"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportBehaviorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BehaviourOutput])
                res.behaviour_output = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.errors = out

        return res

    
    def update_hook(self, request: operations.UpdateHookRequest) -> operations.UpdateHookResponse:
        r"""Updates hook
        Updates a hook configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/hooks/{hook_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-www-form-urlencoded"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out

        return res

    