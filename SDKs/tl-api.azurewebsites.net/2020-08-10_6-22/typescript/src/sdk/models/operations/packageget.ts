import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=packageId" })
  packageId?: number;
}


export class PackageGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PackageGetQueryParams;
}


export class PackageGetResponse extends SpeakeasyBase {
  @Metadata()
  apiException?: shared.ApiException;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfPackageDto?: shared.DefaultResponseDtoOfPackageDto;

  @Metadata()
  statusCode: number;
}
