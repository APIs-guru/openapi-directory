import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAdministrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class DeleteAdministrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAdministrationPathParams;
}


export class DeleteAdministrationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
