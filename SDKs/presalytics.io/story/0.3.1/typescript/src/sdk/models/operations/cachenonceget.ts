import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CacheNonceGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nonce" })
  nonce: string;
}


export class CacheNonceGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CacheNonceGetPathParams;
}


export class CacheNonceGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  loginButton?: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
