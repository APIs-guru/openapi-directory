import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CacheNonceGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nonce" })
  nonce: string;
}


export class CacheNonceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CacheNonceGetPathParams;
}


export class CacheNonceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  loginButton?: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
