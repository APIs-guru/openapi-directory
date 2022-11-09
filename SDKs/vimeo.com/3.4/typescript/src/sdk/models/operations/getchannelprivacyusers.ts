import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelPrivacyUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}

export enum GetChannelPrivacyUsersDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetChannelPrivacyUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelPrivacyUsersDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetChannelPrivacyUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChannelPrivacyUsersPathParams;

  @Metadata()
  queryParams: GetChannelPrivacyUsersQueryParams;
}


export class GetChannelPrivacyUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
