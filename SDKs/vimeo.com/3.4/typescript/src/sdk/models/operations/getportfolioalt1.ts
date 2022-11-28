import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPortfolioAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_id" })
  portfolioId: number;
}


export class GetPortfolioAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPortfolioAlt1PathParams;
}


export class GetPortfolioAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  portfolio?: shared.Portfolio;
}
