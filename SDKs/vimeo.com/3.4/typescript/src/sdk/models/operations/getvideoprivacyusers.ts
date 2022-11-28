import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoPrivacyUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoPrivacyUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVideoPrivacyUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoPrivacyUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideoPrivacyUsersQueryParams;
}


export class GetVideoPrivacyUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
