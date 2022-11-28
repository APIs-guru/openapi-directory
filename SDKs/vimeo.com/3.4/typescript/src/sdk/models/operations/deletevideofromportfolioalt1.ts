import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoFromPortfolioAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_id" })
  portfolioId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class DeleteVideoFromPortfolioAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVideoFromPortfolioAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoFromPortfolioAlt1PathParams;

  @SpeakeasyMetadata()
  security: DeleteVideoFromPortfolioAlt1Security;
}


export class DeleteVideoFromPortfolioAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
