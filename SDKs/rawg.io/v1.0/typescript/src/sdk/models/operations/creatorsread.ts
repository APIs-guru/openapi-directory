import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatorsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CreatorsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatorsReadPathParams;
}


export class CreatorsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personSingle?: shared.PersonSingle;

  @SpeakeasyMetadata()
  statusCode: number;
}
