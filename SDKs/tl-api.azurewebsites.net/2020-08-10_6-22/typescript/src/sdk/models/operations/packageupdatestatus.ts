import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageUpdateStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=packageId" })
  packageId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName?: string;
}


export class PackageUpdateStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PackageUpdateStatusQueryParams;
}


export class PackageUpdateStatusResponse extends SpeakeasyBase {
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
