
__doc__ = """ SDK Documentation: https://docs.portfoliooptimizer.io/ - External documentation"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.portfoliooptimizer.io/v1",
	"https://eu-west-1.api.portfoliooptimizer.io/v1",
]


class SDK:
    r"""SDK Documentation: https://docs.portfoliooptimizer.io/ - External documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def post_assets_correlation_matrix(self, request: operations.PostAssetsCorrelationMatrixRequest) -> operations.PostAssetsCorrelationMatrixResponse:
        r"""Correlation Matrix
        Compute the Pearson correlation matrix of assets from either:  
        * The assets returns
        * The assets covariance matrix
        
        References
        * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/correlation/matrix"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrix200ApplicationJSON])
                res.post_assets_correlation_matrix_200_application_json_object = out

        return res

    
    def post_assets_correlation_matrix_nearest(self, request: operations.PostAssetsCorrelationMatrixNearestRequest) -> operations.PostAssetsCorrelationMatrixNearestResponse:
        r"""Nearest Correlation Matrix
        Compute the _closest_ correlation matrix to an approximate assets correlation matrix, optionally keeping a selected number of correlations fixed, _closest_ being defined in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm).
        
        References
        * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/correlation/matrix/nearest"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixNearestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrixNearest200ApplicationJSON])
                res.post_assets_correlation_matrix_nearest_200_application_json_object = out

        return res

    
    def post_assets_correlation_matrix_shrinkage(self, request: operations.PostAssetsCorrelationMatrixShrinkageRequest) -> operations.PostAssetsCorrelationMatrixShrinkageResponse:
        r"""Correlation Matrix Shrinkage
        Compute a correlation matrix as a weighted average of an assets correlation matrix and a target correlation matrix, the target correlation matrix being either:  
        * An equicorrelation matrix made of 1
        * An equicorrelation matrix made of 0
        * An equicorrelation matrix made of -1/(n-1), with n the number of assets
        * A provided correlation matrix
        
        References
        * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/correlation/matrix/shrinkage"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixShrinkageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrixShrinkage200ApplicationJSON])
                res.post_assets_correlation_matrix_shrinkage_200_application_json_object = out

        return res

    
    def post_assets_correlation_matrix_validation(self, request: operations.PostAssetsCorrelationMatrixValidationRequest) -> operations.PostAssetsCorrelationMatrixValidationResponse:
        r"""Correlation Matrix Validation
        Validate whether a matrix is a correlation matrix.
        
        References
        * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/correlation/matrix/validation"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCorrelationMatrixValidationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCorrelationMatrixValidation200ApplicationJSON])
                res.post_assets_correlation_matrix_validation_200_application_json_object = out

        return res

    
    def post_assets_covariance_matrix(self, request: operations.PostAssetsCovarianceMatrixRequest) -> operations.PostAssetsCovarianceMatrixResponse:
        r"""Covariance Matrix
        Compute the covariance matrix of assets from either:  
        * The assets correlation matrix and their volatilities (i.e., standard deviations)
        * The assets correlation matrix and their variances
        * The assets returns
        
        References
        * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/covariance/matrix"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCovarianceMatrixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCovarianceMatrix200ApplicationJSON])
                res.post_assets_covariance_matrix_200_application_json_object = out

        return res

    
    def post_assets_covariance_matrix_sample(self, request: operations.PostAssetsCovarianceMatrixSampleRequest) -> operations.PostAssetsCovarianceMatrixSampleResponse:
        r"""Sample Covariance Matrix
        Compute the sample covariance matrix of assets returns.
        
        > This endpoint is similar to the endpoint [`/assets/covariance/matrix`](#post-/assets/covariance/matrix), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the covariance matrix.
        
        References
        * [Wikipedia, Sample Mean and Covariance](https://en.wikipedia.org/wiki/Sample_mean_and_covariance)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/covariance/matrix/sample"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCovarianceMatrixSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCovarianceMatrixSample200ApplicationJSON])
                res.post_assets_covariance_matrix_sample_200_application_json_object = out

        return res

    
    def post_assets_covariance_matrix_validation(self, request: operations.PostAssetsCovarianceMatrixValidationRequest) -> operations.PostAssetsCovarianceMatrixValidationResponse:
        r"""Covariance Matrix Validation
        Validate whether a matrix is a covariance matrix.
        
        References
        * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/covariance/matrix/validation"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsCovarianceMatrixValidationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsCovarianceMatrixValidation200ApplicationJSON])
                res.post_assets_covariance_matrix_validation_200_application_json_object = out

        return res

    
    def post_assets_returns(self, request: operations.PostAssetsReturnsRequest) -> operations.PostAssetsReturnsResponse:
        r"""Arithmetic Returns
        Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).
        
        References
        * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/returns"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsReturnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsReturns200ApplicationJSON])
                res.post_assets_returns_200_application_json_object = out

        return res

    
    def post_assets_returns_average(self, request: operations.PostAssetsReturnsAverageRequest) -> operations.PostAssetsReturnsAverageResponse:
        r"""Arithmetic Average Return
        Compute the arithmetic average of the return(s) of one or several asset(s).
        
        References
        * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/returns/average"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsReturnsAverageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsReturnsAverage200ApplicationJSON])
                res.post_assets_returns_average_200_application_json_object = out

        return res

    
    def post_assets_variance(self, request: operations.PostAssetsVarianceRequest) -> operations.PostAssetsVarianceResponse:
        r"""Variance
        Compute the variance of one or several asset(s) from either:  
        * The asset(s) returns
        * The assets covariance matrix
        * The asset(s) volatility
        
        References
        * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/variance"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVarianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVariance200ApplicationJSON])
                res.post_assets_variance_200_application_json_object = out

        return res

    
    def post_assets_variance_sample(self, request: operations.PostAssetsVarianceSampleRequest) -> operations.PostAssetsVarianceSampleResponse:
        r"""Sample variance
        Compute the sample variance of one or several asset(s) from the asset(s) returns.
                
        > This endpoint is similar to the endpoint [`/assets/variance`](#post-/assets/variance), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the variance.
        
        References
        * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/variance/sample"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVarianceSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVarianceSample200ApplicationJSON])
                res.post_assets_variance_sample_200_application_json_object = out

        return res

    
    def post_assets_volatility(self, request: operations.PostAssetsVolatilityRequest) -> operations.PostAssetsVolatilityResponse:
        r"""Volatility
        Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:  
        * The asset(s) returns
        * The assets covariance matrix
        * The asset(s) variance
        
        References
        * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/volatility"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVolatilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVolatility200ApplicationJSON])
                res.post_assets_volatility_200_application_json_object = out

        return res

    
    def post_assets_volatility_sample(self, request: operations.PostAssetsVolatilitySampleRequest) -> operations.PostAssetsVolatilitySampleResponse:
        r"""Sample volatility
        Compute the sample volatility (i.e., sample standard deviation) of one or several asset(s) from the asset(s) returns.
        
        > This endpoint is similar to the endpoint [`/assets/volatility`](#post-/assets/volatility), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the volatility.
        
        References
        * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/volatility/sample"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVolatilitySampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVolatilitySample200ApplicationJSON])
                res.post_assets_volatility_sample_200_application_json_object = out

        return res

    
    def post_factors_residualization(self, request: operations.PostFactorsResidualizationRequest) -> operations.PostFactorsResidualizationResponse:
        r"""Residualization
        Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.
        
        References
        * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)
        * [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/factors/residualization"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFactorsResidualizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFactorsResidualization200ApplicationJSON])
                res.post_factors_residualization_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_alpha(self, request: operations.PostPortfolioAnalysisAlphaRequest) -> operations.PostPortfolioAnalysisAlphaResponse:
        r"""Alpha
        Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/alpha"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisAlphaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisAlpha200ApplicationJSON])
                res.post_portfolio_analysis_alpha_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_beta(self, request: operations.PostPortfolioAnalysisBetaRequest) -> operations.PostPortfolioAnalysisBetaResponse:
        r"""Beta
        Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM)..
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/beta"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisBetaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisBeta200ApplicationJSON])
                res.post_portfolio_analysis_beta_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_contributions_return(self, request: operations.PostPortfolioAnalysisContributionsReturnRequest) -> operations.PostPortfolioAnalysisContributionsReturnResponse:
        r"""Return Contributions
        Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/contributions/return"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisContributionsReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisContributionsReturn200ApplicationJSON])
                res.post_portfolio_analysis_contributions_return_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_contributions_risk(self, request: operations.PostPortfolioAnalysisContributionsRiskRequest) -> operations.PostPortfolioAnalysisContributionsRiskResponse:
        r"""Risk Contributions
        Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/contributions/risk"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisContributionsRiskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisContributionsRisk200ApplicationJSON])
                res.post_portfolio_analysis_contributions_risk_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_diversification_ratio(self, request: operations.PostPortfolioAnalysisDiversificationRatioRequest) -> operations.PostPortfolioAnalysisDiversificationRatioResponse:
        r"""Diversification Ratio
        Compute the diversification ratio of one or several portfolio(s).
        
        References
        * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/diversification-ratio"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisDiversificationRatioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisDiversificationRatio200ApplicationJSON])
                res.post_portfolio_analysis_diversification_ratio_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_drawdowns(self, request: operations.PostPortfolioAnalysisDrawdownsRequest) -> operations.PostPortfolioAnalysisDrawdownsResponse:
        r"""Drawdowns
        Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
        
        References
        * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/drawdowns"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisDrawdownsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisDrawdowns200ApplicationJSON])
                res.post_portfolio_analysis_drawdowns_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_factor_exposures(self, request: operations.PostPortfolioAnalysisFactorExposuresRequest) -> operations.PostPortfolioAnalysisFactorExposuresResponse:
        r"""Factor Exposures
        Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
        
        References
        * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short) 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/factor/exposures"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisFactorExposuresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisFactorExposures200ApplicationJSON])
                res.post_portfolio_analysis_factor_exposures_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_mean_variance_efficient_frontier(self, request: operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest) -> operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse:
        r"""Mean-Variance Efficient Frontier
        Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraint
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/mean-variance/efficient-frontier"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON])
                res.post_portfolio_analysis_mean_variance_efficient_frontier_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_mean_variance_minimum_variance_frontier(self, request: operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest) -> operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse:
        r"""Mean-Variance Minimum Variance Frontier
        Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraint
        
        > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the \"top\" portion of the mean-variance minimum variance frontier.
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/mean-variance/minimum-variance-frontier"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSON])
                res.post_portfolio_analysis_mean_variance_minimum_variance_frontier_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_return(self, request: operations.PostPortfolioAnalysisReturnRequest) -> operations.PostPortfolioAnalysisReturnResponse:
        r"""Arithmetic Return
        Compute the arithmetic return of one or several portfolio(s) from either:  
        * Portfolio assets arithmetic returns
        * Portfolio values
        
        References
        * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
        * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/return"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisReturn200ApplicationJSON])
                res.post_portfolio_analysis_return_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_returns_average(self, request: operations.PostPortfolioAnalysisReturnsAverageRequest) -> operations.PostPortfolioAnalysisReturnsAverageResponse:
        r"""Arithmetic Average Return
        Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
        
        References
        * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/returns/average"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisReturnsAverageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisReturnsAverage200ApplicationJSON])
                res.post_portfolio_analysis_returns_average_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_sharpe_ratio(self, request: operations.PostPortfolioAnalysisSharpeRatioRequest) -> operations.PostPortfolioAnalysisSharpeRatioResponse:
        r"""Sharpe Ratio
        Compute the Sharpe ratio of one or several portfolio(s) from either:
        * Portfolio assets arithmetic returns and assets covariance matrix
        * Portfolio values
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
        * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/sharpe-ratio"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisSharpeRatioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisSharpeRatio200ApplicationJSON])
                res.post_portfolio_analysis_sharpe_ratio_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_tracking_error(self, request: operations.PostPortfolioAnalysisTrackingErrorRequest) -> operations.PostPortfolioAnalysisTrackingErrorResponse:
        r"""Tracking Error
        Compute the tracking error between a benchmark and one or several portfolio(s).
        
        References
        * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error) 
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/tracking-error"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisTrackingErrorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisTrackingError200ApplicationJSON])
                res.post_portfolio_analysis_tracking_error_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_volatility(self, request: operations.PostPortfolioAnalysisVolatilityRequest) -> operations.PostPortfolioAnalysisVolatilityResponse:
        r"""Volatility
        Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:  
        * Portfolio assets covariance matrix
        * Portfolio values
        
        References
        * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
        * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/volatility"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisVolatilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisVolatility200ApplicationJSON])
                res.post_portfolio_analysis_volatility_200_application_json_object = out

        return res

    
    def post_portfolio_construction_investable(self, request: operations.PostPortfolioConstructionInvestableRequest) -> operations.PostPortfolioConstructionInvestableResponse:
        r"""Investable Portfolio
        Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
        * The desired assets weights
        * The desired assets groups weights
        * The desired maximum assets groups weights
        * The prices of the assets
        * The portfolio value
        * The requirement to purchase some assets by round lots or by odd lots
        * The possibility to purchase some assets by a fractional quantity of shares
        * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets
        
        References
        * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/construction/investable"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioConstructionInvestableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioConstructionInvestable200ApplicationJSON])
                res.post_portfolio_construction_investable_200_application_json_object = out

        return res

    
    def post_portfolio_construction_mimicking(self, request: operations.PostPortfolioConstructionMimickingRequest) -> operations.PostPortfolioConstructionMimickingResponse:
        r"""Mimicking Portfolio
        Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References 
        * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/construction/mimicking"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioConstructionMimickingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioConstructionMimicking200ApplicationJSON])
                res.post_portfolio_construction_mimicking_200_application_json_object = out

        return res

    
    def post_portfolio_construction_random(self, request: operations.PostPortfolioConstructionRandomRequest) -> operations.PostPortfolioConstructionRandomResponse:
        r"""Random Portfolio
        Construct one or several random portfolio(s), optionally subject to:       
        * Minimum and maximum weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.
        
        References
        * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/construction/random"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioConstructionRandomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioConstructionRandom200ApplicationJSON])
                res.post_portfolio_construction_random_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_equal_risk_contributions(self, request: operations.PostPortfolioOptimizationEqualRiskContributionsRequest) -> operations.PostPortfolioOptimizationEqualRiskContributionsResponse:
        r"""Equal Risk Contributions Portfolio
        Compute the assets weights of the equal risk contributions portfolio, optionally subject to:  
        * Minimum and maximum weights constraints  
        
        References
         * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/equal-risk-contributions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationEqualRiskContributionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON])
                res.post_portfolio_optimization_equal_risk_contributions_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_equal_sharpe_ratio_contributions(self, request: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest) -> operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse:
        r"""Equal Sharpe Ratio Contributions Portfolio
        Compute the assets weights of the equal Sharpe Ratio contributions portfolio.
        
        References
         * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166\")
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/equal-sharpe-ratio-contributions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON])
                res.post_portfolio_optimization_equal_sharpe_ratio_contributions_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_equal_weighted(self, request: operations.PostPortfolioOptimizationEqualWeightedRequest) -> operations.PostPortfolioOptimizationEqualWeightedResponse:
        r"""Equal Weighted Portfolio
        Compute the assets weights of the equal-weighted portfolio.
        
        References
         * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/equal-weighted"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationEqualWeightedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationEqualWeighted200ApplicationJSON])
                res.post_portfolio_optimization_equal_weighted_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_inverse_variance_weighted(self, request: operations.PostPortfolioOptimizationInverseVarianceWeightedRequest) -> operations.PostPortfolioOptimizationInverseVarianceWeightedResponse:
        r"""Inverse Variance Weighted Portfolio
        Compute the assets weights of the inverse variance-weighted portfolio.
        
        References
         * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/inverse-variance-weighted"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationInverseVarianceWeightedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON])
                res.post_portfolio_optimization_inverse_variance_weighted_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_inverse_volatility_weighted(self, request: operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest) -> operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse:
        r"""Inverse Volatility Weighted Portfolio
        Compute the assets weights of the inverse volatility-weighted portfolio, also known as the naive-risk parity portfolio.
        
        References
         * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/inverse-volatility-weighted"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON])
                res.post_portfolio_optimization_inverse_volatility_weighted_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_market_capitalization_weighted(self, request: operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest) -> operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse:
        r"""Market Capitalization Weighted Portfolio
        Compute the assets weights of the market capitalization-weighted portfolio.
        
        References
         * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/market-capitalization-weighted"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON])
                res.post_portfolio_optimization_market_capitalization_weighted_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_maximum_decorrelation(self, request: operations.PostPortfolioOptimizationMaximumDecorrelationRequest) -> operations.PostPortfolioOptimizationMaximumDecorrelationResponse:
        r"""Maximum Decorrelation Portfolio
        Compute the assets weights of the maximum decorrelation portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)
        
        https://docs.portfoliooptimizer.io/#maximum-decorrelation-portfolio
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/maximum-decorrelation"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMaximumDecorrelationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON])
                res.post_portfolio_optimization_maximum_decorrelation_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_maximum_return(self, request: operations.PostPortfolioOptimizationMaximumReturnRequest) -> operations.PostPortfolioOptimizationMaximumReturnResponse:
        r"""Maximum Return Portfolio
        Compute the assets weights of the maximum return portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/maximum-return"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMaximumReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMaximumReturn200ApplicationJSON])
                res.post_portfolio_optimization_maximum_return_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_maximum_sharpe_ratio(self, request: operations.PostPortfolioOptimizationMaximumSharpeRatioRequest) -> operations.PostPortfolioOptimizationMaximumSharpeRatioResponse:
        r"""Maximum Sharpe Ratio Portfolio
        Compute the assets weights of the maximum Sharpe ratio portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/maximum-sharpe-ratio"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMaximumSharpeRatioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSON])
                res.post_portfolio_optimization_maximum_sharpe_ratio_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_mean_variance_efficient(self, request: operations.PostPortfolioOptimizationMeanVarianceEfficientRequest) -> operations.PostPortfolioOptimizationMeanVarianceEfficientResponse:
        r"""Mean-Variance Efficient Portfolio
        Compute the assets weights of a mean-variance efficient portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/mean-variance-efficient"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMeanVarianceEfficientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON])
                res.post_portfolio_optimization_mean_variance_efficient_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_minimum_correlation(self, request: operations.PostPortfolioOptimizationMinimumCorrelationRequest) -> operations.PostPortfolioOptimizationMinimumCorrelationResponse:
        r"""Minimum Correlation Portfolio
        Compute the assets weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
        
        References
         * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/minimum-correlation"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMinimumCorrelationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON])
                res.post_portfolio_optimization_minimum_correlation_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_minimum_variance(self, request: operations.PostPortfolioOptimizationMinimumVarianceRequest) -> operations.PostPortfolioOptimizationMinimumVarianceResponse:
        r"""Minimum Variance Portfolio
        Compute the assets weights of the minimum variance portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/minimum-variance"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMinimumVarianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMinimumVariance200ApplicationJSON])
                res.post_portfolio_optimization_minimum_variance_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_most_diversified(self, request: operations.PostPortfolioOptimizationMostDiversifiedRequest) -> operations.PostPortfolioOptimizationMostDiversifiedResponse:
        r"""Most Diversified Portfolio
        Compute the assets weights of the most diversified portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/most-diversified"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMostDiversifiedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMostDiversified200ApplicationJSON])
                res.post_portfolio_optimization_most_diversified_200_application_json_object = out

        return res

    
    def post_portfolio_simulation_rebalancing_drift_weight(self, request: operations.PostPortfolioSimulationRebalancingDriftWeightRequest) -> operations.PostPortfolioSimulationRebalancingDriftWeightResponse:
        r"""Drift-weight Portfolio Rebalancing
        Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).
        
        References
        * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/simulation/rebalancing/drift-weight"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioSimulationRebalancingDriftWeightResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON])
                res.post_portfolio_simulation_rebalancing_drift_weight_200_application_json_object = out

        return res

    
    def post_portfolio_simulation_rebalancing_fixed_weight(self, request: operations.PostPortfolioSimulationRebalancingFixedWeightRequest) -> operations.PostPortfolioSimulationRebalancingFixedWeightResponse:
        r"""Fixed-weight Portfolio Rebalancing
        Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.
        
        References
        * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/simulation/rebalancing/fixed-weight"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioSimulationRebalancingFixedWeightResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON])
                res.post_portfolio_simulation_rebalancing_fixed_weight_200_application_json_object = out

        return res

    
    def post_portfolio_simulation_rebalancing_random_weight(self, request: operations.PostPortfolioSimulationRebalancingRandomWeightRequest) -> operations.PostPortfolioSimulationRebalancingRandomWeightResponse:
        r"""Random-weight Portfolio Rebalancing
        Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.
        
        References
        * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/simulation/rebalancing/random-weight"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioSimulationRebalancingRandomWeightResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON])
                res.post_portfolio_simulation_rebalancing_random_weight_200_application_json_object = out

        return res

    