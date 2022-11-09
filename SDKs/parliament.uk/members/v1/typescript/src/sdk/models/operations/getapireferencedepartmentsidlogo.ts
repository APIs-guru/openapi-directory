import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiReferenceDepartmentsIdLogoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiReferenceDepartmentsIdLogoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiReferenceDepartmentsIdLogoPathParams;
}


export class GetApiReferenceDepartmentsIdLogoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
