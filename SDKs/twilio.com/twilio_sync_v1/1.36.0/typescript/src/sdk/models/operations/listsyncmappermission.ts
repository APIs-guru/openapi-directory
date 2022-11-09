import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCMAPPERMISSION_SERVERS = [
	"https://sync.twilio.com",
];



export class ListSyncMapPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncMapPermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncMapPermissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncMapPermissionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncMapPermissionPathParams;

  @Metadata()
  queryParams: ListSyncMapPermissionQueryParams;

  @Metadata()
  security: ListSyncMapPermissionSecurity;
}


export class ListSyncMapPermissionListSyncMapPermissionResponseMeta extends SpeakeasyBase {
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


export class ListSyncMapPermissionListSyncMapPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncMapPermissionListSyncMapPermissionResponseMeta;

  @Metadata({ data: "json, name=permissions", elemType: shared.SyncV1ServiceSyncMapSyncMapPermission })
  permissions?: shared.SyncV1ServiceSyncMapSyncMapPermission[];
}


export class ListSyncMapPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncMapPermissionResponse?: ListSyncMapPermissionListSyncMapPermissionResponse;

  @Metadata()
  statusCode: number;
}
