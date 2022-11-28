import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PackageId" })
  packageId?: number;
}


export class PackageDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PackageDeleteQueryParams;
}


export class PackageDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfBoolean?: shared.DefaultResponseDtoOfBoolean;

  @SpeakeasyMetadata()
  defaultResponseDtoOfString?: shared.DefaultResponseDtoOfString;

  @SpeakeasyMetadata()
  statusCode: number;
}
