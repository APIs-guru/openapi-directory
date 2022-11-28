import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioVideoPathParams extends SpeakeasyBase {
    portfolioId: number;
    userId: number;
    videoId: number;
}
export declare class GetPortfolioVideoRequest extends SpeakeasyBase {
    pathParams: GetPortfolioVideoPathParams;
}
export declare class GetPortfolioVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    video?: shared.Video;
}
