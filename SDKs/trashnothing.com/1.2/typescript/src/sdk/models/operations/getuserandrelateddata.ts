import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserAndRelatedDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetUserAndRelatedDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserAndRelatedDataPathParams;
}


export class GetUserAndRelatedData200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedback", elemType: shared.Feedback })
  feedback?: shared.Feedback[];

  @Metadata({ data: "json, name=offer_count" })
  offerCount?: number;

  @Metadata({ data: "json, name=posts", elemType: shared.Post })
  posts?: shared.Post[];

  @Metadata({ data: "json, name=user" })
  user?: shared.User;

  @Metadata({ data: "json, name=wanted_count" })
  wantedCount?: number;
}


export class GetUserAndRelatedDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getUserAndRelatedData200ApplicationJsonObject?: GetUserAndRelatedData200ApplicationJson;
}
