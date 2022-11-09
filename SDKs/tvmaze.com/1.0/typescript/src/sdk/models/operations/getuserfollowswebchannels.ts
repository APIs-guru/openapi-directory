import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserFollowsWebchannelsEmbedEnum {
    Webchannel = "webchannel"
}


export class GetUserFollowsWebchannelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserFollowsWebchannelsEmbedEnum;
}


export class GetUserFollowsWebchannelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserFollowsWebchannelsQueryParams;
}


export class GetUserFollowsWebchannelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.WebchannelFollow })
  webchannelFollows?: shared.WebchannelFollow[];
}
