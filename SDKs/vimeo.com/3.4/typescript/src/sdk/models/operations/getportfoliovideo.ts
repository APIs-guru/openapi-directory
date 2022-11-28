import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPortfolioVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_id" })
  portfolioId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetPortfolioVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPortfolioVideoPathParams;
}


export class GetPortfolioVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
