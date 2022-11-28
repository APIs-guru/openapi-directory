import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackageSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activeStatus" })
  activeStatus?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryId" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endPrice" })
  endPrice?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gymId" })
  gymId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestSource" })
  requestSource?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchText" })
  searchText?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startpPrice" })
  startpPrice?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class PackageSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PackageSearchQueryParams;
}


export class PackageSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfListOfPackageSearchDto?: shared.DefaultResponseDtoOfListOfPackageSearchDto;

  @SpeakeasyMetadata({ elemType: shared.DefaultResponseDtoOfPackageSearchDto })
  defaultResponseDtoOfPackageSearchDtos?: shared.DefaultResponseDtoOfPackageSearchDto[];

  @SpeakeasyMetadata()
  statusCode: number;
}
