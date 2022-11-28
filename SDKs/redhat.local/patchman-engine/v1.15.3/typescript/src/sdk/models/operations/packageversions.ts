import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageVersionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;
}


export class PackageVersionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class PackageVersionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class PackageVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageVersionsPathParams;

  @SpeakeasyMetadata()
  queryParams: PackageVersionsQueryParams;

  @SpeakeasyMetadata()
  security: PackageVersionsSecurity;
}


export class PackageVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersPackageVersionsResponse?: shared.ControllersPackageVersionsResponse;
}
