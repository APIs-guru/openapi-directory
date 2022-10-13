import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://messaging.twilio.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    

    
    def create_alpha_sender(self, request: operations.CreateAlphaSenderRequest) -> operations.CreateAlphaSenderResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ALPHA_SENDER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/AlphaSenders", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAlphaSenderResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ServiceAlphaSender])
                res.responses[r.status_code][content_type] = operations.CreateAlphaSenderResponses(messaging_v1_service_alpha_sender=out)

        return res

    
    def create_brand_registrations(self, request: operations.CreateBrandRegistrationsRequest) -> operations.CreateBrandRegistrationsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_BRAND_REGISTRATIONS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBrandRegistrationsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1BrandRegistrations])
                res.responses[r.status_code][content_type] = operations.CreateBrandRegistrationsResponses(messaging_v1_brand_registrations=out)

        return res

    
    def create_brand_vetting(self, request: operations.CreateBrandVettingRequest) -> operations.CreateBrandVettingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_BRAND_VETTING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/a2p/BrandRegistrations/{BrandSid}/Vettings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBrandVettingResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1BrandRegistrationsBrandVetting])
                res.responses[r.status_code][content_type] = operations.CreateBrandVettingResponses(messaging_v1_brand_registrations_brand_vetting=out)

        return res

    
    def create_external_campaign(self, request: operations.CreateExternalCampaignRequest) -> operations.CreateExternalCampaignResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_EXTERNAL_CAMPAIGN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateExternalCampaignResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ExternalCampaign])
                res.responses[r.status_code][content_type] = operations.CreateExternalCampaignResponses(messaging_v1_external_campaign=out)

        return res

    
    def create_phone_number(self, request: operations.CreatePhoneNumberRequest) -> operations.CreatePhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/PhoneNumbers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePhoneNumberResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ServicePhoneNumber])
                res.responses[r.status_code][content_type] = operations.CreatePhoneNumberResponses(messaging_v1_service_phone_number=out)

        return res

    
    def create_service(self, request: operations.CreateServiceRequest) -> operations.CreateServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1Service])
                res.responses[r.status_code][content_type] = operations.CreateServiceResponses(messaging_v1_service=out)

        return res

    
    def create_short_code(self, request: operations.CreateShortCodeRequest) -> operations.CreateShortCodeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SHORT_CODE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/ShortCodes", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateShortCodeResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ServiceShortCode])
                res.responses[r.status_code][content_type] = operations.CreateShortCodeResponses(messaging_v1_service_short_code=out)

        return res

    
    def create_us_app_to_person(self, request: operations.CreateUsAppToPersonRequest) -> operations.CreateUsAppToPersonResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_US_APP_TO_PERSON_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUsAppToPersonResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ServiceUsAppToPerson])
                res.responses[r.status_code][content_type] = operations.CreateUsAppToPersonResponses(messaging_v1_service_us_app_to_person=out)

        return res

    
    def delete_alpha_sender(self, request: operations.DeleteAlphaSenderRequest) -> operations.DeleteAlphaSenderResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_ALPHA_SENDER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/AlphaSenders/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAlphaSenderResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_phone_number(self, request: operations.DeletePhoneNumberRequest) -> operations.DeletePhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePhoneNumberResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_service(self, request: operations.DeleteServiceRequest) -> operations.DeleteServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_short_code(self, request: operations.DeleteShortCodeRequest) -> operations.DeleteShortCodeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SHORT_CODE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/ShortCodes/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShortCodeResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_us_app_to_person(self, request: operations.DeleteUsAppToPersonRequest) -> operations.DeleteUsAppToPersonResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_US_APP_TO_PERSON_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsAppToPersonResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def fetch_alpha_sender(self, request: operations.FetchAlphaSenderRequest) -> operations.FetchAlphaSenderResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ALPHA_SENDER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/AlphaSenders/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAlphaSenderResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ServiceAlphaSender])
                res.responses[r.status_code][content_type] = operations.FetchAlphaSenderResponses(messaging_v1_service_alpha_sender=out)

        return res

    
    def fetch_brand_registrations(self, request: operations.FetchBrandRegistrationsRequest) -> operations.FetchBrandRegistrationsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_BRAND_REGISTRATIONS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/a2p/BrandRegistrations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchBrandRegistrationsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1BrandRegistrations])
                res.responses[r.status_code][content_type] = operations.FetchBrandRegistrationsResponses(messaging_v1_brand_registrations=out)

        return res

    
    def fetch_brand_vetting(self, request: operations.FetchBrandVettingRequest) -> operations.FetchBrandVettingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_BRAND_VETTING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchBrandVettingResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1BrandRegistrationsBrandVetting])
                res.responses[r.status_code][content_type] = operations.FetchBrandVettingResponses(messaging_v1_brand_registrations_brand_vetting=out)

        return res

    
    def fetch_deactivation(self, request: operations.FetchDeactivationRequest) -> operations.FetchDeactivationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_DEACTIVATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDeactivationResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 307:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1Deactivation])
                res.responses[r.status_code][content_type] = operations.FetchDeactivationResponses(messaging_v1_deactivation=out)

        return res

    
    def fetch_phone_number(self, request: operations.FetchPhoneNumberRequest) -> operations.FetchPhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchPhoneNumberResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ServicePhoneNumber])
                res.responses[r.status_code][content_type] = operations.FetchPhoneNumberResponses(messaging_v1_service_phone_number=out)

        return res

    
    def fetch_service(self, request: operations.FetchServiceRequest) -> operations.FetchServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1Service])
                res.responses[r.status_code][content_type] = operations.FetchServiceResponses(messaging_v1_service=out)

        return res

    
    def fetch_short_code(self, request: operations.FetchShortCodeRequest) -> operations.FetchShortCodeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SHORT_CODE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/ShortCodes/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchShortCodeResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ServiceShortCode])
                res.responses[r.status_code][content_type] = operations.FetchShortCodeResponses(messaging_v1_service_short_code=out)

        return res

    
    def fetch_us_app_to_person(self, request: operations.FetchUsAppToPersonRequest) -> operations.FetchUsAppToPersonResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_US_APP_TO_PERSON_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUsAppToPersonResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ServiceUsAppToPerson])
                res.responses[r.status_code][content_type] = operations.FetchUsAppToPersonResponses(messaging_v1_service_us_app_to_person=out)

        return res

    
    def fetch_us_app_to_person_usecase(self, request: operations.FetchUsAppToPersonUsecaseRequest) -> operations.FetchUsAppToPersonUsecaseResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_US_APP_TO_PERSON_USECASE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/Usecases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUsAppToPersonUsecaseResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1ServiceUsAppToPersonUsecase])
                res.responses[r.status_code][content_type] = operations.FetchUsAppToPersonUsecaseResponses(messaging_v1_service_us_app_to_person_usecase=out)

        return res

    
    def fetch_usecase(self, request: operations.FetchUsecaseRequest) -> operations.FetchUsecaseResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_USECASE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUsecaseResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1Usecase])
                res.responses[r.status_code][content_type] = operations.FetchUsecaseResponses(messaging_v1_usecase=out)

        return res

    
    def list_alpha_sender(self, request: operations.ListAlphaSenderRequest) -> operations.ListAlphaSenderResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ALPHA_SENDER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/AlphaSenders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAlphaSenderResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAlphaSender200ApplicationJSONListAlphaSenderResponse])
                res.responses[r.status_code][content_type] = operations.ListAlphaSenderResponses(list_alpha_sender_response=out)

        return res

    
    def list_brand_registrations(self, request: operations.ListBrandRegistrationsRequest) -> operations.ListBrandRegistrationsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_BRAND_REGISTRATIONS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBrandRegistrationsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBrandRegistrations200ApplicationJSONListBrandRegistrationsResponse])
                res.responses[r.status_code][content_type] = operations.ListBrandRegistrationsResponses(list_brand_registrations_response=out)

        return res

    
    def list_brand_vetting(self, request: operations.ListBrandVettingRequest) -> operations.ListBrandVettingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_BRAND_VETTING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/a2p/BrandRegistrations/{BrandSid}/Vettings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBrandVettingResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBrandVetting200ApplicationJSONListBrandVettingResponse])
                res.responses[r.status_code][content_type] = operations.ListBrandVettingResponses(list_brand_vetting_response=out)

        return res

    
    def list_phone_number(self, request: operations.ListPhoneNumberRequest) -> operations.ListPhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/PhoneNumbers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPhoneNumberResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPhoneNumber200ApplicationJSONListPhoneNumberResponse])
                res.responses[r.status_code][content_type] = operations.ListPhoneNumberResponses(list_phone_number_response=out)

        return res

    
    def list_service(self, request: operations.ListServiceRequest) -> operations.ListServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListService200ApplicationJSONListServiceResponse])
                res.responses[r.status_code][content_type] = operations.ListServiceResponses(list_service_response=out)

        return res

    
    def list_short_code(self, request: operations.ListShortCodeRequest) -> operations.ListShortCodeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SHORT_CODE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/ShortCodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListShortCodeResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListShortCode200ApplicationJSONListShortCodeResponse])
                res.responses[r.status_code][content_type] = operations.ListShortCodeResponses(list_short_code_response=out)

        return res

    
    def list_us_app_to_person(self, request: operations.ListUsAppToPersonRequest) -> operations.ListUsAppToPersonResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_US_APP_TO_PERSON_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsAppToPersonResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsAppToPerson200ApplicationJSONListUsAppToPersonResponse])
                res.responses[r.status_code][content_type] = operations.ListUsAppToPersonResponses(list_us_app_to_person_response=out)

        return res

    
    def update_brand_registrations(self, request: operations.UpdateBrandRegistrationsRequest) -> operations.UpdateBrandRegistrationsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_BRAND_REGISTRATIONS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/a2p/BrandRegistrations/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBrandRegistrationsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1BrandRegistrations])
                res.responses[r.status_code][content_type] = operations.UpdateBrandRegistrationsResponses(messaging_v1_brand_registrations=out)

        return res

    
    def update_service(self, request: operations.UpdateServiceRequest) -> operations.UpdateServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagingV1Service])
                res.responses[r.status_code][content_type] = operations.UpdateServiceResponses(messaging_v1_service=out)

        return res

    