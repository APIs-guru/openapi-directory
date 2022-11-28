import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLegalEntityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetLegalEntityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLegalEntityPathParams;
}


export class GetLegalEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  legalEntity?: shared.LegalEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
