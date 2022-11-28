import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.portfoliooptimizer.io/v1",
	"https://eu-west-1.api.portfoliooptimizer.io/v1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}

/* SDK Documentation: https://docs.portfoliooptimizer.io/ - External documentation*/
export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * postAssetsCorrelationMatrix - Correlation Matrix
   *
   * Compute the Pearson correlation matrix of assets from either:  
   * * The assets returns
   * * The assets covariance matrix
   * 
   * References
   * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
   * 
  **/
  postAssetsCorrelationMatrix(
    req: operations.PostAssetsCorrelationMatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsCorrelationMatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsCorrelationMatrixRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/correlation/matrix";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsCorrelationMatrixResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsCorrelationMatrix200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsCorrelationMatrixNearest - Nearest Correlation Matrix
   *
   * Compute the _closest_ correlation matrix to an approximate assets correlation matrix, optionally keeping a selected number of correlations fixed, _closest_ being defined in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm).
   * 
   * References
   * * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
   * 
  **/
  postAssetsCorrelationMatrixNearest(
    req: operations.PostAssetsCorrelationMatrixNearestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsCorrelationMatrixNearestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsCorrelationMatrixNearestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/correlation/matrix/nearest";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsCorrelationMatrixNearestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsCorrelationMatrixNearest200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsCorrelationMatrixShrinkage - Correlation Matrix Shrinkage
   *
   * Compute a correlation matrix as a weighted average of an assets correlation matrix and a target correlation matrix, the target correlation matrix being either:  
   * * An equicorrelation matrix made of 1
   * * An equicorrelation matrix made of 0
   * * An equicorrelation matrix made of -1/(n-1), with n the number of assets
   * * A provided correlation matrix
   * 
   * References
   * * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)
   * 
  **/
  postAssetsCorrelationMatrixShrinkage(
    req: operations.PostAssetsCorrelationMatrixShrinkageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsCorrelationMatrixShrinkageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsCorrelationMatrixShrinkageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/correlation/matrix/shrinkage";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsCorrelationMatrixShrinkageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsCorrelationMatrixShrinkage200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsCorrelationMatrixValidation - Correlation Matrix Validation
   *
   * Validate whether a matrix is a correlation matrix.
   * 
   * References
   * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
   * 
  **/
  postAssetsCorrelationMatrixValidation(
    req: operations.PostAssetsCorrelationMatrixValidationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsCorrelationMatrixValidationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsCorrelationMatrixValidationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/correlation/matrix/validation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsCorrelationMatrixValidationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsCorrelationMatrixValidation200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsCovarianceMatrix - Covariance Matrix
   *
   * Compute the covariance matrix of assets from either:  
   * * The assets correlation matrix and their volatilities (i.e., standard deviations)
   * * The assets correlation matrix and their variances
   * * The assets returns
   * 
   * References
   * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
   * 
  **/
  postAssetsCovarianceMatrix(
    req: operations.PostAssetsCovarianceMatrixRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsCovarianceMatrixResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsCovarianceMatrixRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/covariance/matrix";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsCovarianceMatrixResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsCovarianceMatrix200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsCovarianceMatrixSample - Sample Covariance Matrix
   *
   * Compute the sample covariance matrix of assets returns.
   * 
   * > This endpoint is similar to the endpoint [`/assets/covariance/matrix`](#post-/assets/covariance/matrix), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the covariance matrix.
   * 
   * References
   * * [Wikipedia, Sample Mean and Covariance](https://en.wikipedia.org/wiki/Sample_mean_and_covariance)
   * 
  **/
  postAssetsCovarianceMatrixSample(
    req: operations.PostAssetsCovarianceMatrixSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsCovarianceMatrixSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsCovarianceMatrixSampleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/covariance/matrix/sample";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsCovarianceMatrixSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsCovarianceMatrixSample200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsCovarianceMatrixValidation - Covariance Matrix Validation
   *
   * Validate whether a matrix is a covariance matrix.
   * 
   * References
   * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
   * 
  **/
  postAssetsCovarianceMatrixValidation(
    req: operations.PostAssetsCovarianceMatrixValidationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsCovarianceMatrixValidationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsCovarianceMatrixValidationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/covariance/matrix/validation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsCovarianceMatrixValidationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsCovarianceMatrixValidation200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsReturns - Arithmetic Returns
   *
   * Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).
   * 
   * References
   * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
   * 
  **/
  postAssetsReturns(
    req: operations.PostAssetsReturnsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsReturnsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsReturnsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/returns";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsReturnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsReturns200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsReturnsAverage - Arithmetic Average Return
   *
   * Compute the arithmetic average of the return(s) of one or several asset(s).
   * 
   * References
   * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
   * 
  **/
  postAssetsReturnsAverage(
    req: operations.PostAssetsReturnsAverageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsReturnsAverageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsReturnsAverageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/returns/average";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsReturnsAverageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsReturnsAverage200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsVariance - Variance
   *
   * Compute the variance of one or several asset(s) from either:  
   * * The asset(s) returns
   * * The assets covariance matrix
   * * The asset(s) volatility
   * 
   * References
   * * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        
   * 
  **/
  postAssetsVariance(
    req: operations.PostAssetsVarianceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsVarianceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsVarianceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/variance";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsVarianceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsVariance200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsVarianceSample - Sample variance
   *
   * Compute the sample variance of one or several asset(s) from the asset(s) returns.
   *         
   * > This endpoint is similar to the endpoint [`/assets/variance`](#post-/assets/variance), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the variance.
   * 
   * References
   * * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        
   * 
  **/
  postAssetsVarianceSample(
    req: operations.PostAssetsVarianceSampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsVarianceSampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsVarianceSampleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/variance/sample";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsVarianceSampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsVarianceSample200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsVolatility - Volatility
   *
   * Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:  
   * * The asset(s) returns
   * * The assets covariance matrix
   * * The asset(s) variance
   * 
   * References
   * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
   * 
  **/
  postAssetsVolatility(
    req: operations.PostAssetsVolatilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsVolatilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsVolatilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/volatility";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsVolatilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsVolatility200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAssetsVolatilitySample - Sample volatility
   *
   * Compute the sample volatility (i.e., sample standard deviation) of one or several asset(s) from the asset(s) returns.
   * 
   * > This endpoint is similar to the endpoint [`/assets/volatility`](#post-/assets/volatility), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the volatility.
   * 
   * References
   * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
   * 
  **/
  postAssetsVolatilitySample(
    req: operations.PostAssetsVolatilitySampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsVolatilitySampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsVolatilitySampleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/volatility/sample";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAssetsVolatilitySampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAssetsVolatilitySample200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postFactorsResidualization - Residualization
   *
   * Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.
   * 
   * References
   * * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)
   * * [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)
   * 
  **/
  postFactorsResidualization(
    req: operations.PostFactorsResidualizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFactorsResidualizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFactorsResidualizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/factors/residualization";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostFactorsResidualizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postFactorsResidualization200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisAlpha - Alpha
   *
   * Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
   * 
   * References
   * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
   * 
  **/
  postPortfolioAnalysisAlpha(
    req: operations.PostPortfolioAnalysisAlphaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisAlphaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisAlphaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/alpha";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisAlphaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisAlpha200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisBeta - Beta
   *
   * Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM)..
   * 
   * References
   * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
   * 
  **/
  postPortfolioAnalysisBeta(
    req: operations.PostPortfolioAnalysisBetaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisBetaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisBetaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/beta";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisBetaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisBeta200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisContributionsReturn - Return Contributions
   *
   * Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
   * 
   * References
   * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
   * 
  **/
  postPortfolioAnalysisContributionsReturn(
    req: operations.PostPortfolioAnalysisContributionsReturnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisContributionsReturnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisContributionsReturnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/contributions/return";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisContributionsReturnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisContributionsReturn200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisContributionsRisk - Risk Contributions
   *
   * Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
   * 
   * References
   * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
   * 
  **/
  postPortfolioAnalysisContributionsRisk(
    req: operations.PostPortfolioAnalysisContributionsRiskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisContributionsRiskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisContributionsRiskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/contributions/risk";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisContributionsRiskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisContributionsRisk200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisDiversificationRatio - Diversification Ratio
   *
   * Compute the diversification ratio of one or several portfolio(s).
   * 
   * References
   * * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
   * 
  **/
  postPortfolioAnalysisDiversificationRatio(
    req: operations.PostPortfolioAnalysisDiversificationRatioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisDiversificationRatioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisDiversificationRatioRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/diversification-ratio";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisDiversificationRatioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisDiversificationRatio200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisDrawdowns - Drawdowns
   *
   * Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
   * 
   * References
   * * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))        
   * 
  **/
  postPortfolioAnalysisDrawdowns(
    req: operations.PostPortfolioAnalysisDrawdownsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisDrawdownsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisDrawdownsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/drawdowns";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisDrawdownsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisDrawdowns200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisFactorExposures - Factor Exposures
   *
   * Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
   * 
   * References
   * * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short) 
   * 
  **/
  postPortfolioAnalysisFactorExposures(
    req: operations.PostPortfolioAnalysisFactorExposuresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisFactorExposuresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisFactorExposuresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/factor/exposures";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisFactorExposuresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisFactorExposures200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisMeanVarianceEfficientFrontier - Mean-Variance Efficient Frontier
   *
   * Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraint
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioAnalysisMeanVarianceEfficientFrontier(
    req: operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/mean-variance/efficient-frontier";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier - Mean-Variance Minimum Variance Frontier
   *
   * Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraint
   * 
   * > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(
    req: operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/mean-variance/minimum-variance-frontier";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisReturn - Arithmetic Return
   *
   * Compute the arithmetic return of one or several portfolio(s) from either:  
   * * Portfolio assets arithmetic returns
   * * Portfolio values
   * 
   * References
   * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
   * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioAnalysisReturn(
    req: operations.PostPortfolioAnalysisReturnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisReturnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisReturnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/return";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisReturnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisReturn200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisReturnsAverage - Arithmetic Average Return
   *
   * Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
   * 
   * References
   * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
   * 
  **/
  postPortfolioAnalysisReturnsAverage(
    req: operations.PostPortfolioAnalysisReturnsAverageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisReturnsAverageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisReturnsAverageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/returns/average";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisReturnsAverageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisReturnsAverage200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisSharpeRatio - Sharpe Ratio
   *
   * Compute the Sharpe ratio of one or several portfolio(s) from either:
   * * Portfolio assets arithmetic returns and assets covariance matrix
   * * Portfolio values
   * 
   * References
   * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
   * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioAnalysisSharpeRatio(
    req: operations.PostPortfolioAnalysisSharpeRatioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisSharpeRatioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisSharpeRatioRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/sharpe-ratio";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisSharpeRatioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisSharpeRatio200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisTrackingError - Tracking Error
   *
   * Compute the tracking error between a benchmark and one or several portfolio(s).
   * 
   * References
   * * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error) 
   * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 
   * 
  **/
  postPortfolioAnalysisTrackingError(
    req: operations.PostPortfolioAnalysisTrackingErrorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisTrackingErrorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisTrackingErrorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/tracking-error";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisTrackingErrorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisTrackingError200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioAnalysisVolatility - Volatility
   *
   * Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:  
   * * Portfolio assets covariance matrix
   * * Portfolio values
   * 
   * References
   * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
   * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
   * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioAnalysisVolatility(
    req: operations.PostPortfolioAnalysisVolatilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioAnalysisVolatilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioAnalysisVolatilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/analysis/volatility";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioAnalysisVolatilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioAnalysisVolatility200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioConstructionInvestable - Investable Portfolio
   *
   * Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
   * * The desired assets weights
   * * The desired assets groups weights
   * * The desired maximum assets groups weights
   * * The prices of the assets
   * * The portfolio value
   * * The requirement to purchase some assets by round lots or by odd lots
   * * The possibility to purchase some assets by a fractional quantity of shares
   * * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets
   * 
   * References
   * * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)
   * 
  **/
  postPortfolioConstructionInvestable(
    req: operations.PostPortfolioConstructionInvestableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioConstructionInvestableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioConstructionInvestableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/construction/investable";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioConstructionInvestableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioConstructionInvestable200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioConstructionMimicking - Mimicking Portfolio
   *
   * Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References 
   * * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)
   * 
  **/
  postPortfolioConstructionMimicking(
    req: operations.PostPortfolioConstructionMimickingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioConstructionMimickingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioConstructionMimickingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/construction/mimicking";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioConstructionMimickingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioConstructionMimicking200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioConstructionRandom - Random Portfolio
   *
   * Construct one or several random portfolio(s), optionally subject to:       
   * * Minimum and maximum weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.
   * 
   * References
   * * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)
   * 
  **/
  postPortfolioConstructionRandom(
    req: operations.PostPortfolioConstructionRandomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioConstructionRandomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioConstructionRandomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/construction/random";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioConstructionRandomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioConstructionRandom200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationEqualRiskContributions - Equal Risk Contributions Portfolio
   *
   * Compute the assets weights of the equal risk contributions portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints  
   * 
   * References
   *  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)
   * 
  **/
  postPortfolioOptimizationEqualRiskContributions(
    req: operations.PostPortfolioOptimizationEqualRiskContributionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationEqualRiskContributionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationEqualRiskContributionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/equal-risk-contributions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationEqualRiskContributionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationEqualRiskContributions200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationEqualSharpeRatioContributions - Equal Sharpe Ratio Contributions Portfolio
   *
   * Compute the assets weights of the equal Sharpe Ratio contributions portfolio.
   * 
   * References
   *  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")
   * 
  **/
  postPortfolioOptimizationEqualSharpeRatioContributions(
    req: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/equal-sharpe-ratio-contributions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationEqualWeighted - Equal Weighted Portfolio
   *
   * Compute the assets weights of the equal-weighted portfolio.
   * 
   * References
   *  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
   * 
  **/
  postPortfolioOptimizationEqualWeighted(
    req: operations.PostPortfolioOptimizationEqualWeightedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationEqualWeightedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationEqualWeightedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/equal-weighted";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationEqualWeightedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationEqualWeighted200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationInverseVarianceWeighted - Inverse Variance Weighted Portfolio
   *
   * Compute the assets weights of the inverse variance-weighted portfolio.
   * 
   * References
   *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
   * 
  **/
  postPortfolioOptimizationInverseVarianceWeighted(
    req: operations.PostPortfolioOptimizationInverseVarianceWeightedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationInverseVarianceWeightedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationInverseVarianceWeightedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/inverse-variance-weighted";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationInverseVarianceWeightedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationInverseVarianceWeighted200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationInverseVolatilityWeighted - Inverse Volatility Weighted Portfolio
   *
   * Compute the assets weights of the inverse volatility-weighted portfolio, also known as the naive-risk parity portfolio.
   * 
   * References
   *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
   * 
  **/
  postPortfolioOptimizationInverseVolatilityWeighted(
    req: operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/inverse-volatility-weighted";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationMarketCapitalizationWeighted - Market Capitalization Weighted Portfolio
   *
   * Compute the assets weights of the market capitalization-weighted portfolio.
   * 
   * References
   *  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
   * 
  **/
  postPortfolioOptimizationMarketCapitalizationWeighted(
    req: operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/market-capitalization-weighted";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationMaximumDecorrelation - Maximum Decorrelation Portfolio
   *
   * Compute the assets weights of the maximum decorrelation portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)
   * 
   *
   * https://docs.portfoliooptimizer.io/#maximum-decorrelation-portfolio
  **/
  postPortfolioOptimizationMaximumDecorrelation(
    req: operations.PostPortfolioOptimizationMaximumDecorrelationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMaximumDecorrelationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMaximumDecorrelationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/maximum-decorrelation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMaximumDecorrelationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMaximumDecorrelation200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationMaximumReturn - Maximum Return Portfolio
   *
   * Compute the assets weights of the maximum return portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioOptimizationMaximumReturn(
    req: operations.PostPortfolioOptimizationMaximumReturnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMaximumReturnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMaximumReturnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/maximum-return";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMaximumReturnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMaximumReturn200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationMaximumSharpeRatio - Maximum Sharpe Ratio Portfolio
   *
   * Compute the assets weights of the maximum Sharpe ratio portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioOptimizationMaximumSharpeRatio(
    req: operations.PostPortfolioOptimizationMaximumSharpeRatioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMaximumSharpeRatioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMaximumSharpeRatioRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/maximum-sharpe-ratio";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMaximumSharpeRatioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMaximumSharpeRatio200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationMeanVarianceEfficient - Mean-Variance Efficient Portfolio
   *
   * Compute the assets weights of a mean-variance efficient portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioOptimizationMeanVarianceEfficient(
    req: operations.PostPortfolioOptimizationMeanVarianceEfficientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMeanVarianceEfficientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMeanVarianceEfficientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/mean-variance-efficient";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMeanVarianceEfficientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMeanVarianceEfficient200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationMinimumCorrelation - Minimum Correlation Portfolio
   *
   * Compute the assets weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
   * 
   * References
   *  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
   * 
  **/
  postPortfolioOptimizationMinimumCorrelation(
    req: operations.PostPortfolioOptimizationMinimumCorrelationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMinimumCorrelationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMinimumCorrelationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/minimum-correlation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMinimumCorrelationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMinimumCorrelation200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationMinimumVariance - Minimum Variance Portfolio
   *
   * Compute the assets weights of the minimum variance portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioOptimizationMinimumVariance(
    req: operations.PostPortfolioOptimizationMinimumVarianceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMinimumVarianceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMinimumVarianceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/minimum-variance";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMinimumVarianceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMinimumVariance200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioOptimizationMostDiversified - Most Diversified Portfolio
   *
   * Compute the assets weights of the most diversified portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
   * 
  **/
  postPortfolioOptimizationMostDiversified(
    req: operations.PostPortfolioOptimizationMostDiversifiedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMostDiversifiedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMostDiversifiedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/most-diversified";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMostDiversifiedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMostDiversified200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioSimulationRebalancingDriftWeight - Drift-weight Portfolio Rebalancing
   *
   * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).
   * 
   * References
   * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
   * 
  **/
  postPortfolioSimulationRebalancingDriftWeight(
    req: operations.PostPortfolioSimulationRebalancingDriftWeightRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioSimulationRebalancingDriftWeightResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioSimulationRebalancingDriftWeightRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/simulation/rebalancing/drift-weight";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioSimulationRebalancingDriftWeightResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioSimulationRebalancingDriftWeight200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioSimulationRebalancingFixedWeight - Fixed-weight Portfolio Rebalancing
   *
   * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.
   * 
   * References
   * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)        
   * 
  **/
  postPortfolioSimulationRebalancingFixedWeight(
    req: operations.PostPortfolioSimulationRebalancingFixedWeightRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioSimulationRebalancingFixedWeightResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioSimulationRebalancingFixedWeightRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/simulation/rebalancing/fixed-weight";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioSimulationRebalancingFixedWeightResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioSimulationRebalancingFixedWeight200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPortfolioSimulationRebalancingRandomWeight - Random-weight Portfolio Rebalancing
   *
   * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.
   * 
   * References
   * * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)
   * 
  **/
  postPortfolioSimulationRebalancingRandomWeight(
    req: operations.PostPortfolioSimulationRebalancingRandomWeightRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioSimulationRebalancingRandomWeightResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioSimulationRebalancingRandomWeightRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/simulation/rebalancing/random-weight";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioSimulationRebalancingRandomWeightResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPortfolioSimulationRebalancingRandomWeight200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
