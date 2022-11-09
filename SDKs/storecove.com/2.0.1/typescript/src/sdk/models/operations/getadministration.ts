import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdministrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class GetAdministrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdministrationPathParams;
}


export class GetAdministrationResponse extends SpeakeasyBase {
  @Metadata()
  administration?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
