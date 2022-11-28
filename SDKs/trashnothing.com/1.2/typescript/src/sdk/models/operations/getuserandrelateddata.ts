import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserAndRelatedDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetUserAndRelatedData200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedback", elemType: shared.Feedback })
  feedback?: shared.Feedback[];

  @SpeakeasyMetadata({ data: "json, name=offer_count" })
  offerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=posts", elemType: shared.Post })
  posts?: shared.Post[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: shared.User;

  @SpeakeasyMetadata({ data: "json, name=wanted_count" })
  wantedCount?: number;
}


export class GetUserAndRelatedDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserAndRelatedDataPathParams;
}


export class GetUserAndRelatedDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUserAndRelatedData200ApplicationJsonObject?: GetUserAndRelatedData200ApplicationJson;
}
