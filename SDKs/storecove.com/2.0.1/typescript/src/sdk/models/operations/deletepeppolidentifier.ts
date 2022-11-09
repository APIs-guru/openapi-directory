import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePeppolIdentifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
  identifier: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scheme" })
  scheme: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=superscheme" })
  superscheme: string;
}


export class DeletePeppolIdentifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePeppolIdentifierPathParams;
}


export class DeletePeppolIdentifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
