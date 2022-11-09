import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFoldersSortEnum {
    Name = "Name"
,    Size = "Size"
,    CreatedDateUtc = "CreatedDateUTC"
}


export class GetFoldersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFoldersSortEnum;
}


export class GetFoldersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFoldersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFoldersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFoldersQueryParams;

  @Metadata()
  headers: GetFoldersHeaders;

  @Metadata()
  security: GetFoldersSecurity;
}


export class GetFoldersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  folders?: any[];

  @Metadata()
  statusCode: number;
}
