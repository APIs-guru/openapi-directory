import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFilesSortEnum {
    Name = "Name"
,    Size = "Size"
,    CreatedDateUtc = "CreatedDateUTC"
}


export class GetFilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFilesSortEnum;
}


export class GetFilesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFilesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFilesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFilesQueryParams;

  @Metadata()
  headers: GetFilesHeaders;

  @Metadata()
  security: GetFilesSecurity;
}


export class GetFilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  files?: shared.Files;

  @Metadata()
  statusCode: number;
}
