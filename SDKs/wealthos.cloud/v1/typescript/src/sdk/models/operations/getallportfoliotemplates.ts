import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllPortfolioTemplatesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetAllPortfolioTemplatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


// GetAllPortfolioTemplates200ApplicationJson
/** 
 * Array of all portfolio templates applicable to the investor
**/
export class GetAllPortfolioTemplates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolio_templates" })
  portfolioTemplates: any[];
}


export class GetAllPortfolioTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetAllPortfolioTemplatesHeaders;

  @SpeakeasyMetadata()
  security: GetAllPortfolioTemplatesSecurity;
}


export class GetAllPortfolioTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates200ApplicationJsonObject?: GetAllPortfolioTemplates200ApplicationJson;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates500ApplicationJsonAny?: any;
}
