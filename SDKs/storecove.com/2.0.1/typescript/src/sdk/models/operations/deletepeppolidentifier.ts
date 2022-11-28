import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePeppolIdentifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheme" })
  scheme: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=superscheme" })
  superscheme: string;
}


export class DeletePeppolIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePeppolIdentifierPathParams;
}


export class DeletePeppolIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
