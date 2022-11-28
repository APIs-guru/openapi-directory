import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToPortfolioAlt1PathParams extends SpeakeasyBase {
    portfolioId: number;
    videoId: number;
}
export declare class AddVideoToPortfolioAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToPortfolioAlt1Request extends SpeakeasyBase {
    pathParams: AddVideoToPortfolioAlt1PathParams;
    security: AddVideoToPortfolioAlt1Security;
}
export declare class AddVideoToPortfolioAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
