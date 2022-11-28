import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoFromPortfolioPathParams extends SpeakeasyBase {
    portfolioId: number;
    userId: number;
    videoId: number;
}
export declare class DeleteVideoFromPortfolioSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoFromPortfolioRequest extends SpeakeasyBase {
    pathParams: DeleteVideoFromPortfolioPathParams;
    security: DeleteVideoFromPortfolioSecurity;
}
export declare class DeleteVideoFromPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
