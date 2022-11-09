import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConnectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authEventId" })
  authEventId?: string;
}


export class GetConnectionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetConnectionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConnectionsQueryParams;

  @Metadata()
  security: GetConnectionsSecurity;
}


export class GetConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  connections?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
