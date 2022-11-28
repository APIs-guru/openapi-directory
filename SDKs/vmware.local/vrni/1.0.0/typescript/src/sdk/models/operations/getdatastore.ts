import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatastorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDatastoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetDatastoreSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDatastoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatastorePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDatastoreQueryParams;

  @SpeakeasyMetadata()
  security: GetDatastoreSecurity;
}


export class GetDatastoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  datastore?: shared.Datastore;

  @SpeakeasyMetadata()
  statusCode: number;
}
