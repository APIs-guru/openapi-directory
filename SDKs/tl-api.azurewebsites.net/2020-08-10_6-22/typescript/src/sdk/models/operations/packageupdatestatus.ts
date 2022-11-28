import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageUpdateStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=packageId" })
  packageId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName?: string;
}


export class PackageUpdateStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PackageUpdateStatusQueryParams;
}


export class PackageUpdateStatusResponse extends SpeakeasyBase {
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
