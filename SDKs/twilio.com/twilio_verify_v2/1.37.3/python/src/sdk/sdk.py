

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://verify.twilio.com",
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
        
    
    
    
    def create_access_token(self, request: operations.CreateAccessTokenRequest) -> operations.CreateAccessTokenResponse:
        r"""Create a new enrollment Access Token for the Entity
        """
        
        base_url = operations.CREATE_ACCESS_TOKEN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/AccessTokens", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceAccessToken])
                res.verify_v2_service_access_token = out

        return res

    
    def create_bucket(self, request: operations.CreateBucketRequest) -> operations.CreateBucketResponse:
        r"""Create a new Bucket for a Rate Limit
        """
        
        base_url = operations.CREATE_BUCKET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBucketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimitBucket])
                res.verify_v2_service_rate_limit_bucket = out

        return res

    
    def create_challenge(self, request: operations.CreateChallengeRequest) -> operations.CreateChallengeResponse:
        r"""Create a new Challenge for the Factor
        """
        
        base_url = operations.CREATE_CHALLENGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateChallengeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityChallenge])
                res.verify_v2_service_entity_challenge = out

        return res

    
    def create_entity(self, request: operations.CreateEntityRequest) -> operations.CreateEntityResponse:
        r"""Create a new Entity for the Service
        """
        
        base_url = operations.CREATE_ENTITY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntity])
                res.verify_v2_service_entity = out

        return res

    
    def create_messaging_configuration(self, request: operations.CreateMessagingConfigurationRequest) -> operations.CreateMessagingConfigurationResponse:
        r"""Create a new MessagingConfiguration for a service.
        """
        
        base_url = operations.CREATE_MESSAGING_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceMessagingConfiguration])
                res.verify_v2_service_messaging_configuration = out

        return res

    
    def create_new_factor(self, request: operations.CreateNewFactorRequest) -> operations.CreateNewFactorResponse:
        r"""Create a new Factor for the Entity
        """
        
        base_url = operations.CREATE_NEW_FACTOR_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNewFactorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityNewFactor])
                res.verify_v2_service_entity_new_factor = out

        return res

    
    def create_notification(self, request: operations.CreateNotificationRequest) -> operations.CreateNotificationResponse:
        r"""Create a new Notification for the corresponding Challenge
        """
        
        base_url = operations.CREATE_NOTIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityChallengeNotification])
                res.verify_v2_service_entity_challenge_notification = out

        return res

    
    def create_rate_limit(self, request: operations.CreateRateLimitRequest) -> operations.CreateRateLimitResponse:
        r"""Create a new Rate Limit for a Service
        """
        
        base_url = operations.CREATE_RATE_LIMIT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRateLimitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimit])
                res.verify_v2_service_rate_limit = out

        return res

    
    def create_safelist(self, request: operations.CreateSafelistRequest) -> operations.CreateSafelistResponse:
        r"""Add a new phone number to SafeList.
        """
        
        base_url = operations.CREATE_SAFELIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v2/SafeList/Numbers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSafelistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Safelist])
                res.verify_v2_safelist = out

        return res

    
    def create_service(self, request: operations.CreateServiceRequest) -> operations.CreateServiceResponse:
        r"""Create a new Verification Service.
        """
        
        base_url = operations.CREATE_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v2/Services"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Service])
                res.verify_v2_service = out

        return res

    
    def create_verification(self, request: operations.CreateVerificationRequest) -> operations.CreateVerificationResponse:
        r"""Create a new Verification using a Service
        """
        
        base_url = operations.CREATE_VERIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Verifications", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVerificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceVerification])
                res.verify_v2_service_verification = out

        return res

    
    def create_verification_check(self, request: operations.CreateVerificationCheckRequest) -> operations.CreateVerificationCheckResponse:
        r"""challenge a specific Verification Check.
        """
        
        base_url = operations.CREATE_VERIFICATION_CHECK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/VerificationCheck", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVerificationCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceVerificationCheck])
                res.verify_v2_service_verification_check = out

        return res

    
    def create_webhook(self, request: operations.CreateWebhookRequest) -> operations.CreateWebhookResponse:
        r"""Create a new Webhook for the Service
        """
        
        base_url = operations.CREATE_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceWebhook])
                res.verify_v2_service_webhook = out

        return res

    
    def delete_bucket(self, request: operations.DeleteBucketRequest) -> operations.DeleteBucketResponse:
        r"""Delete a specific Bucket.
        """
        
        base_url = operations.DELETE_BUCKET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBucketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_entity(self, request: operations.DeleteEntityRequest) -> operations.DeleteEntityResponse:
        r"""Delete a specific Entity.
        """
        
        base_url = operations.DELETE_ENTITY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_factor(self, request: operations.DeleteFactorRequest) -> operations.DeleteFactorResponse:
        r"""Delete a specific Factor.
        """
        
        base_url = operations.DELETE_FACTOR_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFactorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_messaging_configuration(self, request: operations.DeleteMessagingConfigurationRequest) -> operations.DeleteMessagingConfigurationResponse:
        r"""Delete a specific MessagingConfiguration.
        """
        
        base_url = operations.DELETE_MESSAGING_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_rate_limit(self, request: operations.DeleteRateLimitRequest) -> operations.DeleteRateLimitResponse:
        r"""Delete a specific Rate Limit.
        """
        
        base_url = operations.DELETE_RATE_LIMIT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRateLimitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_safelist(self, request: operations.DeleteSafelistRequest) -> operations.DeleteSafelistResponse:
        r"""Remove a phone number from SafeList.
        """
        
        base_url = operations.DELETE_SAFELIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/SafeList/Numbers/{PhoneNumber}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSafelistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service(self, request: operations.DeleteServiceRequest) -> operations.DeleteServiceResponse:
        r"""Delete a specific Verification Service Instance.
        """
        
        base_url = operations.DELETE_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_webhook(self, request: operations.DeleteWebhookRequest) -> operations.DeleteWebhookResponse:
        r"""Delete a specific Webhook.
        """
        
        base_url = operations.DELETE_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_access_token(self, request: operations.FetchAccessTokenRequest) -> operations.FetchAccessTokenResponse:
        r"""Fetch an Access Token for the Entity
        """
        
        base_url = operations.FETCH_ACCESS_TOKEN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/AccessTokens/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceAccessToken])
                res.verify_v2_service_access_token = out

        return res

    
    def fetch_bucket(self, request: operations.FetchBucketRequest) -> operations.FetchBucketResponse:
        r"""Fetch a specific Bucket.
        """
        
        base_url = operations.FETCH_BUCKET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchBucketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimitBucket])
                res.verify_v2_service_rate_limit_bucket = out

        return res

    
    def fetch_challenge(self, request: operations.FetchChallengeRequest) -> operations.FetchChallengeResponse:
        r"""Fetch a specific Challenge.
        """
        
        base_url = operations.FETCH_CHALLENGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchChallengeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityChallenge])
                res.verify_v2_service_entity_challenge = out

        return res

    
    def fetch_entity(self, request: operations.FetchEntityRequest) -> operations.FetchEntityResponse:
        r"""Fetch a specific Entity.
        """
        
        base_url = operations.FETCH_ENTITY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntity])
                res.verify_v2_service_entity = out

        return res

    
    def fetch_factor(self, request: operations.FetchFactorRequest) -> operations.FetchFactorResponse:
        r"""Fetch a specific Factor.
        """
        
        base_url = operations.FETCH_FACTOR_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFactorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityFactor])
                res.verify_v2_service_entity_factor = out

        return res

    
    def fetch_form(self, request: operations.FetchFormRequest) -> operations.FetchFormResponse:
        r"""Fetch the forms for a specific Form Type.
        """
        
        base_url = operations.FETCH_FORM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Forms/{FormType}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFormResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Form])
                res.verify_v2_form = out

        return res

    
    def fetch_messaging_configuration(self, request: operations.FetchMessagingConfigurationRequest) -> operations.FetchMessagingConfigurationResponse:
        r"""Fetch a specific MessagingConfiguration.
        """
        
        base_url = operations.FETCH_MESSAGING_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceMessagingConfiguration])
                res.verify_v2_service_messaging_configuration = out

        return res

    
    def fetch_rate_limit(self, request: operations.FetchRateLimitRequest) -> operations.FetchRateLimitResponse:
        r"""Fetch a specific Rate Limit.
        """
        
        base_url = operations.FETCH_RATE_LIMIT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRateLimitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimit])
                res.verify_v2_service_rate_limit = out

        return res

    
    def fetch_safelist(self, request: operations.FetchSafelistRequest) -> operations.FetchSafelistResponse:
        r"""Check if a phone number exists in SafeList.
        """
        
        base_url = operations.FETCH_SAFELIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/SafeList/Numbers/{PhoneNumber}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSafelistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Safelist])
                res.verify_v2_safelist = out

        return res

    
    def fetch_service(self, request: operations.FetchServiceRequest) -> operations.FetchServiceResponse:
        r"""Fetch specific Verification Service Instance.
        """
        
        base_url = operations.FETCH_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Service])
                res.verify_v2_service = out

        return res

    
    def fetch_verification(self, request: operations.FetchVerificationRequest) -> operations.FetchVerificationResponse:
        r"""Fetch a specific Verification
        """
        
        base_url = operations.FETCH_VERIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Verifications/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVerificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceVerification])
                res.verify_v2_service_verification = out

        return res

    
    def fetch_verification_attempt(self, request: operations.FetchVerificationAttemptRequest) -> operations.FetchVerificationAttemptResponse:
        r"""Fetch a specific verification attempt.
        """
        
        base_url = operations.FETCH_VERIFICATION_ATTEMPT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Attempts/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVerificationAttemptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2VerificationAttempt])
                res.verify_v2_verification_attempt = out

        return res

    
    def fetch_verification_attempts_summary(self, request: operations.FetchVerificationAttemptsSummaryRequest) -> operations.FetchVerificationAttemptsSummaryResponse:
        r"""Get a summary of how many attempts were made and how many were converted.
        """
        
        base_url = operations.FETCH_VERIFICATION_ATTEMPTS_SUMMARY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v2/Attempts/Summary"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVerificationAttemptsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2VerificationAttemptsSummary])
                res.verify_v2_verification_attempts_summary = out

        return res

    
    def fetch_webhook(self, request: operations.FetchWebhookRequest) -> operations.FetchWebhookResponse:
        r"""Fetch a specific Webhook.
        """
        
        base_url = operations.FETCH_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceWebhook])
                res.verify_v2_service_webhook = out

        return res

    
    def list_bucket(self, request: operations.ListBucketRequest) -> operations.ListBucketResponse:
        r"""Retrieve a list of all Buckets for a Rate Limit.
        """
        
        base_url = operations.LIST_BUCKET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBucketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBucketListBucketResponse])
                res.list_bucket_response = out

        return res

    
    def list_challenge(self, request: operations.ListChallengeRequest) -> operations.ListChallengeResponse:
        r"""Retrieve a list of all Challenges for a Factor.
        """
        
        base_url = operations.LIST_CHALLENGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListChallengeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListChallengeListChallengeResponse])
                res.list_challenge_response = out

        return res

    
    def list_entity(self, request: operations.ListEntityRequest) -> operations.ListEntityResponse:
        r"""Retrieve a list of all Entities for a Service.
        """
        
        base_url = operations.LIST_ENTITY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEntityListEntityResponse])
                res.list_entity_response = out

        return res

    
    def list_factor(self, request: operations.ListFactorRequest) -> operations.ListFactorResponse:
        r"""Retrieve a list of all Factors for an Entity.
        """
        
        base_url = operations.LIST_FACTOR_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFactorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFactorListFactorResponse])
                res.list_factor_response = out

        return res

    
    def list_messaging_configuration(self, request: operations.ListMessagingConfigurationRequest) -> operations.ListMessagingConfigurationResponse:
        r"""Retrieve a list of all Messaging Configurations for a Service.
        """
        
        base_url = operations.LIST_MESSAGING_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMessagingConfigurationListMessagingConfigurationResponse])
                res.list_messaging_configuration_response = out

        return res

    
    def list_rate_limit(self, request: operations.ListRateLimitRequest) -> operations.ListRateLimitResponse:
        r"""Retrieve a list of all Rate Limits for a service.
        """
        
        base_url = operations.LIST_RATE_LIMIT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRateLimitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRateLimitListRateLimitResponse])
                res.list_rate_limit_response = out

        return res

    
    def list_service(self, request: operations.ListServiceRequest) -> operations.ListServiceResponse:
        r"""Retrieve a list of all Verification Services for an account.
        """
        
        base_url = operations.LIST_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v2/Services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceListServiceResponse])
                res.list_service_response = out

        return res

    
    def list_verification_attempt(self, request: operations.ListVerificationAttemptRequest) -> operations.ListVerificationAttemptResponse:
        r"""List all the verification attempts for a given Account.
        """
        
        base_url = operations.LIST_VERIFICATION_ATTEMPT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v2/Attempts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVerificationAttemptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVerificationAttemptListVerificationAttemptResponse])
                res.list_verification_attempt_response = out

        return res

    
    def list_verification_template(self, request: operations.ListVerificationTemplateRequest) -> operations.ListVerificationTemplateResponse:
        r"""List all the available templates for a given Account.
        """
        
        base_url = operations.LIST_VERIFICATION_TEMPLATE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v2/Templates"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVerificationTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVerificationTemplateListVerificationTemplateResponse])
                res.list_verification_template_response = out

        return res

    
    def list_webhook(self, request: operations.ListWebhookRequest) -> operations.ListWebhookResponse:
        r"""Retrieve a list of all Webhooks for a Service.
        """
        
        base_url = operations.LIST_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWebhookListWebhookResponse])
                res.list_webhook_response = out

        return res

    
    def update_bucket(self, request: operations.UpdateBucketRequest) -> operations.UpdateBucketResponse:
        r"""Update a specific Bucket.
        """
        
        base_url = operations.UPDATE_BUCKET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBucketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimitBucket])
                res.verify_v2_service_rate_limit_bucket = out

        return res

    
    def update_challenge(self, request: operations.UpdateChallengeRequest) -> operations.UpdateChallengeResponse:
        r"""Verify a specific Challenge.
        """
        
        base_url = operations.UPDATE_CHALLENGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateChallengeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityChallenge])
                res.verify_v2_service_entity_challenge = out

        return res

    
    def update_factor(self, request: operations.UpdateFactorRequest) -> operations.UpdateFactorResponse:
        r"""Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
        """
        
        base_url = operations.UPDATE_FACTOR_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFactorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceEntityFactor])
                res.verify_v2_service_entity_factor = out

        return res

    
    def update_messaging_configuration(self, request: operations.UpdateMessagingConfigurationRequest) -> operations.UpdateMessagingConfigurationResponse:
        r"""Update a specific MessagingConfiguration
        """
        
        base_url = operations.UPDATE_MESSAGING_CONFIGURATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMessagingConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceMessagingConfiguration])
                res.verify_v2_service_messaging_configuration = out

        return res

    
    def update_rate_limit(self, request: operations.UpdateRateLimitRequest) -> operations.UpdateRateLimitResponse:
        r"""Update a specific Rate Limit.
        """
        
        base_url = operations.UPDATE_RATE_LIMIT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRateLimitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceRateLimit])
                res.verify_v2_service_rate_limit = out

        return res

    
    def update_service(self, request: operations.UpdateServiceRequest) -> operations.UpdateServiceResponse:
        r"""Update a specific Verification Service.
        """
        
        base_url = operations.UPDATE_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2Service])
                res.verify_v2_service = out

        return res

    
    def update_verification(self, request: operations.UpdateVerificationRequest) -> operations.UpdateVerificationResponse:
        r"""Update a Verification status
        """
        
        base_url = operations.UPDATE_VERIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Verifications/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateVerificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceVerification])
                res.verify_v2_service_verification = out

        return res

    
    def update_webhook(self, request: operations.UpdateWebhookRequest) -> operations.UpdateWebhookResponse:
        base_url = operations.UPDATE_WEBHOOK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyV2ServiceWebhook])
                res.verify_v2_service_webhook = out

        return res

    