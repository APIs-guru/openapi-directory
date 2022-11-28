import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInstitutionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetInstitutionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstitutionsIdPathParams;
}


export class GetInstitutionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  institution?: shared.Institution;

  @SpeakeasyMetadata()
  statusCode: number;
}
