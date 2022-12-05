import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBeGreetingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetBeGreetingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetBeGreetingSecurity;
}


export class GetBeGreetingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBeGreeting200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBeGreeting403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBeGreeting429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBeGreeting500ApplicationJsonAny?: any;
}
