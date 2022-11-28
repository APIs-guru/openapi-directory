import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPathParams;

  @SpeakeasyMetadata()
  security: GetSecurity;
}


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deletionResponse?: shared.DeletionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
