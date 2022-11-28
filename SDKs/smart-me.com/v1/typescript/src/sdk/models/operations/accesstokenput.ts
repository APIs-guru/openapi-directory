import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccessTokenPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  accessTokenToPut?: shared.AccessTokenToPut;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  accessTokenToPut1?: shared.AccessTokenToPut;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  accessTokenToPut2?: shared.AccessTokenToPut;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccessTokenPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AccessTokenPutRequests;
}


export class AccessTokenPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessTokenPut200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  accessTokenPut200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  accessTokenPut200TextJsonString?: string;

  @SpeakeasyMetadata()
  accessTokenPut200TextXmlString?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
