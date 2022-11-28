import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiSpecificationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;
}


export class GetApiSpecificationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class GetApiSpecificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class GetApiSpecificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiSpecificationQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiSpecificationHeaders;

  @SpeakeasyMetadata()
  security: GetApiSpecificationSecurity;
}


export class GetApiSpecificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
