import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePortfolioTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_template_id" })
  portfolioTemplateId: string;
}


export class UpdatePortfolioTemplateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class UpdatePortfolioTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class UpdatePortfolioTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePortfolioTemplatePathParams;

  @SpeakeasyMetadata()
  headers: UpdatePortfolioTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: UpdatePortfolioTemplateSecurity;
}


export class UpdatePortfolioTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePortfolioTemplate200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate500ApplicationJsonAny?: any;
}
