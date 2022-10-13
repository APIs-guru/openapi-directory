import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.portfoliooptimizer.io/v1",
	"https://eu-west-1.api.portfoliooptimizer.io/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def post_assets_correlation_matrix(self, request: operations.PostAssetsCorrelationMatrixRequest) -> operations.PostAssetsCorrelationMatrixResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/correlation/matrix"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrix200ApplicationJSON])
                res.post_assets_correlation_matrix_200_application_json_object = out

        return res

    
    
    def post_assets_correlation_matrix_nearest(self, request: operations.PostAssetsCorrelationMatrixNearestRequest) -> operations.PostAssetsCorrelationMatrixNearestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/correlation/matrix/nearest"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixNearestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrixNearest200ApplicationJSON])
                res.post_assets_correlation_matrix_nearest_200_application_json_object = out

        return res

    
    
    def post_assets_correlation_matrix_shrinkage(self, request: operations.PostAssetsCorrelationMatrixShrinkageRequest) -> operations.PostAssetsCorrelationMatrixShrinkageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/correlation/matrix/shrinkage"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixShrinkageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrixShrinkage200ApplicationJSON])
                res.post_assets_correlation_matrix_shrinkage_200_application_json_object = out

        return res

    
    
    def post_assets_correlation_matrix_validation(self, request: operations.PostAssetsCorrelationMatrixValidationRequest) -> operations.PostAssetsCorrelationMatrixValidationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/correlation/matrix/validation"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixValidationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrixValidation200ApplicationJSON])
                res.post_assets_correlation_matrix_validation_200_application_json_object = out

        return res

    
    
    def post_assets_covariance_matrix(self, request: operations.PostAssetsCovarianceMatrixRequest) -> operations.PostAssetsCovarianceMatrixResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/covariance/matrix"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCovarianceMatrixResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCovarianceMatrix200ApplicationJSON])
                res.post_assets_covariance_matrix_200_application_json_object = out

        return res

    
    
    def post_assets_covariance_matrix_sample(self, request: operations.PostAssetsCovarianceMatrixSampleRequest) -> operations.PostAssetsCovarianceMatrixSampleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/covariance/matrix/sample"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCovarianceMatrixSampleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCovarianceMatrixSample200ApplicationJSON])
                res.post_assets_covariance_matrix_sample_200_application_json_object = out

        return res

    
    
    def post_assets_covariance_matrix_validation(self, request: operations.PostAssetsCovarianceMatrixValidationRequest) -> operations.PostAssetsCovarianceMatrixValidationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/covariance/matrix/validation"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCovarianceMatrixValidationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCovarianceMatrixValidation200ApplicationJSON])
                res.post_assets_covariance_matrix_validation_200_application_json_object = out

        return res

    
    
    def post_assets_returns(self, request: operations.PostAssetsReturnsRequest) -> operations.PostAssetsReturnsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/returns"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsReturnsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsReturns200ApplicationJSON])
                res.post_assets_returns_200_application_json_object = out

        return res

    
    
    def post_assets_returns_average(self, request: operations.PostAssetsReturnsAverageRequest) -> operations.PostAssetsReturnsAverageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/returns/average"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsReturnsAverageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsReturnsAverage200ApplicationJSON])
                res.post_assets_returns_average_200_application_json_object = out

        return res

    
    
    def post_assets_variance(self, request: operations.PostAssetsVarianceRequest) -> operations.PostAssetsVarianceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/variance"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVarianceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVariance200ApplicationJSON])
                res.post_assets_variance_200_application_json_object = out

        return res

    
    
    def post_assets_variance_sample(self, request: operations.PostAssetsVarianceSampleRequest) -> operations.PostAssetsVarianceSampleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/variance/sample"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVarianceSampleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVarianceSample200ApplicationJSON])
                res.post_assets_variance_sample_200_application_json_object = out

        return res

    
    
    def post_assets_volatility(self, request: operations.PostAssetsVolatilityRequest) -> operations.PostAssetsVolatilityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/volatility"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVolatilityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVolatility200ApplicationJSON])
                res.post_assets_volatility_200_application_json_object = out

        return res

    
    
    def post_assets_volatility_sample(self, request: operations.PostAssetsVolatilitySampleRequest) -> operations.PostAssetsVolatilitySampleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/assets/volatility/sample"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVolatilitySampleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVolatilitySample200ApplicationJSON])
                res.post_assets_volatility_sample_200_application_json_object = out

        return res

    
    
    def post_factors_residualization(self, request: operations.PostFactorsResidualizationRequest) -> operations.PostFactorsResidualizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/factors/residualization"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFactorsResidualizationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFactorsResidualization200ApplicationJSON])
                res.post_factors_residualization_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_alpha(self, request: operations.PostPortfolioAnalysisAlphaRequest) -> operations.PostPortfolioAnalysisAlphaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/alpha"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisAlphaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisAlpha200ApplicationJSON])
                res.post_portfolio_analysis_alpha_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_beta(self, request: operations.PostPortfolioAnalysisBetaRequest) -> operations.PostPortfolioAnalysisBetaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/beta"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisBetaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisBeta200ApplicationJSON])
                res.post_portfolio_analysis_beta_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_contributions_return(self, request: operations.PostPortfolioAnalysisContributionsReturnRequest) -> operations.PostPortfolioAnalysisContributionsReturnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/contributions/return"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisContributionsReturnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisContributionsReturn200ApplicationJSON])
                res.post_portfolio_analysis_contributions_return_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_contributions_risk(self, request: operations.PostPortfolioAnalysisContributionsRiskRequest) -> operations.PostPortfolioAnalysisContributionsRiskResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/contributions/risk"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisContributionsRiskResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisContributionsRisk200ApplicationJSON])
                res.post_portfolio_analysis_contributions_risk_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_diversification_ratio(self, request: operations.PostPortfolioAnalysisDiversificationRatioRequest) -> operations.PostPortfolioAnalysisDiversificationRatioResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/diversification-ratio"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisDiversificationRatioResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisDiversificationRatio200ApplicationJSON])
                res.post_portfolio_analysis_diversification_ratio_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_drawdowns(self, request: operations.PostPortfolioAnalysisDrawdownsRequest) -> operations.PostPortfolioAnalysisDrawdownsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/drawdowns"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisDrawdownsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisDrawdowns200ApplicationJSON])
                res.post_portfolio_analysis_drawdowns_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_factor_exposures(self, request: operations.PostPortfolioAnalysisFactorExposuresRequest) -> operations.PostPortfolioAnalysisFactorExposuresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/factor/exposures"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisFactorExposuresResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisFactorExposures200ApplicationJSON])
                res.post_portfolio_analysis_factor_exposures_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_mean_variance_efficient_frontier(self, request: operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest) -> operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/mean-variance/efficient-frontier"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON])
                res.post_portfolio_analysis_mean_variance_efficient_frontier_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_mean_variance_minimum_variance_frontier(self, request: operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest) -> operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/mean-variance/minimum-variance-frontier"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSON])
                res.post_portfolio_analysis_mean_variance_minimum_variance_frontier_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_return(self, request: operations.PostPortfolioAnalysisReturnRequest) -> operations.PostPortfolioAnalysisReturnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/return"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisReturnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisReturn200ApplicationJSON])
                res.post_portfolio_analysis_return_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_returns_average(self, request: operations.PostPortfolioAnalysisReturnsAverageRequest) -> operations.PostPortfolioAnalysisReturnsAverageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/returns/average"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisReturnsAverageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisReturnsAverage200ApplicationJSON])
                res.post_portfolio_analysis_returns_average_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_sharpe_ratio(self, request: operations.PostPortfolioAnalysisSharpeRatioRequest) -> operations.PostPortfolioAnalysisSharpeRatioResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/sharpe-ratio"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisSharpeRatioResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisSharpeRatio200ApplicationJSON])
                res.post_portfolio_analysis_sharpe_ratio_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_tracking_error(self, request: operations.PostPortfolioAnalysisTrackingErrorRequest) -> operations.PostPortfolioAnalysisTrackingErrorResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/tracking-error"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisTrackingErrorResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisTrackingError200ApplicationJSON])
                res.post_portfolio_analysis_tracking_error_200_application_json_object = out

        return res

    
    
    def post_portfolio_analysis_volatility(self, request: operations.PostPortfolioAnalysisVolatilityRequest) -> operations.PostPortfolioAnalysisVolatilityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/analysis/volatility"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisVolatilityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisVolatility200ApplicationJSON])
                res.post_portfolio_analysis_volatility_200_application_json_object = out

        return res

    
    
    def post_portfolio_construction_investable(self, request: operations.PostPortfolioConstructionInvestableRequest) -> operations.PostPortfolioConstructionInvestableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/construction/investable"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioConstructionInvestableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioConstructionInvestable200ApplicationJSON])
                res.post_portfolio_construction_investable_200_application_json_object = out

        return res

    
    
    def post_portfolio_construction_mimicking(self, request: operations.PostPortfolioConstructionMimickingRequest) -> operations.PostPortfolioConstructionMimickingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/construction/mimicking"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioConstructionMimickingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioConstructionMimicking200ApplicationJSON])
                res.post_portfolio_construction_mimicking_200_application_json_object = out

        return res

    
    
    def post_portfolio_construction_random(self, request: operations.PostPortfolioConstructionRandomRequest) -> operations.PostPortfolioConstructionRandomResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/construction/random"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioConstructionRandomResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioConstructionRandom200ApplicationJSON])
                res.post_portfolio_construction_random_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_equal_risk_contributions(self, request: operations.PostPortfolioOptimizationEqualRiskContributionsRequest) -> operations.PostPortfolioOptimizationEqualRiskContributionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/equal-risk-contributions"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationEqualRiskContributionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON])
                res.post_portfolio_optimization_equal_risk_contributions_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_equal_sharpe_ratio_contributions(self, request: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest) -> operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/equal-sharpe-ratio-contributions"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON])
                res.post_portfolio_optimization_equal_sharpe_ratio_contributions_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_equal_weighted(self, request: operations.PostPortfolioOptimizationEqualWeightedRequest) -> operations.PostPortfolioOptimizationEqualWeightedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/equal-weighted"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationEqualWeightedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationEqualWeighted200ApplicationJSON])
                res.post_portfolio_optimization_equal_weighted_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_inverse_variance_weighted(self, request: operations.PostPortfolioOptimizationInverseVarianceWeightedRequest) -> operations.PostPortfolioOptimizationInverseVarianceWeightedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/inverse-variance-weighted"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationInverseVarianceWeightedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON])
                res.post_portfolio_optimization_inverse_variance_weighted_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_inverse_volatility_weighted(self, request: operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest) -> operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/inverse-volatility-weighted"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON])
                res.post_portfolio_optimization_inverse_volatility_weighted_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_market_capitalization_weighted(self, request: operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest) -> operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/market-capitalization-weighted"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON])
                res.post_portfolio_optimization_market_capitalization_weighted_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_maximum_decorrelation(self, request: operations.PostPortfolioOptimizationMaximumDecorrelationRequest) -> operations.PostPortfolioOptimizationMaximumDecorrelationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/maximum-decorrelation"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMaximumDecorrelationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON])
                res.post_portfolio_optimization_maximum_decorrelation_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_maximum_return(self, request: operations.PostPortfolioOptimizationMaximumReturnRequest) -> operations.PostPortfolioOptimizationMaximumReturnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/maximum-return"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMaximumReturnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMaximumReturn200ApplicationJSON])
                res.post_portfolio_optimization_maximum_return_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_maximum_sharpe_ratio(self, request: operations.PostPortfolioOptimizationMaximumSharpeRatioRequest) -> operations.PostPortfolioOptimizationMaximumSharpeRatioResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/maximum-sharpe-ratio"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMaximumSharpeRatioResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSON])
                res.post_portfolio_optimization_maximum_sharpe_ratio_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_mean_variance_efficient(self, request: operations.PostPortfolioOptimizationMeanVarianceEfficientRequest) -> operations.PostPortfolioOptimizationMeanVarianceEfficientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/mean-variance-efficient"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMeanVarianceEfficientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON])
                res.post_portfolio_optimization_mean_variance_efficient_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_minimum_correlation(self, request: operations.PostPortfolioOptimizationMinimumCorrelationRequest) -> operations.PostPortfolioOptimizationMinimumCorrelationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/minimum-correlation"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMinimumCorrelationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON])
                res.post_portfolio_optimization_minimum_correlation_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_minimum_variance(self, request: operations.PostPortfolioOptimizationMinimumVarianceRequest) -> operations.PostPortfolioOptimizationMinimumVarianceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/minimum-variance"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMinimumVarianceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMinimumVariance200ApplicationJSON])
                res.post_portfolio_optimization_minimum_variance_200_application_json_object = out

        return res

    
    
    def post_portfolio_optimization_most_diversified(self, request: operations.PostPortfolioOptimizationMostDiversifiedRequest) -> operations.PostPortfolioOptimizationMostDiversifiedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/optimization/most-diversified"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMostDiversifiedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMostDiversified200ApplicationJSON])
                res.post_portfolio_optimization_most_diversified_200_application_json_object = out

        return res

    
    
    def post_portfolio_simulation_rebalancing_drift_weight(self, request: operations.PostPortfolioSimulationRebalancingDriftWeightRequest) -> operations.PostPortfolioSimulationRebalancingDriftWeightResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/simulation/rebalancing/drift-weight"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioSimulationRebalancingDriftWeightResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON])
                res.post_portfolio_simulation_rebalancing_drift_weight_200_application_json_object = out

        return res

    
    
    def post_portfolio_simulation_rebalancing_fixed_weight(self, request: operations.PostPortfolioSimulationRebalancingFixedWeightRequest) -> operations.PostPortfolioSimulationRebalancingFixedWeightResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/simulation/rebalancing/fixed-weight"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioSimulationRebalancingFixedWeightResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON])
                res.post_portfolio_simulation_rebalancing_fixed_weight_200_application_json_object = out

        return res

    
    
    def post_portfolio_simulation_rebalancing_random_weight(self, request: operations.PostPortfolioSimulationRebalancingRandomWeightRequest) -> operations.PostPortfolioSimulationRebalancingRandomWeightResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/simulation/rebalancing/random-weight"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioSimulationRebalancingRandomWeightResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON])
                res.post_portfolio_simulation_rebalancing_random_weight_200_application_json_object = out

        return res

    