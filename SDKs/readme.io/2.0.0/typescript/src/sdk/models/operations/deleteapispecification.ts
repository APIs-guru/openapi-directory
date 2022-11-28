import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteApiSpecificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteApiSpecificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteApiSpecificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiSpecificationPathParams;

  @SpeakeasyMetadata()
  security: DeleteApiSpecificationSecurity;
}


export class DeleteApiSpecificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
