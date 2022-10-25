import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://verify.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def create_access_token(self, request: operations.CreateAccessTokenRequest) -> operations.CreateAccessTokenResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ACCESS_TOKEN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/AccessTokens", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceAccessToken])
                res.verify_v2_service_access_token = out

        return res

    
    
    def create_bucket(self, request: operations.CreateBucketRequest) -> operations.CreateBucketResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_BUCKET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBucketResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimitBucket])
                res.verify_v2_service_rate_limit_bucket = out

        return res

    
    
    def create_challenge(self, request: operations.CreateChallengeRequest) -> operations.CreateChallengeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CHALLENGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateChallengeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityChallenge])
                res.verify_v2_service_entity_challenge = out

        return res

    
    
    def create_entity(self, request: operations.CreateEntityRequest) -> operations.CreateEntityResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ENTITY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEntityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntity])
                res.verify_v2_service_entity = out

        return res

    
    
    def create_messaging_configuration(self, request: operations.CreateMessagingConfigurationRequest) -> operations.CreateMessagingConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_MESSAGING_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceMessagingConfiguration])
                res.verify_v2_service_messaging_configuration = out

        return res

    
    
    def create_new_factor(self, request: operations.CreateNewFactorRequest) -> operations.CreateNewFactorResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_NEW_FACTOR_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNewFactorResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityNewFactor])
                res.verify_v2_service_entity_new_factor = out

        return res

    
    
    def create_notification(self, request: operations.CreateNotificationRequest) -> operations.CreateNotificationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_NOTIFICATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNotificationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityChallengeNotification])
                res.verify_v2_service_entity_challenge_notification = out

        return res

    
    
    def create_rate_limit(self, request: operations.CreateRateLimitRequest) -> operations.CreateRateLimitResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_RATE_LIMIT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRateLimitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimit])
                res.verify_v2_service_rate_limit = out

        return res

    
    
    def create_safelist(self, request: operations.CreateSafelistRequest) -> operations.CreateSafelistResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SAFELIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/SafeList/Numbers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSafelistResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Safelist])
                res.verify_v2_safelist = out

        return res

    
    
    def create_service(self, request: operations.CreateServiceRequest) -> operations.CreateServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Services"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Service])
                res.verify_v2_service = out

        return res

    
    
    def create_verification(self, request: operations.CreateVerificationRequest) -> operations.CreateVerificationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_VERIFICATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Verifications", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVerificationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceVerification])
                res.verify_v2_service_verification = out

        return res

    
    
    def create_verification_check(self, request: operations.CreateVerificationCheckRequest) -> operations.CreateVerificationCheckResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_VERIFICATION_CHECK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/VerificationCheck", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVerificationCheckResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceVerificationCheck])
                res.verify_v2_service_verification_check = out

        return res

    
    
    def create_webhook(self, request: operations.CreateWebhookRequest) -> operations.CreateWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWebhookResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceWebhook])
                res.verify_v2_service_webhook = out

        return res

    
    
    def delete_bucket(self, request: operations.DeleteBucketRequest) -> operations.DeleteBucketResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_BUCKET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBucketResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_entity(self, request: operations.DeleteEntityRequest) -> operations.DeleteEntityResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_ENTITY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEntityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_factor(self, request: operations.DeleteFactorRequest) -> operations.DeleteFactorResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FACTOR_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFactorResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_messaging_configuration(self, request: operations.DeleteMessagingConfigurationRequest) -> operations.DeleteMessagingConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_MESSAGING_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_rate_limit(self, request: operations.DeleteRateLimitRequest) -> operations.DeleteRateLimitResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_RATE_LIMIT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRateLimitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_safelist(self, request: operations.DeleteSafelistRequest) -> operations.DeleteSafelistResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SAFELIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/SafeList/Numbers/{PhoneNumber}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSafelistResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_service(self, request: operations.DeleteServiceRequest) -> operations.DeleteServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_webhook(self, request: operations.DeleteWebhookRequest) -> operations.DeleteWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhookResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def fetch_access_token(self, request: operations.FetchAccessTokenRequest) -> operations.FetchAccessTokenResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ACCESS_TOKEN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/AccessTokens/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceAccessToken])
                res.verify_v2_service_access_token = out

        return res

    
    
    def fetch_bucket(self, request: operations.FetchBucketRequest) -> operations.FetchBucketResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_BUCKET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchBucketResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimitBucket])
                res.verify_v2_service_rate_limit_bucket = out

        return res

    
    
    def fetch_challenge(self, request: operations.FetchChallengeRequest) -> operations.FetchChallengeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CHALLENGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchChallengeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityChallenge])
                res.verify_v2_service_entity_challenge = out

        return res

    
    
    def fetch_entity(self, request: operations.FetchEntityRequest) -> operations.FetchEntityResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ENTITY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEntityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntity])
                res.verify_v2_service_entity = out

        return res

    
    
    def fetch_factor(self, request: operations.FetchFactorRequest) -> operations.FetchFactorResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FACTOR_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFactorResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityFactor])
                res.verify_v2_service_entity_factor = out

        return res

    
    
    def fetch_form(self, request: operations.FetchFormRequest) -> operations.FetchFormResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FORM_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Forms/{FormType}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFormResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Form])
                res.verify_v2_form = out

        return res

    
    
    def fetch_messaging_configuration(self, request: operations.FetchMessagingConfigurationRequest) -> operations.FetchMessagingConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_MESSAGING_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceMessagingConfiguration])
                res.verify_v2_service_messaging_configuration = out

        return res

    
    
    def fetch_rate_limit(self, request: operations.FetchRateLimitRequest) -> operations.FetchRateLimitResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_RATE_LIMIT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRateLimitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimit])
                res.verify_v2_service_rate_limit = out

        return res

    
    
    def fetch_safelist(self, request: operations.FetchSafelistRequest) -> operations.FetchSafelistResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SAFELIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/SafeList/Numbers/{PhoneNumber}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSafelistResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Safelist])
                res.verify_v2_safelist = out

        return res

    
    
    def fetch_service(self, request: operations.FetchServiceRequest) -> operations.FetchServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Service])
                res.verify_v2_service = out

        return res

    
    
    def fetch_verification(self, request: operations.FetchVerificationRequest) -> operations.FetchVerificationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_VERIFICATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Verifications/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVerificationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceVerification])
                res.verify_v2_service_verification = out

        return res

    
    
    def fetch_verification_attempt(self, request: operations.FetchVerificationAttemptRequest) -> operations.FetchVerificationAttemptResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_VERIFICATION_ATTEMPT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Attempts/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVerificationAttemptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2VerificationAttempt])
                res.verify_v2_verification_attempt = out

        return res

    
    
    def fetch_verification_attempts_summary(self, request: operations.FetchVerificationAttemptsSummaryRequest) -> operations.FetchVerificationAttemptsSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_VERIFICATION_ATTEMPTS_SUMMARY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Attempts/Summary"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVerificationAttemptsSummaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2VerificationAttemptsSummary])
                res.verify_v2_verification_attempts_summary = out

        return res

    
    
    def fetch_webhook(self, request: operations.FetchWebhookRequest) -> operations.FetchWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWebhookResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceWebhook])
                res.verify_v2_service_webhook = out

        return res

    
    
    def list_bucket(self, request: operations.ListBucketRequest) -> operations.ListBucketResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_BUCKET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBucketResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBucketListBucketResponse])
                res.list_bucket_response = out

        return res

    
    
    def list_challenge(self, request: operations.ListChallengeRequest) -> operations.ListChallengeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CHALLENGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListChallengeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListChallengeListChallengeResponse])
                res.list_challenge_response = out

        return res

    
    
    def list_entity(self, request: operations.ListEntityRequest) -> operations.ListEntityResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ENTITY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEntityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEntityListEntityResponse])
                res.list_entity_response = out

        return res

    
    
    def list_factor(self, request: operations.ListFactorRequest) -> operations.ListFactorResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FACTOR_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFactorResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFactorListFactorResponse])
                res.list_factor_response = out

        return res

    
    
    def list_messaging_configuration(self, request: operations.ListMessagingConfigurationRequest) -> operations.ListMessagingConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_MESSAGING_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMessagingConfigurationListMessagingConfigurationResponse])
                res.list_messaging_configuration_response = out

        return res

    
    
    def list_rate_limit(self, request: operations.ListRateLimitRequest) -> operations.ListRateLimitResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_RATE_LIMIT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRateLimitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRateLimitListRateLimitResponse])
                res.list_rate_limit_response = out

        return res

    
    
    def list_service(self, request: operations.ListServiceRequest) -> operations.ListServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Services"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceListServiceResponse])
                res.list_service_response = out

        return res

    
    
    def list_verification_attempt(self, request: operations.ListVerificationAttemptRequest) -> operations.ListVerificationAttemptResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_VERIFICATION_ATTEMPT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Attempts"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVerificationAttemptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVerificationAttemptListVerificationAttemptResponse])
                res.list_verification_attempt_response = out

        return res

    
    
    def list_verification_template(self, request: operations.ListVerificationTemplateRequest) -> operations.ListVerificationTemplateResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_VERIFICATION_TEMPLATE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Templates"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVerificationTemplateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVerificationTemplateListVerificationTemplateResponse])
                res.list_verification_template_response = out

        return res

    
    
    def list_webhook(self, request: operations.ListWebhookRequest) -> operations.ListWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWebhookResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWebhookListWebhookResponse])
                res.list_webhook_response = out

        return res

    
    
    def update_bucket(self, request: operations.UpdateBucketRequest) -> operations.UpdateBucketResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_BUCKET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBucketResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimitBucket])
                res.verify_v2_service_rate_limit_bucket = out

        return res

    
    
    def update_challenge(self, request: operations.UpdateChallengeRequest) -> operations.UpdateChallengeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CHALLENGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateChallengeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityChallenge])
                res.verify_v2_service_entity_challenge = out

        return res

    
    
    def update_factor(self, request: operations.UpdateFactorRequest) -> operations.UpdateFactorResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_FACTOR_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFactorResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityFactor])
                res.verify_v2_service_entity_factor = out

        return res

    
    
    def update_messaging_configuration(self, request: operations.UpdateMessagingConfigurationRequest) -> operations.UpdateMessagingConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_MESSAGING_CONFIGURATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceMessagingConfiguration])
                res.verify_v2_service_messaging_configuration = out

        return res

    
    
    def update_rate_limit(self, request: operations.UpdateRateLimitRequest) -> operations.UpdateRateLimitResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_RATE_LIMIT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRateLimitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimit])
                res.verify_v2_service_rate_limit = out

        return res

    
    
    def update_service(self, request: operations.UpdateServiceRequest) -> operations.UpdateServiceResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SERVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Service])
                res.verify_v2_service = out

        return res

    
    
    def update_verification(self, request: operations.UpdateVerificationRequest) -> operations.UpdateVerificationResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_VERIFICATION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Verifications/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateVerificationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceVerification])
                res.verify_v2_service_verification = out

        return res

    
    
    def update_webhook(self, request: operations.UpdateWebhookRequest) -> operations.UpdateWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWebhookResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceWebhook])
                res.verify_v2_service_webhook = out

        return res

    