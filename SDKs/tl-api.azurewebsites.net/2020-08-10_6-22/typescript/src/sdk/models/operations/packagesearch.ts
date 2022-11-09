import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackageSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=activeStatus" })
  activeStatus?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=categoryId" })
  categoryId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endPrice" })
  endPrice?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gymId" })
  gymId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=requestSource" })
  requestSource?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchText" })
  searchText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startpPrice" })
  startpPrice?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class PackageSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PackageSearchQueryParams;
}


export class PackageSearchResponse extends SpeakeasyBase {
  @Metadata()
  apiException?: shared.ApiException;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfListOfPackageSearchDto?: shared.DefaultResponseDtoOfListOfPackageSearchDto;

  @Metadata({ elemType: shared.DefaultResponseDtoOfPackageSearchDto })
  defaultResponseDtoOfPackageSearchDtos?: shared.DefaultResponseDtoOfPackageSearchDto[];

  @Metadata()
  statusCode: number;
}
