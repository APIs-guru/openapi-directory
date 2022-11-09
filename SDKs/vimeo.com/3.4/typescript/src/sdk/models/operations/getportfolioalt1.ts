import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPortfolioAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_id" })
  portfolioId: number;
}


export class GetPortfolioAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPortfolioAlt1PathParams;
}


export class GetPortfolioAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  portfolio?: shared.Portfolio;
}
