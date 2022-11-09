import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePeppolIdentifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class CreatePeppolIdentifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreatePeppolIdentifierPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreatePeppolIdentifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModels?: any[];

  @Metadata()
  peppolIdentifier?: any;

  @Metadata()
  statusCode: number;
}
