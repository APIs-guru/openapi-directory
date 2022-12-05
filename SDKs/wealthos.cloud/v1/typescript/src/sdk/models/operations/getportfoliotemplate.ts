import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPortfolioTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_template_id" })
  portfolioTemplateId: string;
}


export class GetPortfolioTemplateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPortfolioTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPortfolioTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPortfolioTemplatePathParams;

  @SpeakeasyMetadata()
  headers: GetPortfolioTemplateHeaders;

  @SpeakeasyMetadata()
  security: GetPortfolioTemplateSecurity;
}


export class GetPortfolioTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPortfolioTemplate200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate500ApplicationJsonAny?: any;
}
