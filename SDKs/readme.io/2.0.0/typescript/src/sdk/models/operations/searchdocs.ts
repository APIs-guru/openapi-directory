import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchDocsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search: string;
}


export class SearchDocsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class SearchDocsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class SearchDocsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchDocsQueryParams;

  @SpeakeasyMetadata()
  headers: SearchDocsHeaders;

  @SpeakeasyMetadata()
  security: SearchDocsSecurity;
}


export class SearchDocsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
