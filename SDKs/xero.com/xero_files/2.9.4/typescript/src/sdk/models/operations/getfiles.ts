import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFilesSortEnum {
    Name = "Name",
    Size = "Size",
    CreatedDateUtc = "CreatedDateUTC"
}


export class GetFilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFilesSortEnum;
}


export class GetFilesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFilesQueryParams;

  @SpeakeasyMetadata()
  headers: GetFilesHeaders;

  @SpeakeasyMetadata()
  security: GetFilesSecurity;
}


export class GetFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  files?: shared.Files;

  @SpeakeasyMetadata()
  statusCode: number;
}
