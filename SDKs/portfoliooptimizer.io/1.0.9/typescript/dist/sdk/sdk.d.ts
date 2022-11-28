import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.portfoliooptimizer.io/v1", "https://eu-west-1.api.portfoliooptimizer.io/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
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
    postAssetsCorrelationMatrix(req: operations.PostAssetsCorrelationMatrixRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixResponse>;
    /**
     * postAssetsCorrelationMatrixNearest - Nearest Correlation Matrix
     *
     * Compute the _closest_ correlation matrix to an approximate assets correlation matrix, optionally keeping a selected number of correlations fixed, _closest_ being defined in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm).
     *
     * References
     * * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
     *
    **/
    postAssetsCorrelationMatrixNearest(req: operations.PostAssetsCorrelationMatrixNearestRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixNearestResponse>;
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
    postAssetsCorrelationMatrixShrinkage(req: operations.PostAssetsCorrelationMatrixShrinkageRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixShrinkageResponse>;
    /**
     * postAssetsCorrelationMatrixValidation - Correlation Matrix Validation
     *
     * Validate whether a matrix is a correlation matrix.
     *
     * References
     * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
     *
    **/
    postAssetsCorrelationMatrixValidation(req: operations.PostAssetsCorrelationMatrixValidationRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixValidationResponse>;
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
    postAssetsCovarianceMatrix(req: operations.PostAssetsCovarianceMatrixRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixResponse>;
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
    postAssetsCovarianceMatrixSample(req: operations.PostAssetsCovarianceMatrixSampleRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixSampleResponse>;
    /**
     * postAssetsCovarianceMatrixValidation - Covariance Matrix Validation
     *
     * Validate whether a matrix is a covariance matrix.
     *
     * References
     * * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
     *
    **/
    postAssetsCovarianceMatrixValidation(req: operations.PostAssetsCovarianceMatrixValidationRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsCovarianceMatrixValidationResponse>;
    /**
     * postAssetsReturns - Arithmetic Returns
     *
     * Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).
     *
     * References
     * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
     *
    **/
    postAssetsReturns(req: operations.PostAssetsReturnsRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsReturnsResponse>;
    /**
     * postAssetsReturnsAverage - Arithmetic Average Return
     *
     * Compute the arithmetic average of the return(s) of one or several asset(s).
     *
     * References
     * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
     *
    **/
    postAssetsReturnsAverage(req: operations.PostAssetsReturnsAverageRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsReturnsAverageResponse>;
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
    postAssetsVariance(req: operations.PostAssetsVarianceRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsVarianceResponse>;
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
    postAssetsVarianceSample(req: operations.PostAssetsVarianceSampleRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsVarianceSampleResponse>;
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
    postAssetsVolatility(req: operations.PostAssetsVolatilityRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsVolatilityResponse>;
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
    postAssetsVolatilitySample(req: operations.PostAssetsVolatilitySampleRequest, config?: AxiosRequestConfig): Promise<operations.PostAssetsVolatilitySampleResponse>;
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
    postFactorsResidualization(req: operations.PostFactorsResidualizationRequest, config?: AxiosRequestConfig): Promise<operations.PostFactorsResidualizationResponse>;
    /**
     * postPortfolioAnalysisAlpha - Alpha
     *
     * Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
    **/
    postPortfolioAnalysisAlpha(req: operations.PostPortfolioAnalysisAlphaRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisAlphaResponse>;
    /**
     * postPortfolioAnalysisBeta - Beta
     *
     * Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM)..
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
    **/
    postPortfolioAnalysisBeta(req: operations.PostPortfolioAnalysisBetaRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisBetaResponse>;
    /**
     * postPortfolioAnalysisContributionsReturn - Return Contributions
     *
     * Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
    **/
    postPortfolioAnalysisContributionsReturn(req: operations.PostPortfolioAnalysisContributionsReturnRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisContributionsReturnResponse>;
    /**
     * postPortfolioAnalysisContributionsRisk - Risk Contributions
     *
     * Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
     *
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     *
    **/
    postPortfolioAnalysisContributionsRisk(req: operations.PostPortfolioAnalysisContributionsRiskRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisContributionsRiskResponse>;
    /**
     * postPortfolioAnalysisDiversificationRatio - Diversification Ratio
     *
     * Compute the diversification ratio of one or several portfolio(s).
     *
     * References
     * * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
     *
    **/
    postPortfolioAnalysisDiversificationRatio(req: operations.PostPortfolioAnalysisDiversificationRatioRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisDiversificationRatioResponse>;
    /**
     * postPortfolioAnalysisDrawdowns - Drawdowns
     *
     * Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
     *
     * References
     * * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))
     *
    **/
    postPortfolioAnalysisDrawdowns(req: operations.PostPortfolioAnalysisDrawdownsRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisDrawdownsResponse>;
    /**
     * postPortfolioAnalysisFactorExposures - Factor Exposures
     *
     * Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
     *
     * References
     * * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short)
     *
    **/
    postPortfolioAnalysisFactorExposures(req: operations.PostPortfolioAnalysisFactorExposuresRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisFactorExposuresResponse>;
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
    postPortfolioAnalysisMeanVarianceEfficientFrontier(req: operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse>;
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
    postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(req: operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse>;
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
    postPortfolioAnalysisReturn(req: operations.PostPortfolioAnalysisReturnRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisReturnResponse>;
    /**
     * postPortfolioAnalysisReturnsAverage - Arithmetic Average Return
     *
     * Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
     *
     * References
     * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
     *
    **/
    postPortfolioAnalysisReturnsAverage(req: operations.PostPortfolioAnalysisReturnsAverageRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisReturnsAverageResponse>;
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
    postPortfolioAnalysisSharpeRatio(req: operations.PostPortfolioAnalysisSharpeRatioRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisSharpeRatioResponse>;
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
    postPortfolioAnalysisTrackingError(req: operations.PostPortfolioAnalysisTrackingErrorRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisTrackingErrorResponse>;
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
    postPortfolioAnalysisVolatility(req: operations.PostPortfolioAnalysisVolatilityRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioAnalysisVolatilityResponse>;
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
    postPortfolioConstructionInvestable(req: operations.PostPortfolioConstructionInvestableRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioConstructionInvestableResponse>;
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
    postPortfolioConstructionMimicking(req: operations.PostPortfolioConstructionMimickingRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioConstructionMimickingResponse>;
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
    postPortfolioConstructionRandom(req: operations.PostPortfolioConstructionRandomRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioConstructionRandomResponse>;
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
    postPortfolioOptimizationEqualRiskContributions(req: operations.PostPortfolioOptimizationEqualRiskContributionsRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualRiskContributionsResponse>;
    /**
     * postPortfolioOptimizationEqualSharpeRatioContributions - Equal Sharpe Ratio Contributions Portfolio
     *
     * Compute the assets weights of the equal Sharpe Ratio contributions portfolio.
     *
     * References
     *  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")
     *
    **/
    postPortfolioOptimizationEqualSharpeRatioContributions(req: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse>;
    /**
     * postPortfolioOptimizationEqualWeighted - Equal Weighted Portfolio
     *
     * Compute the assets weights of the equal-weighted portfolio.
     *
     * References
     *  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
     *
    **/
    postPortfolioOptimizationEqualWeighted(req: operations.PostPortfolioOptimizationEqualWeightedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationEqualWeightedResponse>;
    /**
     * postPortfolioOptimizationInverseVarianceWeighted - Inverse Variance Weighted Portfolio
     *
     * Compute the assets weights of the inverse variance-weighted portfolio.
     *
     * References
     *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
     *
    **/
    postPortfolioOptimizationInverseVarianceWeighted(req: operations.PostPortfolioOptimizationInverseVarianceWeightedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationInverseVarianceWeightedResponse>;
    /**
     * postPortfolioOptimizationInverseVolatilityWeighted - Inverse Volatility Weighted Portfolio
     *
     * Compute the assets weights of the inverse volatility-weighted portfolio, also known as the naive-risk parity portfolio.
     *
     * References
     *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
     *
    **/
    postPortfolioOptimizationInverseVolatilityWeighted(req: operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse>;
    /**
     * postPortfolioOptimizationMarketCapitalizationWeighted - Market Capitalization Weighted Portfolio
     *
     * Compute the assets weights of the market capitalization-weighted portfolio.
     *
     * References
     *  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
     *
    **/
    postPortfolioOptimizationMarketCapitalizationWeighted(req: operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse>;
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
    postPortfolioOptimizationMaximumDecorrelation(req: operations.PostPortfolioOptimizationMaximumDecorrelationRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumDecorrelationResponse>;
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
    postPortfolioOptimizationMaximumReturn(req: operations.PostPortfolioOptimizationMaximumReturnRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumReturnResponse>;
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
    postPortfolioOptimizationMaximumSharpeRatio(req: operations.PostPortfolioOptimizationMaximumSharpeRatioRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMaximumSharpeRatioResponse>;
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
    postPortfolioOptimizationMeanVarianceEfficient(req: operations.PostPortfolioOptimizationMeanVarianceEfficientRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMeanVarianceEfficientResponse>;
    /**
     * postPortfolioOptimizationMinimumCorrelation - Minimum Correlation Portfolio
     *
     * Compute the assets weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
     *
     * References
     *  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
     *
    **/
    postPortfolioOptimizationMinimumCorrelation(req: operations.PostPortfolioOptimizationMinimumCorrelationRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMinimumCorrelationResponse>;
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
    postPortfolioOptimizationMinimumVariance(req: operations.PostPortfolioOptimizationMinimumVarianceRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMinimumVarianceResponse>;
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
    postPortfolioOptimizationMostDiversified(req: operations.PostPortfolioOptimizationMostDiversifiedRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioOptimizationMostDiversifiedResponse>;
    /**
     * postPortfolioSimulationRebalancingDriftWeight - Drift-weight Portfolio Rebalancing
     *
     * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).
     *
     * References
     * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
     *
    **/
    postPortfolioSimulationRebalancingDriftWeight(req: operations.PostPortfolioSimulationRebalancingDriftWeightRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioSimulationRebalancingDriftWeightResponse>;
    /**
     * postPortfolioSimulationRebalancingFixedWeight - Fixed-weight Portfolio Rebalancing
     *
     * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.
     *
     * References
     * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
     *
    **/
    postPortfolioSimulationRebalancingFixedWeight(req: operations.PostPortfolioSimulationRebalancingFixedWeightRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioSimulationRebalancingFixedWeightResponse>;
    /**
     * postPortfolioSimulationRebalancingRandomWeight - Random-weight Portfolio Rebalancing
     *
     * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.
     *
     * References
     * * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)
     *
    **/
    postPortfolioSimulationRebalancingRandomWeight(req: operations.PostPortfolioSimulationRebalancingRandomWeightRequest, config?: AxiosRequestConfig): Promise<operations.PostPortfolioSimulationRebalancingRandomWeightResponse>;
}
export {};
