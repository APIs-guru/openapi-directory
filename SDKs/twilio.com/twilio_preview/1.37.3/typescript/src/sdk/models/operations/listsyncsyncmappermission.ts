import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSyncSyncMapPermissionServerList = [
	"https://preview.twilio.com",
] as const;


export class ListSyncSyncMapPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncMapPermissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncMapPermissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: shared.PreviewSyncServiceSyncMapSyncMapPermission })
  permissions?: shared.PreviewSyncServiceSyncMapSyncMapPermission[];
}


export class ListSyncSyncMapPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSyncSyncMapPermissionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSyncSyncMapPermissionQueryParams;

  @SpeakeasyMetadata()
  security: ListSyncSyncMapPermissionSecurity;
}


export class ListSyncSyncMapPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSyncSyncMapPermissionResponse?: ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
