import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ApplicationCharge:
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

    
    def create_usage_charge(self, request: operations.CreateUsageChargeRequest) -> operations.CreateUsageChargeResponse:
        r"""従量課金データの作成
        アプリ内で基本機能が利用された頻度に伴って毎月の請求が変動するようなアプリの場合は「従量課金」を使って利用者に変動分の請求を行うことができます。
        ※無料お試し期間中のショップに対しては従量課金データを作成できません。
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/appstore/v1/recurring_application_charges/{recurringApplicationChargeId}/usage_charges.json", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUsageChargeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateUsageCharge201ApplicationJSON])
                res.create_usage_charge_201_application_json_object = out

        return res

    
    def post_application_charge(self, request: operations.PostApplicationChargeRequest) -> operations.PostApplicationChargeResponse:
        r"""アプリ内課金データの作成
        「アプリ内課金」はすでにインストール済みのアプリ上において、利用者が追加の買い切りによる課金によって新たなアプリ内の機能を提供される場合などに、利用者へ買い切りの課金分の請求を行うための課金形式です。
        
        この課金はプラン課金の情報に紐付かないため、リクエストされたタイミングで課金データが作成されます。また、同一のアプリ内課金IDで同じ利用者へ複数回請求を行うことも可能です。
        
        ただし、アプリの基本機能として提供しているサービスを利用した量やその頻度などに伴って毎月異なった額の請求を行うような課金については、プラン課金の「従量による課金」の機能を使って請求を行う必要があります。
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/appstore/v1/application_charges.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostApplicationChargeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostApplicationCharge201ApplicationJSON])
                res.post_application_charge_201_application_json_object = out

        return res

    