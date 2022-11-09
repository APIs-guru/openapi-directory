import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNsxvControllerClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateNsxvControllerClusterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateNsxvControllerClusterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNsxvControllerClusterPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.NsxControllerDataCollection;

  @Metadata()
  security: UpdateNsxvControllerClusterSecurity;
}


export class UpdateNsxvControllerClusterResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  nsxControllerDataCollection?: shared.NsxControllerDataCollection;

  @Metadata()
  statusCode: number;
}
