import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNsxvControllerClusterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateNsxvControllerClusterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateNsxvControllerClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNsxvControllerClusterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NsxControllerDataCollection;

  @SpeakeasyMetadata()
  security: UpdateNsxvControllerClusterSecurity;
}


export class UpdateNsxvControllerClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nsxControllerDataCollection?: shared.NsxControllerDataCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
