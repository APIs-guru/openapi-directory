import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNsxvControllerClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNsxvControllerClusterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNsxvControllerClusterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNsxvControllerClusterPathParams;

  @Metadata()
  security: GetNsxvControllerClusterSecurity;
}


export class GetNsxvControllerClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nsxControllerDataCollection?: shared.NsxControllerDataCollection;

  @Metadata()
  statusCode: number;
}
