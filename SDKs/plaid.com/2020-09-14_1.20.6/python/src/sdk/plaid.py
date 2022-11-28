import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Plaid:
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

    
    def accounts_balance_get(self, request: operations.AccountsBalanceGetRequest) -> operations.AccountsBalanceGetResponse:
        r"""Retrieve real-time balance data
        The `/accounts/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints may return a balance object, only `/accounts/balance/get` forces the available and current balance fields to be refreshed rather than cached. This endpoint can be used for existing Items that were added via any of Plaid’s other products. This endpoint can be used as long as Link has been initialized with any other product, `balance` itself is not a product that can be used to initialize Link.
        /api/products/#accountsbalanceget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts/balance/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountsBalanceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.accounts_get_response = out

        return res

    
    def accounts_get(self, request: operations.AccountsGetRequest) -> operations.AccountsGetResponse:
        r"""Retrieve accounts
        The `/accounts/get`  endpoint can be used to retrieve information for any linked Item. Note that some information is nullable. Plaid will only return active bank accounts, i.e. accounts that are not closed and are capable of carrying a balance.
        
        This endpoint retrieves cached information, rather than extracting fresh information from the institution. As a result, balances returned may not be up-to-date; for realtime balance information, use `/accounts/balance/get` instead.
        /api/accounts/#accountsget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.accounts_get_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def application_get(self, request: operations.ApplicationGetRequest) -> operations.ApplicationGetResponse:
        r"""Retrieve information about a Plaid application
        Allows financial institutions to retrieve information about Plaid clients for the purpose of building control-tower experiences
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/application/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationGetResponse])
                res.application_get_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def asset_report_audit_copy_create(self, request: operations.AssetReportAuditCopyCreateRequest) -> operations.AssetReportAuditCopyCreateResponse:
        r"""Create Asset Report Audit Copy
        Plaid can provide an Audit Copy of any Asset Report directly to a participating third party on your behalf. For example, Plaid can supply an Audit Copy directly to Fannie Mae on your behalf if you participate in the Day 1 Certainty™ program. An Audit Copy contains the same underlying data as the Asset Report.
        
        To grant access to an Audit Copy, use the `/asset_report/audit_copy/create` endpoint to create an `audit_copy_token` and then pass that token to the third party who needs access. Each third party has its own `auditor_id`, for example `fannie_mae`. You’ll need to create a separate Audit Copy for each third party to whom you want to grant access to the Report.
        /api/products/#asset_reportaudit_copycreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/asset_report/audit_copy/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssetReportAuditCopyCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.asset_report_audit_copy_create_response = out

        return res

    
    def asset_report_audit_copy_get(self, request: operations.AssetReportAuditCopyGetRequest) -> operations.AssetReportAuditCopyGetResponse:
        r"""Retrieve an Asset Report Audit Copy
        `/asset_report/audit_copy/get` allows auditors to get a copy of an Asset Report that was previously shared via the `/asset_report/audit_copy/create` endpoint.  The caller of `/asset_report/audit_copy/create` must provide the `audit_copy_token` to the auditor.  This token can then be used to call `/asset_report/audit_copy/create`.
        /none/
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/asset_report/audit_copy/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssetReportAuditCopyGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.asset_report_get_response = out

        return res

    
    def asset_report_audit_copy_remove(self, request: operations.AssetReportAuditCopyRemoveRequest) -> operations.AssetReportAuditCopyRemoveResponse:
        r"""Remove Asset Report Audit Copy
        The `/asset_report/audit_copy/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Asset Report, the Asset Report itself and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.
        /api/products/#asset_reportaudit_copyremove
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/asset_report/audit_copy/remove"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssetReportAuditCopyRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.asset_report_audit_copy_remove_response = out

        return res

    
    def asset_report_create(self, request: operations.AssetReportCreateRequest) -> operations.AssetReportCreateResponse:
        r"""Create an Asset Report
        The `/asset_report/create` endpoint initiates the process of creating an Asset Report, which can then be retrieved by passing the `asset_report_token` return value to the `/asset_report/get` or `/asset_report/pdf/get` endpoints.
        
        The Asset Report takes some time to be created and is not available immediately after calling `/asset_report/create`. When the Asset Report is ready to be retrieved using `/asset_report/get` or `/asset_report/pdf/get`, Plaid will fire a `PRODUCT_READY` webhook. For full details of the webhook schema, see [Asset Report webhooks](https://plaid.com/docs/api/webhooks/#Assets-webhooks).
        
        The `/asset_report/create` endpoint creates an Asset Report at a moment in time. Asset Reports are immutable. To get an updated Asset Report, use the `/asset_report/refresh` endpoint.
        /api/products/#asset_reportcreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/asset_report/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssetReportCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.asset_report_create_response = out

        return res

    
    def asset_report_filter(self, request: operations.AssetReportFilterRequest) -> operations.AssetReportFilterResponse:
        r"""Filter Asset Report
        By default, an Asset Report will contain all of the accounts on a given Item. In some cases, you may not want the Asset Report to contain all accounts. For example, you might have the end user choose which accounts are relevant in Link using the Account Select view, which you can enable in the dashboard. Or, you might always exclude certain account types or subtypes, which you can identify by using the `/accounts/get` endpoint. To narrow an Asset Report to only a subset of accounts, use the `/asset_report/filter` endpoint.
        
        To exclude certain Accounts from an Asset Report, first use the `/asset_report/create` endpoint to create the report, then send the `asset_report_token` along with a list of `account_ids` to exclude to the `/asset_report/filter` endpoint, to create a new Asset Report which contains only a subset of the original Asset Report's data.
        
        Because Asset Reports are immutable, calling `/asset_report/filter` does not alter the original Asset Report in any way; rather, `/asset_report/filter` creates a new Asset Report with a new token and id. Asset Reports created via `/asset_report/filter` do not contain new Asset data, and are not billed.
        
        Plaid will fire a [`PRODUCT_READY`](https://plaid.com/docs/api/webhooks) webhook once generation of the filtered Asset Report has completed.
        /api/products/#asset_reportfilter
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/asset_report/filter"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssetReportFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.asset_report_filter_response = out

        return res

    
    def asset_report_get(self, request: operations.AssetReportGetRequest) -> operations.AssetReportGetResponse:
        r"""Retrieve an Asset Report
        The `/asset_report/get` endpoint retrieves the Asset Report in JSON format. Before calling `/asset_report/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/webhooks) webhook to fire, indicating that the Report is ready to be retrieved.
        
        By default, an Asset Report includes transaction descriptions as returned by the bank, as opposed to parsed and categorized by Plaid. You can also receive cleaned and categorized transactions, as well as additional insights like merchant name or location information. We call this an Asset Report with Insights. An Asset Report with Insights provides transaction category, location, and merchant information in addition to the transaction strings provided in a standard Asset Report.
        
        To retrieve an Asset Report with Insights, call the `/asset_report/get` endpoint with `include_insights` set to `true`.
        /api/products/#asset_reportget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/asset_report/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssetReportGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.asset_report_get_response = out

        return res

    
    def asset_report_pdf_get(self, request: operations.AssetReportPdfGetRequest) -> operations.AssetReportPdfGetResponse:
        r"""Retrieve a PDF Asset Report
        The `/asset_report/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling `/asset_report/pdf/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/webhooks) webhook to fire, indicating that the Report is ready to be retrieved.
        
        The response to `/asset_report/pdf/get` is the PDF binary data. The `request_id`  is returned in the `Plaid-Request-ID` header.
        
        [View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).
        /api/products/#asset_reportpdfget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/asset_report/pdf/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssetReportPdfGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.asset_report_pdf_get_response = r.content

        return res

    
    def asset_report_refresh(self, request: operations.AssetReportRefreshRequest) -> operations.AssetReportRefreshResponse:
        r"""Refresh an Asset Report
        An Asset Report is an immutable snapshot of a user's assets. In order to \"refresh\" an Asset Report you created previously, you can use the `/asset_report/refresh` endpoint to create a new Asset Report based on the old one, but with the most recent data available.
        
        The new Asset Report will contain the same Items as the original Report, as well as the same filters applied by any call to `/asset_report/filter`. By default, the new Asset Report will also use the same parameters you submitted with your original `/asset_report/create` request, but the original `days_requested` value and the values of any parameters in the `options` object can be overridden with new values. To change these arguments, simply supply new values for them in your request to `/asset_report/refresh`. Submit an empty string (\"\") for any previously-populated fields you would like set as empty.
        /api/products/#asset_reportrefresh
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/asset_report/refresh"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssetReportRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.asset_report_refresh_response = out

        return res

    
    def asset_report_remove(self, request: operations.AssetReportRemoveRequest) -> operations.AssetReportRemoveResponse:
        r"""Delete an Asset Report
        The `/item/remove` endpoint allows you to invalidate an `access_token`, meaning you will not be able to create new Asset Reports with it. Removing an Item does not affect any Asset Reports or Audit Copies you have already created, which will remain accessible until you remove them specifically.
        
        The `/asset_report/remove` endpoint allows you to remove an Asset Report. Removing an Asset Report invalidates its `asset_report_token`, meaning you will no longer be able to use it to access Report data or create new Audit Copies. Removing an Asset Report does not affect the underlying Items, but does invalidate any `audit_copy_tokens` associated with the Asset Report.
        /api/products/#asset_reportremove
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/asset_report/remove"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssetReportRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.asset_report_remove_response = out

        return res

    
    def auth_get(self, request: operations.AuthGetRequest) -> operations.AuthGetResponse:
        r"""Retrieve auth data
        The `/auth/get` endpoint returns the bank account and bank identification numbers (such as routing numbers, for US accounts) associated with an Item's checking and savings accounts, along with high-level account data and balances when available.
        
        Note: This request may take some time to complete if `auth` was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.
        
        Also note that `/auth/get` will not return data for any new accounts opened after the Item was created. To obtain data for new accounts, create a new Item.
        /api/products/#authget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.auth_get_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def bank_transfer_balance_get(self, request: operations.BankTransferBalanceGetRequest) -> operations.BankTransferBalanceGetResponse:
        r"""Get balance of your Bank Transfer account
        Use the `/bank_transfer/balance/get` endpoint to see the available balance in your bank transfer account. Debit transfers increase this balance once their status is posted. Credit transfers decrease this balance when they are created.
        
        The transactable balance shows the amount in your account that you are able to use for transfers, and is essentially your available balance minus your minimum balance.
        
        Note that this endpoint can only be used with FBO accounts, when using Bank Transfers in the Full Service configuration. It cannot be used on your own account when using Bank Transfers in the BTS Platform configuration.
        /api/products#bank_transferbalanceget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bank_transfer/balance/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankTransferBalanceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_transfer_balance_get_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def bank_transfer_cancel(self, request: operations.BankTransferCancelRequest) -> operations.BankTransferCancelResponse:
        r"""Cancel a bank transfer
        Use the `/bank_transfer/cancel` endpoint to cancel a bank transfer.  A transfer is eligible for cancelation if the `cancellable` property returned by `/bank_transfer/get` is `true`.
        /api/products#bank_transfercancel
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bank_transfer/cancel"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankTransferCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_transfer_cancel_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def bank_transfer_create(self, request: operations.BankTransferCreateRequest) -> operations.BankTransferCreateResponse:
        r"""Create a bank transfer
        Use the `/bank_transfer/create` endpoint to initiate a new bank transfer.
        /api/products#bank_transfercreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bank_transfer/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankTransferCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_transfer_create_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def bank_transfer_event_list(self, request: operations.BankTransferEventListRequest) -> operations.BankTransferEventListResponse:
        r"""List bank transfer events
        Use the `/bank_transfer/event/list` endpoint to get a list of bank transfer events based on specified filter criteria.
        /api/products#bank_transfereventlist
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bank_transfer/event/list"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankTransferEventListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_transfer_event_list_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def bank_transfer_event_sync(self, request: operations.BankTransferEventSyncRequest) -> operations.BankTransferEventSyncResponse:
        r"""Sync bank transfer events
        `/bank_transfer/event/sync` allows you to request up to the next 25 bank transfer events that happened after a specific `event_id`. Use the `/bank_transfer/event/sync` endpoint to guarantee you have seen all bank transfer events. 
        /api/products#bank_transfereventsync
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bank_transfer/event/sync"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankTransferEventSyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_transfer_event_sync_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def bank_transfer_get(self, request: operations.BankTransferGetRequest) -> operations.BankTransferGetResponse:
        r"""Retrieve a bank transfer
        The `/bank_transfer/get` fetches information about the bank transfer corresponding to the given `bank_transfer_id`.
        /api/products#bank_transferget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bank_transfer/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankTransferGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_transfer_get_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def bank_transfer_list(self, request: operations.BankTransferListRequest) -> operations.BankTransferListResponse:
        r"""List bank transfers
        Use the `/bank_transfer/list` endpoint to see a list of all your bank transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired bank transfers.
        
        /api/products#bank_transferlist
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bank_transfer/list"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankTransferListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_transfer_list_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def bank_transfer_migrate_account(self, request: operations.BankTransferMigrateAccountRequest) -> operations.BankTransferMigrateAccountResponse:
        r"""Migrate account into Bank Transfers
        As an alternative to adding Items via Link, you can also use the `/bank_transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid Items.  Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Bank Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/bank_transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid Account Manager.
        /api/products#bank_transfermigrate_account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bank_transfer/migrate_account"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankTransferMigrateAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_transfer_migrate_account_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def categories_get(self, request: operations.CategoriesGetRequest) -> operations.CategoriesGetResponse:
        r"""Get Categories
        Send a request to the `/categories/get`  endpoint to get detailed information on categories returned by Plaid. This endpoint does not require authentication.
        /api/products/#categoriesget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CategoriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.categories_get_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def create_payment_token(self, request: operations.CreatePaymentTokenRequest) -> operations.CreatePaymentTokenResponse:
        r"""Create payment token
        The `/payment_initiation/payment/token/create` endpoint has been deprecated. New Plaid customers will be unable to use this endpoint, and existing customers are encouraged to migrate to the newer, `link_token`-based flow. The recommended flow is to provide the `payment_id` to `/link/token/create`, which returns a `link_token` used to initialize Link.
        
        The `/payment_initiation/payment/token/create` is used to create a `payment_token`, which can then be used in Link initialization to enter a payment initiation flow. You can only use a `payment_token` once. If this attempt fails, the end user aborts the flow, or the token expires, you will need to create a new payment token. Creating a new payment token does not require end user input.
        /link/maintain-legacy-integration/#creating-a-payment-token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payment_initiation/payment/token/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePaymentTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payment_initiation_payment_token_create_response = out

        return res

    
    def deposit_switch_alt_create(self, request: operations.DepositSwitchAltCreateRequest) -> operations.DepositSwitchAltCreateResponse:
        r"""Create a deposit switch without using Plaid Exchange
        This endpoint provides an alternative to `/deposit_switch/create` for customers who have not yet fully integrated with Plaid Exchange. Like `/deposit_switch/create`, it creates a deposit switch entity that will be persisted throughout the lifecycle of the switch.
        /api/products#deposit_switchaltcreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deposit_switch/alt/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DepositSwitchAltCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deposit_switch_alt_create_response = out

        return res

    
    def deposit_switch_create(self, request: operations.DepositSwitchCreateRequest) -> operations.DepositSwitchCreateResponse:
        r"""Create a deposit switch
        This endpoint creates a deposit switch entity that will be persisted throughout the lifecycle of the switch.
        /api/products#deposit_switchcreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deposit_switch/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DepositSwitchCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deposit_switch_create_response = out

        return res

    
    def deposit_switch_get(self, request: operations.DepositSwitchGetRequest) -> operations.DepositSwitchGetResponse:
        r"""Retrieve a deposit switch
        This endpoint returns information related to how the user has configured their payroll allocation and the state of the switch. You can use this information to build logic related to the user's direct deposit allocation preferences.
        /api/products#deposit_switchget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deposit_switch/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DepositSwitchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deposit_switch_get_response = out

        return res

    
    def deposit_switch_token_create(self, request: operations.DepositSwitchTokenCreateRequest) -> operations.DepositSwitchTokenCreateResponse:
        r"""Create a deposit switch token
        In order for the end user to take action, you will need to create a public token representing the deposit switch. This token is used to initialize Link. It can be used one time and expires after 30 minutes.
        
        /deposit-switch/reference#deposit_switchtokencreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deposit_switch/token/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DepositSwitchTokenCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deposit_switch_token_create_response = out

        return res

    
    def employers_search(self, request: operations.EmployersSearchRequest) -> operations.EmployersSearchResponse:
        r"""Search employer database
        `/employers/search` allows you the ability to search Plaid’s database of known employers, for use with Deposit Switch. You can use this endpoint to look up a user's employer in order to confirm that they are supported. Users with non-supported employers can then be routed out of the Deposit Switch flow.
        
        The data in the employer database is currently limited. As the Deposit Switch and Income products progress through their respective beta periods, more employers are being regularly added. Because the employer database is frequently updated, we recommend that you do not cache or store data from this endpoint for more than a day.
        /api/employers/#employerssearch
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/employers/search"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EmployersSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.employers_search_response = out

        return res

    
    def identity_get(self, request: operations.IdentityGetRequest) -> operations.IdentityGetResponse:
        r"""Retrieve identity data
        The `/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses. Only name data is guaranteed to be returned; other fields will be empty arrays if not provided by the institution.
        
        Note: This request may take some time to complete if identity was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the data.
        /api/products/#identityget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/identity/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentityGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.identity_get_response = out

        return res

    
    def income_verification_create(self, request: operations.IncomeVerificationCreateRequest) -> operations.IncomeVerificationCreateResponse:
        r"""Create an income verification instance
        `/income/verification/create` begins the income verification process by returning an `income_verification_id`. You can then provide the `income_verification_id` to `/link/token/create` under the `income_verification` parameter in order to create a Link instance that will prompt the user to go through the income verification flow. Plaid will fire an `INCOME` webhook once the user completes the Payroll Income flow, or when the uploaded documents in the Document Income flow have finished processing. 
        /api/products/#incomeverificationcreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/income/verification/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IncomeVerificationCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.income_verification_create_response = out

        return res

    
    def income_verification_documents_download(self, request: operations.IncomeVerificationDocumentsDownloadRequest) -> operations.IncomeVerificationDocumentsDownloadResponse:
        r"""Download the original documents used for income verification
        `/income/verification/documents/download` provides the ability to download the source paystub PDF that the end user uploaded via Paystub Import.
        
        The response to `/income/verification/documents/download` is a ZIP file in binary data. The `request_id`  is returned in the `Plaid-Request-ID` header.
        
        For Payroll Income, the most recent file available for download with the payroll provider will also be available from this endpoint.
        /api/products/#incomeverificationdocumentsdownload
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/income/verification/documents/download"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IncomeVerificationDocumentsDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.income_verification_documents_download_200_application_zip_binary_string = r.content

        return res

    
    def income_verification_paystubs_get(self, request: operations.IncomeVerificationPaystubsGetRequest) -> operations.IncomeVerificationPaystubsGetResponse:
        r"""Retrieve information from the paystubs used for income verification
        `/income/verification/paystubs/get` returns the information collected from the paystubs that were used to verify an end user's income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.
        /api/products/#incomeverificationpaystubsget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/income/verification/paystubs/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IncomeVerificationPaystubsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.income_verification_paystubs_get_response = out

        return res

    
    def income_verification_refresh(self, request: operations.IncomeVerificationRefreshRequest) -> operations.IncomeVerificationRefreshResponse:
        r"""Refresh an income verification
        `/income/verification/refresh` refreshes a given income verification.
        /api/products/#incomeverificationrefresh
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/income/verification/refresh"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IncomeVerificationRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IncomeVerificationRefreshResponse])
                res.income_verification_refresh_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def income_verification_summary_get(self, request: operations.IncomeVerificationSummaryGetRequest) -> operations.IncomeVerificationSummaryGetResponse:
        r"""Retrieve a summary of information derived from income verification
        `/income/verification/summary/get` returns a verification summary for the income that was verified for an end user. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.
        /api/products/#incomeverificationsummaryget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/income/verification/summary/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IncomeVerificationSummaryGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.income_verification_summary_get_response = out

        return res

    
    def institutions_get(self, request: operations.InstitutionsGetRequest) -> operations.InstitutionsGetResponse:
        r"""Get details of all supported institutions
        Returns a JSON response containing details on all financial institutions currently supported by Plaid. Because Plaid supports thousands of institutions, results are paginated.
        
        If there is no overlap between an institution’s enabled products and a client’s enabled products, then the institution will be filtered out from the response. As a result, the number of institutions returned may not match the count specified in the call.
        
        This data changes frequently. If you store it locally on your system, be sure to update it regularly.
        /api/institutions/#institutionsget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/institutions/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.institutions_get_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def institutions_get_by_id(self, request: operations.InstitutionsGetByIDRequest) -> operations.InstitutionsGetByIDResponse:
        r"""Get details of an institution
        Returns a JSON response containing details on a specified financial institution currently supported by Plaid.
        /api/institutions/#institutionsget_by_id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/institutions/get_by_id"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionsGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.institutions_get_by_id_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def institutions_search(self, request: operations.InstitutionsSearchRequest) -> operations.InstitutionsSearchResponse:
        r"""Search institutions
        Returns a JSON response containing details for institutions that match the query parameters, up to a maximum of ten institutions per query.
        /api/institutions/#institutionssearch
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/institutions/search"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.institutions_search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def investments_holdings_get(self, request: operations.InvestmentsHoldingsGetRequest) -> operations.InvestmentsHoldingsGetResponse:
        r"""Get Investment holdings
        The `/investments/holdings/get` endpoint allows developers to receive user-authorized stock position data for `investment`-type accounts.
        /api/products/#investmentsholdingsget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/investments/holdings/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvestmentsHoldingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.investments_holdings_get_response = out

        return res

    
    def investments_transactions_get(self, request: operations.InvestmentsTransactionsGetRequest) -> operations.InvestmentsTransactionsGetResponse:
        r"""Get investment transactions
        The `/investments/transactions/get` endpoint allows developers to retrieve user-authorized transaction data for investment accounts.
        
        Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.
        
        Due to the potentially large number of investment transactions associated with an Item, results are paginated. Manipulate the count and offset parameters in conjunction with the `total_investment_transactions` response body field to fetch all available investment transactions.
        /api/products/#investmentstransactionsget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/investments/transactions/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvestmentsTransactionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.investments_transactions_get_response = out

        return res

    
    def item_access_token_invalidate(self, request: operations.ItemAccessTokenInvalidateRequest) -> operations.ItemAccessTokenInvalidateResponse:
        r"""Invalidate access_token
        By default, the `access_token` associated with an Item does not expire and should be stored in a persistent, secure manner.
        
        You can use the `/item/access_token/invalidate` endpoint to rotate the `access_token` associated with an Item. The endpoint returns a new `access_token` and immediately invalidates the previous `access_token`.
        
        /api/tokens/#itemaccess_tokeninvalidate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item/access_token/invalidate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemAccessTokenInvalidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.item_access_token_invalidate_response = out

        return res

    
    def item_application_list(self, request: operations.ItemApplicationListRequest) -> operations.ItemApplicationListResponse:
        r"""List a user’s connected applications
        List a user’s connected applications
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item/application/list"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemApplicationListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ItemApplicationListResponse])
                res.item_application_list_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def item_application_scopes_update(self, request: operations.ItemApplicationScopesUpdateRequest) -> operations.ItemApplicationScopesUpdateResponse:
        r"""Update the scopes of access for a particular application
        Enable consumers to update product access on selected accounts for an application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item/application/scopes/update"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemApplicationScopesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ItemApplicationScopesUpdateResponse])
                res.item_application_scopes_update_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def item_create_public_token(self, request: operations.ItemCreatePublicTokenRequest) -> operations.ItemCreatePublicTokenResponse:
        r"""Create public token
        Note: As of July 2020, the `/item/public_token/create` endpoint is deprecated. Instead, use `/link/token/create` with an `access_token` to create a Link token for use with [update mode](https://plaid.com/docs/link/update-mode).
        
        If you need your user to take action to restore or resolve an error associated with an Item, generate a public token with the `/item/public_token/create` endpoint and then initialize Link with that `public_token`.
        
        A `public_token` is one-time use and expires after 30 minutes. You use a `public_token` to initialize Link in [update mode](https://plaid.com/docs/link/update-mode) for a particular Item. You can generate a `public_token` for an Item even if you did not use Link to create the Item originally.
        
        The `/item/public_token/create` endpoint is **not** used to create your initial `public_token`. If you have not already received an `access_token` for a specific Item, use Link to obtain your `public_token` instead. See the [Quickstart](https://plaid.com/docs/quickstart) for more information.
        /api/tokens/#itempublic_tokencreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item/public_token/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemCreatePublicTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.item_public_token_create_response = out

        return res

    
    def item_get(self, request: operations.ItemGetRequest) -> operations.ItemGetResponse:
        r"""Retrieve an Item
        Returns information about the status of an Item.
        /api/items/#itemget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.item_get_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def item_import(self, request: operations.ItemImportRequest) -> operations.ItemImportResponse:
        r"""Import Item
        `/item/import` creates an Item via your Plaid Exchange Integration and returns an `access_token`. As part of an `/item/import` request, you will include a User ID (`user_auth.user_id`) and Authentication Token (`user_auth.auth_token`) that enable data aggregation through your Plaid Exchange API endpoints. These authentication principals are to be chosen by you.
        
        Upon creating an Item via `/item/import`, Plaid will automatically begin an extraction of that Item through the Plaid Exchange infrastructure you have already integrated. This will automatically generate the Plaid native account ID for the account the user will switch their direct deposit to (`target_account_id`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item/import"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.item_import_response = out

        return res

    
    def item_public_token_exchange(self, request: operations.ItemPublicTokenExchangeRequest) -> operations.ItemPublicTokenExchangeResponse:
        r"""Exchange public token for an access token
        Exchange a Link `public_token` for an API `access_token`. Link hands off the `public_token` client-side via the `onSuccess` callback once a user has successfully created an Item. The `public_token` is ephemeral and expires after 30 minutes.
        
        The response also includes an `item_id` that should be stored with the `access_token`. The `item_id` is used to identify an Item in a webhook. The `item_id` can also be retrieved by making an `/item/get` request.
        /api/tokens/#itempublic_tokenexchange
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item/public_token/exchange"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemPublicTokenExchangeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.item_public_token_exchange_response = out

        return res

    
    def item_remove(self, request: operations.ItemRemoveRequest) -> operations.ItemRemoveResponse:
        r"""Remove an Item
        The `/item/remove`  endpoint allows you to remove an Item. Once removed, the `access_token`  associated with the Item is no longer valid and cannot be used to access any data that was associated with the Item.
        
        Note that in the Development environment, issuing an `/item/remove`  request will not decrement your live credential count. To increase your credential account in Development, contact Support.
        
        Also note that for certain OAuth-based institutions, an Item removed via `/item/remove` may still show as an active connection in the institution's OAuth permission manager.
        /api/items/#itemremove
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item/remove"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.item_remove_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def item_webhook_update(self, request: operations.ItemWebhookUpdateRequest) -> operations.ItemWebhookUpdateResponse:
        r"""Update Webhook URL
        The POST `/item/webhook/update` allows you to update the webhook URL associated with an Item. This request triggers a [`WEBHOOK_UPDATE_ACKNOWLEDGED`](https://plaid.com/docs/api/webhooks/#item-webhook-url-updated) webhook to the newly specified webhook URL.
        /api/items/#itemwebhookupdate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/item/webhook/update"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ItemWebhookUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.item_webhook_update_response = out

        return res

    
    def liabilities_get(self, request: operations.LiabilitiesGetRequest) -> operations.LiabilitiesGetResponse:
        r"""Retrieve Liabilities data
        The `/liabilities/get` endpoint returns various details about an Item with loan or credit accounts. Liabilities data is available primarily for US financial institutions, with some limited coverage of Canadian institutions. Currently supported account types are account type `credit` with account subtype `credit card` or `paypal`, and account type `loan` with account subtype `student` or `mortgage`. To limit accounts listed in Link to types and subtypes supported by Liabilities, you can use the `account_filters` parameter when [creating a Link token](https://plaid.com/docs/api/tokens/#linktokencreate).
        
        The types of information returned by Liabilities can include balances and due dates, loan terms, and account details such as original loan amount and guarantor. Data is refreshed approximately once per day; the latest data can be retrieved by calling `/liabilities/get`.
        
        Note: This request may take some time to complete if `liabilities` was not specified as an initial product when creating the Item. This is because Plaid must communicate directly with the institution to retrieve the additional data.
        /api/products/#liabilitiesget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/liabilities/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LiabilitiesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.liabilities_get_response = out

        return res

    
    def link_token_create(self, request: operations.LinkTokenCreateRequest) -> operations.LinkTokenCreateResponse:
        r"""Create Link Token
        The `/link/token/create` endpoint creates a `link_token`, which is required as a parameter when initializing Link. Once Link has been initialized, it returns a `public_token`, which can then be exchanged for an `access_token` via `/item/public_token/exchange` as part of the main Link flow.
        
        A `link_token` generated by `/link/token/create` is also used to initialize other Link flows, such as the update mode flow for tokens with expired credentials, or the Payment Initiation (Europe) flow.
        /api/tokens/#linktokencreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/link/token/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LinkTokenCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.link_token_create_response = out

        return res

    
    def link_token_get(self, request: operations.LinkTokenGetRequest) -> operations.LinkTokenGetResponse:
        r"""Get Link Token
        The `/link/token/get` endpoint gets information about a previously-created `link_token` using the
        `/link/token/create` endpoint. It can be useful for debugging purposes.
        /api/tokens/#linktokenget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/link/token/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LinkTokenGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.link_token_get_response = out

        return res

    
    def payment_initiation_payment_create(self, request: operations.PaymentInitiationPaymentCreateRequest) -> operations.PaymentInitiationPaymentCreateResponse:
        r"""Create a payment
        After creating a payment recipient, you can use the `/payment_initiation/payment/create` endpoint to create a payment to that recipient.  Payments can be one-time or standing order (recurring) and can be denominated in either EUR or GBP.  If making domestic GBP-denominated payments, your recipient must have been created with BACS numbers. In general, EUR-denominated payments will be sent via SEPA Credit Transfer and GBP-denominated payments will be sent via the Faster Payments network, but the payment network used will be determined by the institution. Payments sent via Faster Payments will typically arrive immediately, while payments sent via SEPA Credit Transfer will typically arrive in one business day.
        
        Standing orders (recurring payments) must be denominated in GBP and can only be sent to recipients in the UK. Once created, standing order payments cannot be modified or canceled via the API. An end user can cancel or modify a standing order directly on their banking application or website, or by contacting the bank. Standing orders will follow the payment rules of the underlying rails (Faster Payments in UK). Payments can be sent Monday to Friday, excluding bank holidays. If the pre-arranged date falls on a weekend or bank holiday, the payment is made on the next working day. It is not possible to guarantee the exact time the payment will reach the recipient’s account, although at least 90% of standing order payments are sent by 6am.
        
        In the Development environment, payments must be below 5 GBP / EUR. For details on any payment limits in Production, contact your Plaid Account Manager.
        /api/products/#payment_initiationpaymentcreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payment_initiation/payment/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentInitiationPaymentCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payment_initiation_payment_create_response = out

        return res

    
    def payment_initiation_payment_get(self, request: operations.PaymentInitiationPaymentGetRequest) -> operations.PaymentInitiationPaymentGetResponse:
        r"""Get payment details
        The `/payment_initiation/payment/get` endpoint can be used to check the status of a payment, as well as to receive basic information such as recipient and payment amount. In the case of standing orders, the `/payment_initiation/payment/get` endpoint will provide information about the status of the overall standing order itself; the API cannot be used to retrieve payment status for individual payments within a standing order.
        /api/products/#payment_initiationpaymentget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payment_initiation/payment/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentInitiationPaymentGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payment_initiation_payment_get_response = out

        return res

    
    def payment_initiation_payment_list(self, request: operations.PaymentInitiationPaymentListRequest) -> operations.PaymentInitiationPaymentListResponse:
        r"""List payments
        The `/payment_initiation/payment/list` endpoint can be used to retrieve all created payments. By default, the 10 most recent payments are returned. You can request more payments and paginate through the results using the optional `count` and `cursor` parameters.
        /api/products/#payment_initiationpaymentlist
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payment_initiation/payment/list"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentInitiationPaymentListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payment_initiation_payment_list_response = out

        return res

    
    def payment_initiation_recipient_create(self, request: operations.PaymentInitiationRecipientCreateRequest) -> operations.PaymentInitiationRecipientCreateResponse:
        r"""Create payment recipient
        Create a payment recipient for payment initiation.  The recipient must be in Europe, within a country that is a member of the Single Euro Payment Area (SEPA).  For a standing order (recurring) payment, the recipient must be in the UK.
        
        The endpoint is idempotent: if a developer has already made a request with the same payment details, Plaid will return the same `recipient_id`.
        
        /api/products/#payment_initiationrecipientcreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payment_initiation/recipient/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentInitiationRecipientCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payment_initiation_recipient_create_response = out

        return res

    
    def payment_initiation_recipient_get(self, request: operations.PaymentInitiationRecipientGetRequest) -> operations.PaymentInitiationRecipientGetResponse:
        r"""Get payment recipient
        Get details about a payment recipient you have previously created.
        /api/products/#payment_initiationrecipientget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payment_initiation/recipient/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentInitiationRecipientGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payment_initiation_recipient_get_response = out

        return res

    
    def payment_initiation_recipient_list(self, request: operations.PaymentInitiationRecipientListRequest) -> operations.PaymentInitiationRecipientListResponse:
        r"""List payment recipients
        The `/payment_initiation/recipient/list` endpoint list the payment recipients that you have previously created.
        /api/products/#payment_initiationrecipientlist
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payment_initiation/recipient/list"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentInitiationRecipientListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payment_initiation_recipient_list_response = out

        return res

    
    def processor_apex_processor_token_create(self, request: operations.ProcessorApexProcessorTokenCreateRequest) -> operations.ProcessorApexProcessorTokenCreateResponse:
        r"""Create Apex bank account token
        Used to create a token suitable for sending to Apex to enable Plaid-Apex integrations.
        /none/
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/processor/apex/processor_token/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessorApexProcessorTokenCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.processor_token_create_response = out

        return res

    
    def processor_auth_get(self, request: operations.ProcessorAuthGetRequest) -> operations.ProcessorAuthGetResponse:
        r"""Retrieve Auth data
        The `/processor/auth/get` endpoint returns the bank account and bank identification number (such as the routing number, for US accounts), for a checking or savings account that's associated with a given `processor_token`. The endpoint also returns high-level account data and balances when available.
        /api/processors/#processorauthget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/processor/auth/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessorAuthGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.processor_auth_get_response = out

        return res

    
    def processor_balance_get(self, request: operations.ProcessorBalanceGetRequest) -> operations.ProcessorBalanceGetResponse:
        r"""Retrieve Balance data
        The `/processor/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints may return a balance object, only `/processor/balance/get` forces the available and current balance fields to be refreshed rather than cached. 
        /api/processors/#processorbalanceget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/processor/balance/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessorBalanceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.processor_balance_get_response = out

        return res

    
    def processor_bank_transfer_create(self, request: operations.ProcessorBankTransferCreateRequest) -> operations.ProcessorBankTransferCreateResponse:
        r"""Create a bank transfer as a processor
        Use the `/processor/bank_transfer/create` endpoint to initiate a new bank transfer as a processor
        /api/processors/#bank_transfercreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/processor/bank_transfer/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessorBankTransferCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.processor_bank_transfer_create_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def processor_identity_get(self, request: operations.ProcessorIdentityGetRequest) -> operations.ProcessorIdentityGetResponse:
        r"""Retrieve Identity data
        The `/processor/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses.
        /api/processors/#processoridentityget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/processor/identity/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessorIdentityGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.processor_identity_get_response = out

        return res

    
    def processor_stripe_bank_account_token_create(self, request: operations.ProcessorStripeBankAccountTokenCreateRequest) -> operations.ProcessorStripeBankAccountTokenCreateResponse:
        r"""Create Stripe bank account token
        Used to create a token suitable for sending to Stripe to enable Plaid-Stripe integrations. For a detailed guide on integrating Stripe, see [Add Stripe to your app](https://plaid.com/docs/auth/partnerships/stripe/).
        /api/processors/#processorstripebank_account_tokencreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/processor/stripe/bank_account_token/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessorStripeBankAccountTokenCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.processor_stripe_bank_account_token_create_response = out

        return res

    
    def processor_token_create(self, request: operations.ProcessorTokenCreateRequest) -> operations.ProcessorTokenCreateResponse:
        r"""Create processor token
        Used to create a token suitable for sending to one of Plaid's partners to enable integrations. Note that Stripe partnerships use bank account tokens instead; see `/processor/stripe/bank_account_token/create` for creating tokens for use with Stripe integrations.
        /api/processors/#processortokencreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/processor/token/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessorTokenCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.processor_token_create_response = out

        return res

    
    def sandbox_bank_transfer_fire_webhook(self, request: operations.SandboxBankTransferFireWebhookRequest) -> operations.SandboxBankTransferFireWebhookResponse:
        r"""Manually fire a Bank Transfer webhook
        Use the `/sandbox/bank_transfer/fire_webhook` endpoint to manually trigger a Bank Transfers webhook in the Sandbox environment.
        /api/sandbox/#sandboxbank_transferfire_webhook
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sandbox/bank_transfer/fire_webhook"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SandboxBankTransferFireWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SandboxBankTransferFireWebhookResponse])
                res.sandbox_bank_transfer_fire_webhook_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def sandbox_bank_transfer_simulate(self, request: operations.SandboxBankTransferSimulateRequest) -> operations.SandboxBankTransferSimulateResponse:
        r"""Simulate a bank transfer event in Sandbox
        Use the `/sandbox/bank_transfer/simulate` endpoint to simulate a bank transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/bank_transfer/event/sync` or `/bank_transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.
        /api/sandbox/#sandboxbank_transfersimulate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sandbox/bank_transfer/simulate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SandboxBankTransferSimulateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sandbox_bank_transfer_simulate_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def sandbox_income_fire_webhook(self, request: operations.SandboxIncomeFireWebhookRequest) -> operations.SandboxIncomeFireWebhookResponse:
        r"""Manually fire an Income webhook
        Use the `/sandbox/income/fire_webhook` endpoint to manually trigger an Income webhook in the Sandbox environment.
        /api/sandbox/#sandboxincomefire_webhook
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sandbox/income/fire_webhook"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SandboxIncomeFireWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SandboxIncomeFireWebhookResponse])
                res.sandbox_income_fire_webhook_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def sandbox_item_fire_webhook(self, request: operations.SandboxItemFireWebhookRequest) -> operations.SandboxItemFireWebhookResponse:
        r"""Fire a test webhook
        The `/sandbox/item/fire_webhook` endpoint is used to test that code correctly handles webhooks. Calling this endpoint triggers a Transactions `DEFAULT_UPDATE` webhook to be fired for a given Sandbox Item. If the Item does not support Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.
        /api/sandbox/#sandboxitemfire_webhook
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sandbox/item/fire_webhook"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SandboxItemFireWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sandbox_item_fire_webhook_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def sandbox_item_reset_login(self, request: operations.SandboxItemResetLoginRequest) -> operations.SandboxItemResetLoginResponse:
        r"""Force a Sandbox Item into an error state
        `/sandbox/item/reset_login/` forces an Item into an `ITEM_LOGIN_REQUIRED` state in order to simulate an Item whose login is no longer valid. This makes it easy to test Link's [update mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment.  After calling `/sandbox/item/reset_login`, You can then use Plaid Link update mode to restore the Item to a good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired after a call to this endpoint, if one is associated with the Item.
        
        
        In the Sandbox, Items will transition to an `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this endpoint is not called.
        /api/sandbox/#sandboxitemreset_login
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sandbox/item/reset_login"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SandboxItemResetLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sandbox_item_reset_login_response = out

        return res

    
    def sandbox_item_set_verification_status(self, request: operations.SandboxItemSetVerificationStatusRequest) -> operations.SandboxItemSetVerificationStatusResponse:
        r"""Set verification status for Sandbox account
        The `/sandbox/item/set_verification_status` endpoint can be used to change the verification status of an Item in in the Sandbox in order to simulate the Automated Micro-deposit flow.
        
        Note that not all Plaid developer accounts are enabled for micro-deposit based verification by default. Your account must be enabled for this feature in order to test it in Sandbox. To enable this features or check your status, contact your account manager or [submit a product access Support ticket](https://dashboard.plaid.com/support/new/product-and-development/product-troubleshooting/request-product-access).
        
        For more information on testing Automated Micro-deposits in Sandbox, see [Auth full coverage testing](https://plaid.com/docs/auth/coverage/testing#).
        /api/sandbox/#sandboxitemset_verification_status
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sandbox/item/set_verification_status"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SandboxItemSetVerificationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sandbox_item_set_verification_status_response = out

        return res

    
    def sandbox_oauth_select_accounts(self, request: operations.SandboxOauthSelectAccountsRequest) -> operations.SandboxOauthSelectAccountsResponse:
        r"""Save the selected accounts when connecting to the Platypus Oauth institution
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sandbox/oauth/select_accounts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SandboxOauthSelectAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sandbox_oauth_select_accounts_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def sandbox_processor_token_create(self, request: operations.SandboxProcessorTokenCreateRequest) -> operations.SandboxProcessorTokenCreateResponse:
        r"""Create a test Item and processor token
        Use the `/sandbox/processor_token/create` endpoint to create a valid `processor_token` for an arbitrary institution ID and test credentials. The created `processor_token` corresponds to a new Sandbox Item. You can then use this `processor_token` with the `/processor/` API endpoints in Sandbox. You can also use `/sandbox/processor_token/create` with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data.
        /api/sandbox/#sandboxprocessor_tokencreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sandbox/processor_token/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SandboxProcessorTokenCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sandbox_processor_token_create_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def sandbox_public_token_create(self, request: operations.SandboxPublicTokenCreateRequest) -> operations.SandboxPublicTokenCreateResponse:
        r"""Create a test Item
        Use the `/sandbox/public_token/create`  endpoint to create a valid `public_token`  for an arbitrary institution ID, initial products, and test credentials. The created `public_token` maps to a new Sandbox Item. You can then call `/item/public_token/exchange` to exchange the `public_token` for an `access_token` and perform all API actions. `/sandbox/public_token/create` can also be used with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data.
        /api/sandbox/#sandboxpublic_tokencreate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sandbox/public_token/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SandboxPublicTokenCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sandbox_public_token_create_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def signal_decision_report(self, request: operations.SignalDecisionReportRequest) -> operations.SignalDecisionReportResponse:
        r"""Report whether you initiated an ACH transaction
        After calling `/signal/evaluate`, call `/signal/decision/report` to report whether the transaction was initiated. This endpoint will return an `INVALID_REQUEST` error if called a second time with a different value for `initiated`.
        /signal/reference#signaldecisionreport
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/signal/decision/report"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SignalDecisionReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SignalDecisionReportResponse])
                res.signal_decision_report_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def signal_evaluate(self, request: operations.SignalEvaluateRequest) -> operations.SignalEvaluateResponse:
        r"""Evaluate a planned ACH transaction
        Use `/signal/evaluate` to evaluate a planned ACH transaction to get a return risk assessment (such as a risk score and risk tier) and additional risk signals.
        
        In order to obtain a valid score for an ACH transaction, Plaid must have an access token for the account, and the Item must be healthy (receiving product updates) or have recently been in a healthy state. If the transaction does not meet eligibility requirements, an error will be returned corresponding to the underlying cause.
        /signal/reference#signalevaluate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/signal/evaluate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SignalEvaluateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.signal_evaluate_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def signal_return_report(self, request: operations.SignalReturnReportRequest) -> operations.SignalReturnReportResponse:
        r"""Report a return for an ACH transaction
        Call the `/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trend in your portfolio.
        /signal/reference#signalreturnreport
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/signal/return/report"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SignalReturnReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SignalReturnReportResponse])
                res.signal_return_report_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def transactions_get(self, request: operations.TransactionsGetRequest) -> operations.TransactionsGetResponse:
        r"""Get transaction data
        The `/transactions/get` endpoint allows developers to receive user-authorized transaction data for credit, depository, and some loan-type accounts (only those with account subtype `student`; coverage may be limited). For transaction history from investments accounts, use the [Investments endpoint](https://plaid.com/docs/api/products#investments) instead. Transaction data is standardized across financial institutions, and in many cases transactions are linked to a clean name, entity type, location, and category. Similarly, account data is standardized and returned with a clean name, number, balance, and other meta information where available.
        
        Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.  Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/transactions/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
        
        Due to the potentially large number of transactions associated with an Item, results are paginated. Manipulate the `count` and `offset` parameters in conjunction with the `total_transactions` response body field to fetch all available transactions.
        
        Data returned by `/transactions/get` will be the data available for the Item as of the most recent successful check for new transactions. Plaid typically checks for new data multiple times a day, but these checks may occur less frequently, such as once a day, depending on the institution. An Item's `status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, you can use the `/transactions/refresh` endpoint.
        
        Note that data may not be immediately available to `/transactions/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `transactions`, or upon the first call to `/transactions/get`, if it wasn't. To be alerted when transaction data is ready to be fetched, listen for the [`INITIAL_UPDATE`](https://plaid.com/docs/api/webhooks#transactions-initial_update) and [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/webhooks#transactions-historical_update) webhooks. If no transaction history is ready when `/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.
        /api/products/#transactionsget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/transactions/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TransactionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.transactions_get_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def transactions_refresh(self, request: operations.TransactionsRefreshRequest) -> operations.TransactionsRefreshResponse:
        r"""Refresh transaction data
        `/transactions/refresh` is an optional endpoint for users of the Transactions product. It initiates an on-demand extraction to fetch the newest transactions for an Item. This on-demand extraction takes place in addition to the periodic extractions that automatically occur multiple times a day for any Transactions-enabled Item. If changes to transactions are discovered after calling `/transactions/refresh`, Plaid will fire a webhook: [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/webhooks#deleted-transactions-detected) will be fired if any removed transactions are detected, and [`DEFAULT_UPDATE`](https://plaid.com/docs/api/webhooks#transactions-default_update) will be fired if any new transactions are detected. New transactions can be fetched by calling `/transactions/get`.
        
        Access to `/transactions/refresh` in Production is specific to certain pricing plans. If you cannot access `/transactions/refresh` in Production, [contact Sales](https://www.plaid.com/contact) for assistance.
        /api/products/#transactionsrefresh
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/transactions/refresh"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TransactionsRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransactionsRefreshResponse])
                res.transactions_refresh_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def webhook_verification_key_get(self, request: operations.WebhookVerificationKeyGetRequest) -> operations.WebhookVerificationKeyGetResponse:
        r"""Get webhook verification key
        Plaid signs all outgoing webhooks and provides JSON Web Tokens (JWTs) so that you can verify the authenticity of any incoming webhooks to your application. A message signature is included in the `Plaid-Verification` header.
        
        The `/webhook_verification_key/get` endpoint provides a JSON Web Key (JWK) that can be used to verify a JWT.
        /api/webhooks/webhook-verification/#webhook_verification_keyget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhook_verification_key/get"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebhookVerificationKeyGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.webhook_verification_key_get_response = out

        return res

    