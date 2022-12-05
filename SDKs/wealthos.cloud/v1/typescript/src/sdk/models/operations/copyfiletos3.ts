import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CopyFileToS3Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CopyFileToS3Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CopyFileToS3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CopyFileToS3Headers;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: CopyFileToS3Security;
}


export class CopyFileToS3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  copyFileToS3200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  copyFileToS3400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  copyFileToS3401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  copyFileToS3403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  copyFileToS3404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  copyFileToS3429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  copyFileToS3500ApplicationJsonAny?: any;
}
