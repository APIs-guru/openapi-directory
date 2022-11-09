import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatastorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDatastoreQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetDatastoreSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDatastoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatastorePathParams;

  @Metadata()
  queryParams: GetDatastoreQueryParams;

  @Metadata()
  security: GetDatastoreSecurity;
}


export class GetDatastoreResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  datastore?: shared.Datastore;

  @Metadata()
  statusCode: number;
}
