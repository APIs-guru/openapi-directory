import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioVideoAlt1PathParams extends SpeakeasyBase {
    portfolioId: number;
    videoId: number;
}
export declare class GetPortfolioVideoAlt1Request extends SpeakeasyBase {
    pathParams: GetPortfolioVideoAlt1PathParams;
}
export declare class GetPortfolioVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    video?: shared.Video;
}
