import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Uninstallation:
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

    
    def delete_installation(self, request: operations.DeleteInstallationRequest) -> operations.DeleteInstallationResponse:
        r"""アプリストアアプリのアンインストール
        このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
        このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
        代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。
        
        アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/appstore/v1/installation.json"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteInstallation200ApplicationJSON])
                res.delete_installation_200_application_json_object = out

        return res

    