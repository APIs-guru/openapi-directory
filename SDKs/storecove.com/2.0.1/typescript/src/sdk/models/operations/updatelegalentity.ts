import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLegalEntityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateLegalEntityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateLegalEntityPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class UpdateLegalEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModels?: any[];

  @SpeakeasyMetadata()
  legalEntity?: shared.LegalEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
