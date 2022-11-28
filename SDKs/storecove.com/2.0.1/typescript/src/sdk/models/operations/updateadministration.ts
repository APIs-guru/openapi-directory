import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAdministrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class UpdateAdministrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAdministrationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class UpdateAdministrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  administration?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
