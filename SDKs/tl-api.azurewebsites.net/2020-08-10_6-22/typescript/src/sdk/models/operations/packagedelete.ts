import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PackageId" })
  packageId?: number;
}


export class PackageDeleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PackageDeleteQueryParams;
}


export class PackageDeleteResponse extends SpeakeasyBase {
  @Metadata()
  apiException?: shared.ApiException;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfBoolean?: shared.DefaultResponseDtoOfBoolean;

  @Metadata()
  defaultResponseDtoOfString?: shared.DefaultResponseDtoOfString;

  @Metadata()
  statusCode: number;
}
