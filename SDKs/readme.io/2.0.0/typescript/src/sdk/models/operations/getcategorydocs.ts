import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoryDocsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetCategoryDocsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class GetCategoryDocsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class GetCategoryDocsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoryDocsPathParams;

  @SpeakeasyMetadata()
  headers: GetCategoryDocsHeaders;

  @SpeakeasyMetadata()
  security: GetCategoryDocsSecurity;
}


export class GetCategoryDocsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
