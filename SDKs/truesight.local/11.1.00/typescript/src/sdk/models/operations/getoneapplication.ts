import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOneApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: string;
}


export class GetOneApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOneApplicationPathParams;
}


export class GetOneApplicationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
