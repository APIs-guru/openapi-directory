import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePortfolioTemplateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreatePortfolioTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreatePortfolioTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePortfolioTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: CreatePortfolioTemplateSecurity;
}


export class CreatePortfolioTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPortfolioTemplate201ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPortfolioTemplate400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPortfolioTemplate401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPortfolioTemplate403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPortfolioTemplate404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPortfolioTemplate429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createPortfolioTemplate500ApplicationJsonAny?: any;
}
