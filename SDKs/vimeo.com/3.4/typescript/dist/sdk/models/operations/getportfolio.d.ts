import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioPathParams extends SpeakeasyBase {
    portfolioId: number;
    userId: number;
}
export declare class GetPortfolioRequest extends SpeakeasyBase {
    pathParams: GetPortfolioPathParams;
}
export declare class GetPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    portfolio?: shared.Portfolio;
}
