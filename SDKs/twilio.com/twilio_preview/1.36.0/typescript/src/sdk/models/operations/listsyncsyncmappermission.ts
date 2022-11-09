import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCSYNCMAPPERMISSION_SERVERS = [
	"https://preview.twilio.com",
];



export class ListSyncSyncMapPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncMapPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncMapPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncMapPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncSyncMapPermissionPathParams;

  @Metadata()
  queryParams: ListSyncSyncMapPermissionQueryParams;

  @Metadata()
  security: ListSyncSyncMapPermissionSecurity;
}


export class ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta;

  @Metadata({ data: "json, name=permissions", elemType: shared.PreviewSyncServiceSyncMapSyncMapPermission })
  permissions?: shared.PreviewSyncServiceSyncMapSyncMapPermission[];
}


export class ListSyncSyncMapPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncSyncMapPermissionResponse?: ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse;

  @Metadata()
  statusCode: number;
}
