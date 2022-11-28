import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToPortfolioPathParams extends SpeakeasyBase {
    portfolioId: number;
    userId: number;
    videoId: number;
}
export declare class AddVideoToPortfolioSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToPortfolioRequest extends SpeakeasyBase {
    pathParams: AddVideoToPortfolioPathParams;
    security: AddVideoToPortfolioSecurity;
}
export declare class AddVideoToPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
