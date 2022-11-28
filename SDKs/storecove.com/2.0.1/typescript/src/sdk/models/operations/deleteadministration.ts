import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAdministrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class DeleteAdministrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAdministrationPathParams;
}


export class DeleteAdministrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
