

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://sandbox.whapi.com/v2/bets",
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
        
    
    
    
    def cashin(self, request: operations.CashinRequest) -> operations.CashinResponse:
        r"""Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
        Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{betId}/cashin", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CashinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CashInResponse])
                res.cash_in_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Errors])
                res.errors = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Errors])
                res.errors = out

        return res

    
    def get_bet_history(self, request: operations.GetBetHistoryRequest) -> operations.GetBetHistoryResponse:
        r"""Retrieves the customer’s bet history.
        Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/history"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBetHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BetHistoryResponse])
                res.bet_history_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Errors])
                res.errors = out

        return res

    
    def get_free_bets(self, request: operations.GetFreeBetsRequest) -> operations.GetFreeBetsResponse:
        r"""Returns available free bets
        Retrieves the current free bets available for a customer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/freebets"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFreeBetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FreeBetDetail]])
                res.free_bet = out
        elif r.status_code == 204:
            pass

        return res

    
    def place_complex_bet(self, request: operations.PlaceComplexBetRequest) -> operations.PlaceComplexBetResponse:
        r"""Places a multiple or a complex bet.
        Places a multiple or a complex bet.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bet/complex"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceComplexBetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BetPlaced]])
                res.bet_placed_response = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BetDelayed]])
                res.bet_delayed_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Errors])
                res.errors = out

        return res

    
    def place_single_bet(self, request: operations.PlaceSingleBetRequest) -> operations.PlaceSingleBetResponse:
        r"""Places a single bet
        Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market. Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bet/single"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaceSingleBetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BetPlaced]])
                res.bet_placed_response = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BetDelayed]])
                res.bet_delayed_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Errors])
                res.errors = out

        return res

    
    def validate_betslip(self, request: operations.ValidateBetslipRequest) -> operations.ValidateBetslipResponse:
        r"""Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/betslips"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ValidateBetslipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BetSlipResponse])
                res.bet_slip_response = out

        return res

    