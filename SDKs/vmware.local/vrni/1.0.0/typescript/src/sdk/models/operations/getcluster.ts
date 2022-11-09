import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetClusterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetClusterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClusterPathParams;

  @Metadata()
  queryParams: GetClusterQueryParams;

  @Metadata()
  security: GetClusterSecurity;
}


export class GetClusterResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  cluster?: shared.Cluster;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
