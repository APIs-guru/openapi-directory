import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiReferenceDepartmentsIdLogoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiReferenceDepartmentsIdLogoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiReferenceDepartmentsIdLogoPathParams;
}


export class GetApiReferenceDepartmentsIdLogoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
