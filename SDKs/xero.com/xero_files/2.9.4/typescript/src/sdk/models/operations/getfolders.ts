import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFoldersSortEnum {
    Name = "Name",
    Size = "Size",
    CreatedDateUtc = "CreatedDateUTC"
}


export class GetFoldersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFoldersSortEnum;
}


export class GetFoldersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFoldersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFoldersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFoldersQueryParams;

  @SpeakeasyMetadata()
  headers: GetFoldersHeaders;

  @SpeakeasyMetadata()
  security: GetFoldersSecurity;
}


export class GetFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folders?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
