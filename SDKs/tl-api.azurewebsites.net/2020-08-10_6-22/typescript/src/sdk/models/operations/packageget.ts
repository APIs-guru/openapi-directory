import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=packageId" })
  packageId?: number;
}


export class PackageGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PackageGetQueryParams;
}


export class PackageGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfPackageDto?: shared.DefaultResponseDtoOfPackageDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
