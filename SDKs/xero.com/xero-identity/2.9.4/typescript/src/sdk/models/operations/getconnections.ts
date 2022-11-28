import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConnectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authEventId" })
  authEventId?: string;
}


export class GetConnectionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConnectionsQueryParams;

  @SpeakeasyMetadata()
  security: GetConnectionsSecurity;
}


export class GetConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connections?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
