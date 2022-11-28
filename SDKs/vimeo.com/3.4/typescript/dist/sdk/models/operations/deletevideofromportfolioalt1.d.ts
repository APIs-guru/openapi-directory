import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoFromPortfolioAlt1PathParams extends SpeakeasyBase {
    portfolioId: number;
    videoId: number;
}
export declare class DeleteVideoFromPortfolioAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoFromPortfolioAlt1Request extends SpeakeasyBase {
    pathParams: DeleteVideoFromPortfolioAlt1PathParams;
    security: DeleteVideoFromPortfolioAlt1Security;
}
export declare class DeleteVideoFromPortfolioAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
