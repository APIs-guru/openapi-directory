import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatorsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CreatorsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreatorsReadPathParams;
}


export class CreatorsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personSingle?: shared.PersonSingle;

  @Metadata()
  statusCode: number;
}
