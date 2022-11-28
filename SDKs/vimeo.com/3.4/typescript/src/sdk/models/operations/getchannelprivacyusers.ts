import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelPrivacyUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}

export enum GetChannelPrivacyUsersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetChannelPrivacyUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelPrivacyUsersDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetChannelPrivacyUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelPrivacyUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChannelPrivacyUsersQueryParams;
}


export class GetChannelPrivacyUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
