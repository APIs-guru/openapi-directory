import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioAlt1PathParams extends SpeakeasyBase {
    portfolioId: number;
}
export declare class GetPortfolioAlt1Request extends SpeakeasyBase {
    pathParams: GetPortfolioAlt1PathParams;
}
export declare class GetPortfolioAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    portfolio?: shared.Portfolio;
}
