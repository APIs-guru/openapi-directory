import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Tags:
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

    
    def delete_transactions_transaction_id_relationships_tags(self, request: operations.DeleteTransactionsTransactionIDRelationshipsTagsRequest) -> operations.DeleteTransactionsTransactionIDRelationshipsTagsResponse:
        r"""Remove tags from transaction
        Disassociates one or more tags from a specific transaction. Tags that are
        not associated are silently ignored. An HTTP `204` is returned on
        success. The associated tags, along with this request URL, are also
        exposed via the `tags` relationship on the transaction resource returned
        from `/transactions/{id}`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transactions/{transactionId}/relationships/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTransactionsTransactionIDRelationshipsTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_tags(self, request: operations.GetTagsRequest) -> operations.GetTagsResponse:
        r"""List tags
        Retrieve a list of all tags currently in use. The returned list is
        [paginated](#pagination) and can be scrolled by following the `next`
        and `prev` links where present. Results are ordered lexicographically.
        The `transactions` relationship for each tag exposes a link
        to get the transactions with the given tag.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagsResponse])
                res.list_tags_response = out

        return res

    
    def post_transactions_transaction_id_relationships_tags(self, request: operations.PostTransactionsTransactionIDRelationshipsTagsRequest) -> operations.PostTransactionsTransactionIDRelationshipsTagsResponse:
        r"""Add tags to transaction
        Associates one or more tags with a specific transaction. No more than 6
        tags may be present on any single transaction. Duplicate tags are
        silently ignored. An HTTP `204` is returned on success. The associated
        tags, along with this request URL, are also exposed via the `tags`
        relationship on the transaction resource returned from
        `/transactions/{id}`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transactions/{transactionId}/relationships/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTransactionsTransactionIDRelationshipsTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    