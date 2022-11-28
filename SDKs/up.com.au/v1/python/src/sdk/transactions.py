import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Transactions:
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

    
    def get_accounts_account_id_transactions(self, request: operations.GetAccountsAccountIDTransactionsRequest) -> operations.GetAccountsAccountIDTransactionsResponse:
        r"""List transactions by account
        Retrieve a list of all transactions for a specific account. The returned
        list is [paginated](#pagination) and can be scrolled by following the
        `next` and `prev` links where present. To narrow the results to a
        specific date range pass one or both of `filter[since]` and
        `filter[until]` in the query string. These filter parameters
        **should not** be used for pagination. Results are ordered newest first
        to oldest last.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/transactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountIDTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTransactionsResponse])
                res.list_transactions_response = out

        return res

    
    def get_transactions(self, request: operations.GetTransactionsRequest) -> operations.GetTransactionsResponse:
        r"""List transactions
        Retrieve a list of all transactions across all accounts for the currently
        authenticated user. The returned list is [paginated](#pagination) and can
        be scrolled by following the `next` and `prev` links where present. To
        narrow the results to a specific date range pass one or both of
        `filter[since]` and `filter[until]` in the query string. These filter
        parameters **should not** be used for pagination. Results are ordered
        newest first to oldest last.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/transactions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTransactionsResponse])
                res.list_transactions_response = out

        return res

    
    def get_transactions_id_(self, request: operations.GetTransactionsIDRequest) -> operations.GetTransactionsIDResponse:
        r"""Retrieve transaction
        Retrieve a specific transaction by providing its unique identifier.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transactions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTransactionResponse])
                res.get_transaction_response = out

        return res

    