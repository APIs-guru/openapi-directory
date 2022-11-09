import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;
}


export class PackageVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class PackageVersionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class PackageVersionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackageVersionsPathParams;

  @Metadata()
  queryParams: PackageVersionsQueryParams;

  @Metadata()
  security: PackageVersionsSecurity;
}


export class PackageVersionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersPackageVersionsResponse?: shared.ControllersPackageVersionsResponse;
}
