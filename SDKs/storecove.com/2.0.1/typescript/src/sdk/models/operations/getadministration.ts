import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdministrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class GetAdministrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAdministrationPathParams;
}


export class GetAdministrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  administration?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
