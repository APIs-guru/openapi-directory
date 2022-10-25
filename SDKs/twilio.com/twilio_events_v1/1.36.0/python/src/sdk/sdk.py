import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://events.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def create_sink(self, request: operations.CreateSinkRequest) -> operations.CreateSinkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SINK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Sinks"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1Sink])
                res.events_v1_sink = out

        return res

    
    
    def create_sink_test(self, request: operations.CreateSinkTestRequest) -> operations.CreateSinkTestResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SINK_TEST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sinks/{Sid}/Test", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSinkTestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1SinkSinkTest])
                res.events_v1_sink_sink_test = out

        return res

    
    
    def create_sink_validate(self, request: operations.CreateSinkValidateRequest) -> operations.CreateSinkValidateResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SINK_VALIDATE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sinks/{Sid}/Validate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSinkValidateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1SinkSinkValidate])
                res.events_v1_sink_sink_validate = out

        return res

    
    
    def create_subscribed_event(self, request: operations.CreateSubscribedEventRequest) -> operations.CreateSubscribedEventResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SUBSCRIBED_EVENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSubscribedEventResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1SubscriptionSubscribedEvent])
                res.events_v1_subscription_subscribed_event = out

        return res

    
    
    def create_subscription(self, request: operations.CreateSubscriptionRequest) -> operations.CreateSubscriptionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SUBSCRIPTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Subscriptions"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1Subscription])
                res.events_v1_subscription = out

        return res

    
    
    def delete_sink(self, request: operations.DeleteSinkRequest) -> operations.DeleteSinkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SINK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sinks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_subscribed_event(self, request: operations.DeleteSubscribedEventRequest) -> operations.DeleteSubscribedEventResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SUBSCRIBED_EVENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSubscribedEventResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_subscription(self, request: operations.DeleteSubscriptionRequest) -> operations.DeleteSubscriptionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SUBSCRIPTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Subscriptions/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def fetch_event_type(self, request: operations.FetchEventTypeRequest) -> operations.FetchEventTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_EVENT_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Types/{Type}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEventTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1EventType])
                res.events_v1_event_type = out

        return res

    
    
    def fetch_schema(self, request: operations.FetchSchemaRequest) -> operations.FetchSchemaResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SCHEMA_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Schemas/{Id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSchemaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1Schema])
                res.events_v1_schema = out

        return res

    
    
    def fetch_schema_version(self, request: operations.FetchSchemaVersionRequest) -> operations.FetchSchemaVersionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SCHEMA_VERSION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Schemas/{Id}/Versions/{SchemaVersion}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSchemaVersionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1SchemaSchemaVersion])
                res.events_v1_schema_schema_version = out

        return res

    
    
    def fetch_sink(self, request: operations.FetchSinkRequest) -> operations.FetchSinkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SINK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sinks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1Sink])
                res.events_v1_sink = out

        return res

    
    
    def fetch_subscribed_event(self, request: operations.FetchSubscribedEventRequest) -> operations.FetchSubscribedEventResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SUBSCRIBED_EVENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSubscribedEventResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1SubscriptionSubscribedEvent])
                res.events_v1_subscription_subscribed_event = out

        return res

    
    
    def fetch_subscription(self, request: operations.FetchSubscriptionRequest) -> operations.FetchSubscriptionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SUBSCRIPTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Subscriptions/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1Subscription])
                res.events_v1_subscription = out

        return res

    
    
    def list_event_type(self, request: operations.ListEventTypeRequest) -> operations.ListEventTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_EVENT_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Types"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEventTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEventTypeListEventTypeResponse])
                res.list_event_type_response = out

        return res

    
    
    def list_schema_version(self, request: operations.ListSchemaVersionRequest) -> operations.ListSchemaVersionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SCHEMA_VERSION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Schemas/{Id}/Versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSchemaVersionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSchemaVersionListSchemaVersionResponse])
                res.list_schema_version_response = out

        return res

    
    
    def list_sink(self, request: operations.ListSinkRequest) -> operations.ListSinkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SINK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Sinks"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSinkListSinkResponse])
                res.list_sink_response = out

        return res

    
    
    def list_subscribed_event(self, request: operations.ListSubscribedEventRequest) -> operations.ListSubscribedEventResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SUBSCRIBED_EVENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSubscribedEventResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSubscribedEventListSubscribedEventResponse])
                res.list_subscribed_event_response = out

        return res

    
    
    def list_subscription(self, request: operations.ListSubscriptionRequest) -> operations.ListSubscriptionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SUBSCRIPTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSubscriptionListSubscriptionResponse])
                res.list_subscription_response = out

        return res

    
    
    def update_sink(self, request: operations.UpdateSinkRequest) -> operations.UpdateSinkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SINK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sinks/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1Sink])
                res.events_v1_sink = out

        return res

    
    
    def update_subscribed_event(self, request: operations.UpdateSubscribedEventRequest) -> operations.UpdateSubscribedEventResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SUBSCRIBED_EVENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSubscribedEventResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1SubscriptionSubscribedEvent])
                res.events_v1_subscription_subscribed_event = out

        return res

    
    
    def update_subscription(self, request: operations.UpdateSubscriptionRequest) -> operations.UpdateSubscriptionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SUBSCRIPTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Subscriptions/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsV1Subscription])
                res.events_v1_subscription = out

        return res

    