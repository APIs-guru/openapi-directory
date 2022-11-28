import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LatestPackagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;
}


export class LatestPackageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class LatestPackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LatestPackagePathParams;

  @SpeakeasyMetadata()
  security: LatestPackageSecurity;
}


export class LatestPackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersPackageDetailResponse?: shared.ControllersPackageDetailResponse;
}
