import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePeppolIdentifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class CreatePeppolIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePeppolIdentifierPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreatePeppolIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModels?: any[];

  @SpeakeasyMetadata()
  peppolIdentifier?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
