import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNsxvControllerClusterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNsxvControllerClusterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNsxvControllerClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNsxvControllerClusterPathParams;

  @SpeakeasyMetadata()
  security: GetNsxvControllerClusterSecurity;
}


export class GetNsxvControllerClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nsxControllerDataCollection?: shared.NsxControllerDataCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
