import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccessTokenPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  accessTokenToPut?: shared.AccessTokenToPut;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  accessTokenToPut1?: shared.AccessTokenToPut;

  @Metadata({ data: "request, media_type=text/json" })
  accessTokenToPut2?: shared.AccessTokenToPut;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccessTokenPutRequest extends SpeakeasyBase {
  @Metadata()
  request: AccessTokenPutRequests;
}


export class AccessTokenPutResponse extends SpeakeasyBase {
  @Metadata()
  accessTokenPut200ApplicationJsonString?: string;

  @Metadata()
  accessTokenPut200ApplicationXmlString?: string;

  @Metadata()
  accessTokenPut200TextJsonString?: string;

  @Metadata()
  accessTokenPut200TextXmlString?: string;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
