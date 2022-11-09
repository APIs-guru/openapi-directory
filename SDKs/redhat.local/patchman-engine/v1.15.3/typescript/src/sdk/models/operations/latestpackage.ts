import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LatestPackagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;
}


export class LatestPackageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class LatestPackageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LatestPackagePathParams;

  @Metadata()
  security: LatestPackageSecurity;
}


export class LatestPackageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersPackageDetailResponse?: shared.ControllersPackageDetailResponse;
}
